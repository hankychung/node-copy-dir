## description
copy the whole directory from here to there

## usage
```
const copyDir = require('@hankychung/node-copy-dir')

copyDir('./somewhere/src', './other/dest').then(() => {
  // the whole `src` directory will be copied to the `dest` directory, if the promise is resolved
}).catch(e => {
  console.log(e)
})
```

## params
_example: copyDir(srcPath, destPath, isIncludeRootFolder)_

**_srcPath_**

type: `string`

desc: the source directory path

**_destPath_**

type: `string`

desc: the destination path

**_isIncludeRootFolder_**

type: `boolean`

desc: copy with the source directory's root folder or not

default: `true`
