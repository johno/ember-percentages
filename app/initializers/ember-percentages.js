import Ember from 'ember';
import { percentage } from 'ember-percentages/helpers/percentage';

export function initialize(/* container, application */) {
  Ember.handlebars.helper('percentage', percentage);
  Ember.handlebars.helper('pct', percentage);
}

export default {
  name: 'ember-percentages',
  initialize: initialize
};
