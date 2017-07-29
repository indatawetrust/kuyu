# kuyu
[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/kuyu.svg)](https://travis-ci.org/indatawetrust/kuyu)

```js
import kuyu from 'kuyu'

kuyu({
  name: 'Ahmet',
  gender: 'male'
},{
  name: /^[A-Z]/,
  gender: /^(fe){0,1}male$/
})
// ~> true

kuyu({
  a: 'aaaaa',
  b: 'bbbbbb',
  c: 'ccccccc',
  d: 'dddddddd'
},{
  '*': /^[a-z]{5,8}$/
})
// ~> true

kuyu({
  a: 'aaaaa',
  b: 'bbbbbb',
  c: 'ccccccc',
  d: 'ddddddddd'
},{
  '*': /^[a-z]{5,8}$/
})
// ~> false

```
