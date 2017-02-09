import Ember from 'ember';

export function firstOfList([list, count=10]/*, hash*/) {
  return list.filter((item, index) => index < count);
}

export default Ember.Helper.helper(firstOfList);
