import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.$.getJSON('https://jsonplaceholder.typicode.com/posts')
            .then((posts) => {
                // http://emberjs.com/api/classes/Ember.Array.html
                posts = Ember.A(posts);
                // let userIds = posts.map((post) => post.userId);
                let userIds = posts.mapBy('userId');

                // let uniqUserIds = Object.values(userIds.reduce((hash, id) => {
                //     hash[id] = id;
                //     return hash;
                // }, {}));
                let uniqUserIds = Ember.A(userIds).uniq();

                let usersList = uniqUserIds.map((id) => Ember.$.getJSON(`https://jsonplaceholder.typicode.com/users/${id}`))
                return Ember.$.when(...usersList).then(function() {
                    let data = [].slice.call(arguments);
                    const users = Ember.A(data).mapBy('firstObject');
                    
                    posts.forEach((post) => post.user = users.findBy('id', post.userId));

                    return posts;
                });
            });
    }
});
