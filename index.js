#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const pkg = require(path.join(process.cwd(), 'package.json'))

const readmePath = path.join(process.cwd(), 'README.md')
let readme = fs.readFileSync(readmePath).toString()
const latestReleaseLabel = `v${pkg.version}`
const latestReleaseLink = `https://github.com/${pkg.repository}/releases/tag/${latestReleaseLabel}`
readme = readme.replace(
  /Latest Release: .*?,/,
  `Latest Release: [${latestReleaseLabel}](${latestReleaseLink}),`
)
const majorVersion = pkg.version.split('.')[0]
const latestMajorReleaseLabel = `v${majorVersion}.0.0`
const latestMajorReleaseLink = `https://github.com/${pkg.repository}/releases/tag/${latestMajorReleaseLabel}`
readme = readme.replace(
  /Latest Major Release: .*?,/,
  `Latest Major Release: [${latestMajorReleaseLabel}](${latestMajorReleaseLink}),`
)
const allReleasesLink = `https://github.com/${pkg.repository}/releases`
readme = readme.replace(
  /\[All Releases\]\(.*?\)/,
  `[All Releases](${allReleasesLink})`
)
fs.writeFileSync(readmePath, readme)

function blue (string) {
  return `\u001b[34m${string}\u001b[39m`
}

console.log('Updated README.md:')
console.log(`Latest Release: ${latestReleaseLabel} ${blue(latestReleaseLink)}`)
console.log(`Latest Major Release: ${latestMajorReleaseLabel} ${blue(latestMajorReleaseLink)}`)
console.log(`All Releases: ${blue(allReleasesLink)}`)
