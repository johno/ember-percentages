import Ember from 'ember';

// https://github.com/johnotander/to-percentage
export function percentage(values) {
  let value = (values[0] || 0)*100;
  let numDecimals = values[1] || 0;
  return value.toFixed(value % 1 === 0 ? 0 : numDecimals) + '%';
}

export default Ember.Helper.helper(percentage);
