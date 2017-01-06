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
    top: 100,
    right: 100,
    step: 50,

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
        },
        move(direction) {
            const step = this.get('step');
            if(direction === 'up') {
                this.set('top', this.get('top') - step);
            } else if (direction === 'down') {
                this.set('top', this.get('top') + step);
            } else if (direction === 'right') {
                this.set('right', this.get('right') - step);
            } else if (direction === 'left') {
                this.set('right', this.get('right') + step);
            }
        }
    }
});