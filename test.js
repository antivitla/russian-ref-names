import maleNames from './male-names.js';
import femaleNames from './female-names.js';
import recognize from './recognize.js';

test('Распознавание пола', () => {
  expect(recognize('саша', 'мужчина')[0]).toBe('Александр');
  expect(recognize('саша', 'женщина')[0]).toBe('Александра');
  expect(recognize('ваня')).toEqual(['Иван']);
  expect(recognize('катя')).toEqual(['Екатерина']);
  expect(recognize('маша')).toEqual(['Мария']);
  expect(recognize('даша')).toEqual(['Дарья']);
  expect(recognize('таня')).toEqual(['Татьяна']);
  expect(recognize('вася')).toEqual(['Василий']);
  expect(recognize('игорек')).toEqual(['Игорь']);
  expect(recognize('рома')).toEqual(['Роман']);
});