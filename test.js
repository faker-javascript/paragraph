import test from 'ava';
import paragraph from './index.js';

test('paragraph return type to be string', t => {
    t.is(typeof paragraph(), 'string');
});

test('paragraph sentences count is 10', t => {
    t.is(paragraph().split('. ').length, 10);
});

test('paragraph sentences count is 5', t => {
    t.is(paragraph({sentences: 5}).split('. ').length, 5);
});

test('paragraph sentences count is 10 when option sentences = -1', t => {
    t.is(paragraph({sentences: -1}).split('. ').length, 10);
});

test('paragraph sentences words count when option sentences = 1 and wordsMin and wordsMax', t => {
    t.true(paragraph({sentences: 1, wordsMin: 3, wordsMax: 5}).split(' ').length < 6);
    t.true(paragraph({sentences: 1, wordsMin: 3, wordsMax: 5}).split(' ').length > 2);
});

test('paragraph sentences words count when option sentences = 1 and wordsMin and wordsMax is negative', t => {
    t.true(paragraph({sentences: 1, wordsMin: -3, wordsMax: -5}).split(' ').length < 11);
    t.true(paragraph({sentences: 1, wordsMin: -3, wordsMax: -5}).split(' ').length > 4);
});
