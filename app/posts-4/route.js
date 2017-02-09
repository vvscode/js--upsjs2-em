import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.$.when(
            Ember.$.getJSON('https://jsonplaceholder.typicode.com/posts'),
            Ember.$.getJSON('https://jsonplaceholder.typicode.com/users')
        ).then(([posts], [users]) => {
            users = Ember.A(users);
            // posts.forEach((post) => {
            //     // post.user = users.find((user) => user.id == post.userId);
            //     post.user = users.findBy('id', post.userId);
            // });
            posts.forEach((post) => post.user = users.findBy('id', post.userId));
            return posts;
        });
    }
});
