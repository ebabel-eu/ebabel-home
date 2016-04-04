import chai from 'chai';

import Projects from './projects.js';

describe('Projects', () => {

  it('can be instantiated with a constructor', () => {
    const projects = new Projects();

    chai.assert.instanceOf(projects, Projects);
  })

  describe('#render', () => {

    it('returns something that is not undefined', () => {
      const projects = new Projects();
      const result = projects.render();

      chai.assert.notEqual(result, undefined);
    })

  })

})
