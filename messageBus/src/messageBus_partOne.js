class MessageBus {
  constructor() {
    this.subscribers = {};
  }

  subscribe (topic, callback) {
    if(!(topic in this.subscribers)) {
      this.subscribers[topic] = [callback];
    } else {
      this.subscribers[topic].push(callback);
    }
  }

  publish (topic, payload) {
    this.subscribers[topic].forEach(callback => callback(payload));
  }
}

module.exports = MessageBus;
