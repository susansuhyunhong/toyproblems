// NOTE: There are two possible interpretations of an 'optional' 
// channel argument

// Option 1: If no channel is provided, it is assumed to be the 'default' 
// (same idea as 'lobby') channel. Components subscribing to a topic
// without a channel will only hear messages published to the default
// channel (for that topic). Publishing a message without a channel will 
// result in that message getting published to the default channel.

// Option 2: If no channel is provided, it is assumed to be all channels.
// Components subscribing to a topic without a channel will hear messages
// published to all channels (for that topic). Publishing a message without
// a channel will result in that message getting published to every 
// component subscribed to that topic, regardless of channel.

// A strict reading of the prompt probably results in option 1, but both could
// be valid. This implementation assumes option 1. 

class MessageBus {
  constructor() {
    this.subscribers = {};
  }

  findOrCreateTopicChannel(topic, channel) {
    if(!this.subscribers[topic]) this.subscribers[topic] = {};
    if(!this.subscribers[topic][channel]) this.subscribers[topic][channel] = [];
    return this.subscribers[topic][channel];
  }

  subscribe ({topic, channel = 'default', callback}) {
    this.findOrCreateTopicChannel(topic, channel).push(callback);
  }

  publish ({topic, channel = 'default', payload}) {
    this.findOrCreateTopicChannel(topic, channel).forEach(callback => callback(payload));
  }
}

module.exports = MessageBus;

