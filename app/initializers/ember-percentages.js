import Ember from 'ember';
import { percentage } from 'ember-percentages/helpers/percentage';

export function initialize(/* container, application */) {
  Ember.Handlebars.helper('percentage', percentage);
  Ember.Handlebars.helper('pct', percentage);
}

export default {
  name: 'ember-percentages',
  initialize: initialize
};
