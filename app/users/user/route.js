import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.resolve({
            id: 0,
            name: 'VASILIY'
        });
    }
});
