import Ember from 'ember';

// https://github.com/johnotander/to-percentage
export function percentage(value, numDecimals) {
  value = value || 0;
  value *= 100;
  return value.toFixed(value % 1 === 0 ? 0 : numDecimals) + '%';
}

export default Ember.Handlebars.makeBoundHelper(percentage);
