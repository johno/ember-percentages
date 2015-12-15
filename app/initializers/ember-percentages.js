import Ember from 'ember';
import { percentage } from 'ember-percentages/helpers/percentage';

export function initialize(/* container, application */) {
  Ember.Helper.helper('percentage', percentage);
  Ember.Helper.helper('pct', percentage);
}

export default {
  name: 'ember-percentages',
  initialize: initialize
};
