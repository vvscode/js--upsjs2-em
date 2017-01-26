import Ember from 'ember';

export default Ember.Component.extend({
    post: null,
    showBody: false,

    click() {
        let showBody = this.get('showBody');
        this.set('showBody', !showBody);
    }
});
