import Ember from 'ember';

export default Ember.Controller.extend({
    color: 'white',

    actions: {
        makeRed() {
            this.set('color', 'red');
        },
        makeBlue() {
            this.set('color', 'blue');
        }
    }
});
