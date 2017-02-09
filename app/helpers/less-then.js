import Ember from 'ember';

export function lessThen([number, compareTo]/*, hash*/) {
  return number < compareTo;
}

export default Ember.Helper.helper(lessThen);