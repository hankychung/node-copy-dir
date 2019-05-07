## description
copy the whole directory from here to there

## usage
```
const copyDir = require('@hankychung/node-copy-dir')

copyDir('./somewhere/src', './other/dest').then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})
```

then the whole `src` directory will be copyed to the `dest` directory, if the promise is resolved

## params
copyDir(srcPath, destPath, isIncludeRootFolder)

`srcPath`
type: `string`
desc: the source directory path

`destPath`
type: `string`
desc: the destination path

`isIncludeRootFolder`
type: `boolean`
desc: copy with the source directory's root folder or not
default: `true`
