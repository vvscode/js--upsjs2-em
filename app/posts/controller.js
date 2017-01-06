import Ember from 'ember';

const COLORS = [
    'red',
    'blue',
    'white',
    'black',
    'yellow',
    'green',
    'gray'
];

export default Ember.Controller.extend({
    color: 'white',

    actions: {
        makeRed() {
            this.set('color', 'red');
        },
        makeBlue() {
            this.set('color', 'blue');
        },
        setColor(color) {
            this.set('color', color);
        },
        changeColor(currentColor) {
            let currentIndex = COLORS.indexOf(currentColor);
            let newIndex = currentIndex + 1;
            let newColorIndex = newIndex % COLORS.length;
            let newColor =  COLORS[newColorIndex];
            this.set('color', newColor);
        }
    }
});