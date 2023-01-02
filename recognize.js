import maleNames from './male-names.js';
import femaleNames from './female-names.js';

export default function recognize (str, sex) {
  let order = [maleNames, femaleNames]
  if (sex === 'мужчина') {
    order = [maleNames, femaleNames];
  } else if (sex === 'женщина') {
    order = [femaleNames, maleNames];
  }
  let found;
  order.some(names => {
    found = Object.values(names).find(name => str.match(name.regexp));
    if (found) {
      return true;
    }
  });
  if (found) {
    return found.name;
  }
}