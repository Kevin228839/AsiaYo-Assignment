const chai = require('chai');
const chaiHttp = require('chai-http');
const {app} = require('./index');

chai.use(chaiHttp);

const expect = chai.expect;

describe('Exchange Currency Api', () => {
  it('should return a status code of 200 when query parameters are valid', (done) => {
    chai.request(app)
      .get('/')
      .query({
        source: "USD",
        target: "JPY",
        amount: "$1,525"
      })
      .end((err, res) => {
        if(err) {
          done(err);
        } else {
          expect(res).to.have.status(200);
          expect(res.body.amount).to.equal("$170,496.53");
          done();
        }
      });
  });
  it('should return a status code of 400 when query parameters are invalid', (done) => {
    chai.request(app)
      .get('/')
      .query({
        source: "USD",
        target: "JPY",
        amount: "$1525" // incorrect format
      })
      .end((err, res) => {
        if(err) {
          done(err);
        } else {
          expect(res).to.have.status(400);
          done();
        }
      });
  });
});