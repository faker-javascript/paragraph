import {expectType} from 'tsd';
import paragraph from './index.js';

expectType<string>(paragraph());
expectType<string>(paragraph({sentences: 5}));
expectType<string>(paragraph({sentences: 5, wordsMin: 5}));
expectType<string>(paragraph({sentences: 5, wordsMax: 10}));
