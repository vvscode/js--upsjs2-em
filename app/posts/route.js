import Ember from 'ember';

const POSTS_COUNT = 20;

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.all([
            Ember.$.getJSON('https://jsonplaceholder.typicode.com/posts'),
            Ember.$.getJSON('https://jsonplaceholder.typicode.com/users')
        ]).then(([posts, users]) => {
            const pagePosts = posts.slice(0, POSTS_COUNT);
            users = Ember.A(users);
            pagePosts.forEach((post) => {
                post.user = users.findBy('id', post.userId);
            });
            return pagePosts;
        });
    }
});
