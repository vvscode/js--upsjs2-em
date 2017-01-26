import Ember from 'ember';

export default Ember.Component.extend({
    posts: null,
    activePost: null,

    actions: {
        onPostSelect(post) {
            this.set('activePost', post);
        }
    }
});
