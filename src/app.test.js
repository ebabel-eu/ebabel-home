import chai from 'chai';

import App from './app.js';

describe('App', () => {

  it('can be instantiated with a constructor', () => {
    const app = new App();

    chai.assert.instanceOf(app, App);
  })

  describe('#render', () => {

    it('returns something that is not undefined', () => {
      const app = new App();
      const result = app.render();

      chai.assert.notEqual(result, undefined);
    })

  })

})
