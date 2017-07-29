import test from 'ava';
import kuyu from './index';

test('number', t => {
  t.is(kuyu({
    size: 2324324
  },{
    size: /[0-9]/
  }), true)
})

test('string', t => {
  t.is(kuyu({
    size: 'sdaddsadsad'
  },{
    size: /[a-z]/
  }), true)
})

test('all', t => {
  t.is(kuyu({
    name: 'Ahmet',
    surname: 'simsek'
  },{
    '*': /^[A-Z]/
  }), false)
})

test('limit', t => {
  t.is(kuyu({
    a: 'aaaaa',
    b: 'bbbbbb',
    c: 'ccccccc',
    d: 'dddddddd'
  },{
    '*': /^[a-z ]{5,8}$/
  }), true)
})
