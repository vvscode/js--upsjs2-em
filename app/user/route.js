import Ember from 'ember';

export default Ember.Route.extend({
    model({ user_id }) {
        // const  user_id = param.user_id;
        return Ember.$.getJSON(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    },
});

// var p = { id: 1 };
//
// var id = p.id;
// var { id } = p;
// var { id } = { id: 1};