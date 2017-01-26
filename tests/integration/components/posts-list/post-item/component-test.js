import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('posts-list/post-item', 'Integration | Component | posts list/post item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{posts-list/post-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#posts-list/post-item}}
      template block text
    {{/posts-list/post-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
