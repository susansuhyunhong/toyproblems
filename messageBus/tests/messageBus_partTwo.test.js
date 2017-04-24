var expect = require('chai').expect;
var sinon = require('sinon');
var MessageBus = require('../src/MessageBus_partTwo.js');

describe('message bus part two', () => {

  it('should allow a subscriber to a topic on a specific channel', () => {
    let messageBus = new MessageBus();

    let callback = sinon.spy();
    let payload = {'foo': 'bar', 'goo': 'gar'};
    let channel = 'commerce';
    let topic = 'order_complete';

    messageBus.subscribe({ topic, channel, callback });
    messageBus.publish({ topic, channel, payload });

    expect(callback.calledOnce).to.be.true;
    expect(callback.calledWith(payload)).to.be.true;
  });

  it('should allow multiple subscribers to a topic on a specific channel', () => {
    let messageBus = new MessageBus();

    let callbackOne = sinon.spy();
    let callbackTwo = sinon.spy();

    let payload = {'foo': 'bar', 'goo': 'gar'};
    let channel = 'commerce';
    let topic = 'order_complete';

    messageBus.subscribe({ topic, channel, callback: callbackOne });
    messageBus.subscribe({ topic, channel, callback: callbackTwo });
    messageBus.publish({ topic, channel, payload });

    expect(callbackOne.calledOnce).to.be.true;
    expect(callbackOne.calledWith(payload)).to.be.true;
    expect(callbackTwo.calledOnce).to.be.true;
    expect(callbackTwo.calledWith(payload)).to.be.true;
  });

it('should allow multiple subscribers to a topic on a default channel', () => {
    let messageBus = new MessageBus();

    let callbackOne = sinon.spy();
    let callbackTwo = sinon.spy();

    let payload = {'foo': 'bar', 'goo': 'gar'};
    let topic = 'order_complete';


    messageBus.subscribe({ topic, callback: callbackOne });
    messageBus.subscribe({ topic, callback: callbackTwo });
    messageBus.publish({ topic, payload });

    expect(callbackOne.calledOnce).to.be.true;
    expect(callbackOne.calledWith(payload)).to.be.true;
    expect(callbackTwo.calledOnce).to.be.true;
    expect(callbackTwo.calledWith(payload)).to.be.true;
  });

  it('should invoke callbacks in order subscribed', () => {
    let messageBus = new MessageBus();

    // create four spies (kind of hacky)
    let spies = [0, 1, 2, 3].map(() => sinon.spy());

    let payload = {'foo': 'bar', 'goo': 'gar'};
    let channel = 'commerce';
    let topic = 'order_complete';


    // each spy subscribes to the new_signup topic
    spies.forEach(spy => messageBus.subscribe({ topic, channel, callback: spy }));
    messageBus.publish({ topic, channel, payload });

    // confirm each spy was called
    spies.forEach(spy => {
      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWith(payload)).to.be.true;      
    })
    // confirm the call order was teh same as subscribed
    sinon.assert.callOrder(...spies);
  });

  it('should only publish the message to the same channel', () => {
    let messageBus = new MessageBus();

    let callbackOne = sinon.spy();
    let callbackTwo = sinon.spy();

    let payload = {'foo': 'bar', 'goo': 'gar'};
    let channel = 'commerce';
    let topic = 'order_complete';

    messageBus.subscribe({ topic, channel, callback: callbackOne });
    messageBus.subscribe({ topic, channel: 'users', callback: callbackTwo });
    messageBus.publish({ topic, channel, payload });

    expect(callbackOne.calledOnce).to.be.true;
    expect(callbackOne.calledWith(payload)).to.be.true;
    expect(callbackTwo.callCount).to.equal(0);
  });

});