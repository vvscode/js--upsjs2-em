import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.$
            .getJSON('https://jsonplaceholder.typicode.com/posts')
            // .then((data) =>  data.slice(0, 20))
            .then((data) =>  data.filter((item, index) => index < 20));
    }
});
