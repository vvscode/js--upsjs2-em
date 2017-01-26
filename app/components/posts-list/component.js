import Ember from 'ember';

export default Ember.Component.extend({
    posts: null,
    activePost: null,

    actions: {
        onPostSelect(post) {
            let activePost = this.get('activePost');
            if (activePost === post) {
                this.set('activePost', null);
            } else {
                this.set('activePost', post);
            }
        }
    }
});
