import maleNames from './male-names.js';
import femaleNames from './female-names.js';

export default function recognize (str, sex = '') {
  let order = [maleNames, femaleNames]
  if (sex.toLowerCase() === 'мужчина') {
    order = [maleNames, femaleNames];
  } else if (sex.toLowerCase() === 'женщина') {
    order = [femaleNames, maleNames];
  }
  const found = [];
  order.forEach(names => {
    found.push(...Object.values(names).filter(name => str.match(name.regexp)));
  });
  return found.map(item => item.name);
}