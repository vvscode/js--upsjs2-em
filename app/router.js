import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
      this.route('user',  { path: '/:user_id' });
  });
  this.route('posts');
  this.route('posts-1');
  this.route('posts-2');
  this.route('posts-3');
  this.route('posts-4');
  this.route('posts-5');
});

export default Router;
