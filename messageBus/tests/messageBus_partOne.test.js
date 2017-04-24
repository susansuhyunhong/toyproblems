var expect = require('chai').expect;
var sinon = require('sinon');
var MessageBus = require('../src/MessageBus_partOne.js');

describe('message bus part one', () => {

  it('should allow a subscriber to a topic', () => {
    let messageBus = new MessageBus();

    let spy = sinon.spy();
    let payload = {'foo': 'bar', 'goo': 'gar'};

    messageBus.subscribe('new_signup', spy);
    messageBus.publish('new_signup', payload);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(payload)).to.be.true;
  });

  it('should allow multiple subscribers to a topic', () => {
    let messageBus = new MessageBus();

    let spyOne = sinon.spy();
    let spyTwo = sinon.spy();

    let payload = {'foo': 'bar', 'goo': 'gar'};

    messageBus.subscribe('new_signup', spyOne);
    messageBus.subscribe('new_signup', spyTwo);
    messageBus.publish('new_signup', payload);

    expect(spyOne.calledOnce).to.be.true;
    expect(spyOne.calledWith(payload)).to.be.true;
    expect(spyTwo.calledOnce).to.be.true;
    expect(spyTwo.calledWith(payload)).to.be.true;
  });

  it('should invoke callbacks in order subscribed', () => {
    let messageBus = new MessageBus();

    // create four spies (kind of hacky)
    let spies = [0, 1, 2, 3].map(() => sinon.spy());

    let payload = {'foo': 'bar', 'goo': 'gar'};

    // each spy subscribes to the new_signup topic
    spies.forEach(spy => messageBus.subscribe('new_signup', spy));
    messageBus.publish('new_signup', payload);

    // confirm each spy was called
    spies.forEach(spy => {
      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWith(payload)).to.be.true;      
    })
    // confirm the call order was the same as subscribed
    sinon.assert.callOrder(...spies);
  });

  it('should allow multiple subscribers to different topics', () => {
    let messageBus = new MessageBus();

    let spyOne = sinon.spy();
    let spyTwo = sinon.spy();

    let payloadOne = {'foo': 'bar', 'goo': 'gar'};
    let payloadTwo = {'amount': 50};

    messageBus.subscribe('new_signup', spyOne);
    messageBus.subscribe('payment_recieved', spyTwo);
    messageBus.publish('new_signup', payloadOne);

    expect(spyOne.calledOnce).to.be.true;
    expect(spyOne.calledWith(payloadOne)).to.be.true;
    expect(spyTwo.callCount).to.equal(0);

    messageBus.publish('payment_recieved', payloadTwo);
    expect(spyTwo.calledOnce).to.be.true;
    expect(spyTwo.calledWith(payloadTwo)).to.be.true;
    expect(spyOne.callCount).to.equal(1); // from previous call
  });

});