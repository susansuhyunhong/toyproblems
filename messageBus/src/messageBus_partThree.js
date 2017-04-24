// Now, because we have a wildcard for the topic *and* because
// we still want to publish the messages in the order
// of subscriptions, we need to put all of the subscriptions
// in a channel array

class MessageBus {
  constructor() {
    this.subscribers = {};
  }

  findOrCreateChannel(channel) {
    if(!this.subscribers[channel]) this.subscribers[channel] = [];
    return this.subscribers[channel];
  }

  matchWildcard(topicWithWildcard, topic) {
    return RegExp(`^${topicWithWildcard.replace('*', '(.*)')}$`).test(topic);
  }

  findMatchingChannelTopics(topic, channel) {
    return this.findOrCreateChannel(channel).filter(subscriber => this.matchWildcard(subscriber.topic, topic));
  }

  subscribe ({topic, channel = 'default', callback}) {
    this.findOrCreateChannel(channel).push({ topic, callback });
  }

  publish ({topic, channel = 'default', payload}) {
    this.findMatchingChannelTopics(topic, channel).forEach(({callback}) => callback(payload));
  }
}

module.exports = MessageBus;

