import fs from 'node:fs/promises';
import maleNames from './male-names.js';
import femaleNames from './female-names.js';

// Исправить RegExp для JSON
Object.values(maleNames).forEach(name => {
  name.regexp = name.regexp.toString();
});
Object.values(femaleNames).forEach(name => {
  name.regexp = name.regexp.toString();
});

fs.writeFile('male-names.json', JSON.stringify(maleNames, null, '  '));
fs.writeFile('female-names.json', JSON.stringify(femaleNames, null, '  '));
