import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return (new Array(10)).fill(1).map((_, index) => ({
            id: index + 1,
            title: `Post # ${index + 1}`,
            body: `Body for post #${index +1}`
        }));
    }
});
