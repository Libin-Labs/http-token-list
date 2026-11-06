import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('parses tokens', () => {
  assert.deepEqual(api.parseTokenList('gzip, br'), ['gzip', 'br']);
});
test('trims optional whitespace', () => {
  assert.deepEqual(api.parseTokenList(' gzip ,  br '), ['gzip', 'br']);
});
test('preserves duplicates', () => {
  assert.deepEqual(api.parseTokenList('a,a'), ['a', 'a']);
});
test('formats tokens', () => {
  assert.equal(api.formatTokenList(['gzip', 'br']), 'gzip, br');
});
test('accepts empty header', () => {
  assert.deepEqual(api.parseTokenList(''), []);
});
test('rejects quoted value', () => {
  assert.throws(() => api.parseTokenList('"gzip"'), RangeError);
});
