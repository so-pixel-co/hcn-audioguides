import { basename } from 'node:path'
import { writeFile } from 'node:fs'

import { globby } from 'globby'
import { getVideoDurationInSeconds } from 'get-video-duration'

import tracksData from '../src/data/tracks.json' assert { type: 'json' }

const PATTERN = 'public/video/*.mp4'
const DATA_PATH = 'src/data/tracks.json'

const paths = await globby(PATTERN)

for (const path of paths) {
  const slug = basename(path, '.mp4')
  const duration = await getVideoDurationInSeconds(path)

  console.log(`Extracted duration for slug ${slug}:`, duration)

  const trackIndex = tracksData.findIndex(track => track.slug === slug)
  if (trackIndex === -1) {
    console.error('Track not found in JSON for slug:', slug)
    continue
  }

  tracksData[trackIndex].duration = duration
}

writeFile(DATA_PATH, JSON.stringify(tracksData, null, 2), err => {
  if (err) {
    console.error(err)
    return
  }

  console.log('Updating track data', tracksData)
})