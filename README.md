## description
copy the whole directory from here to there

## usage
```
const copy = require('@hankychung/node-copy-dir')

copy('src', 'dest').then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})
```

then the whole `src` directory will be copyed to the `dest` directory, if the promise is resolved
