import maleNames from './male-names.js';
import femaleNames from './female-names.js';
import recognize from './recognize.js';

test('Распознавание пола', () => {
  expect(recognize('саша', 'мужчина')).toBe('Александр');
  expect(recognize('саша', 'женщина')).toBe('Александра');
  expect(recognize('ваня')).toBe('Иван');
  expect(recognize('катя')).toBe('Екатерина');
  expect(recognize('маша')).toBe('Мария');
  expect(recognize('даша')).toBe('Дарья');
  expect(recognize('таня')).toBe('Татьяна');
  expect(recognize('вася')).toBe('Василий');
  expect(recognize('игорек')).toBe('Игорь');
  expect(recognize('рома')).toBe('Роман');
});