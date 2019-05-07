const fs = require('fs')
const stat = fs.stat
const statSync = fs.statSync

async function copyDir(src, dist) {
  await checkStat(src)
  await checkStat(dist)
  const dirName = src.indexOf('/') === -1 ? src : src.split('/').pop(),
    distDir = `${dist}/${dirName}`
  await makeDir(distDir)
  const paths = fs.readdirSync(src)
  paths.forEach(path => {
    const srcPath = `${src}/${path}`
    if (statSync(srcPath).isFile()) {
      fs.createReadStream(srcPath).pipe(fs.createWriteStream(`${distDir}/${path}`))
    } else if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, distDir)
    }
  })
  return ('successed')
}

function checkStat(src) {
  return new Promise((resolve, reject) => {
    stat(src, (err, stat) => {
      if (err) {
        if (err.errno === -4058) reject(`ERROR! no such file or directory --> ${src}`)
        reject(err)
      } else if (!stat.isDirectory()) {
        reject(`ERROR! not a directory! --> ${src}`)
      }
      resolve()
    })
  })
}

function makeDir(path) {
  return new Promise((resolve) => {
    fs.access(path, fs.constants.F_OK, err => {
      if (err) fs.mkdirSync(path)
      resolve()
    })
  })
}

module.exports = copyDir
