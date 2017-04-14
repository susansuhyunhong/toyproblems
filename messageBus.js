// A "message bus" is a dispatcher for messages (events) to support the pub/sub style of interaction between the components in your system. Pub/sub is short for publish / subscribe. It means there are 0 to n component instances subscribing to messages of a given name (e.g., order_complete or enemy_sighted). When any component publishes a message with that same name, all the subscribers are notified of that message.
//
// What's the point of a message bus? It decouples your components. The normal way for components (that live inside the same process, and aren't communicating over the network) to talk to each other is by invoking functions. However that means you have to keep a reference to a function for everyone you need to talk to. If there are many components that need to be notified, this can be quite cumbersome and brittle, i.e., your system breaks easily because you don't manage all those references exactly right.
//
// Imposing a messaging intermediary between components can make communication simpler and more flexible.
//
// What to do
//
// Make a message bus object for use in your client-side (in-browser) code.
//
// Constraints and factors to consider
//
// The name (label) of a message type should be called the topic, in your code. This is standard pub/sub nomenclature.
// The payload is optional.
// Subscribers must be notified in the exact order that they originally subscribed.
// If you find you have extra time, tackle the problem extensions (see below).
//
// Basic example
//
// Your message bus should support a style like this:
//
// inside component A...
//
// messageBus.subscribe('new_signup', function(payload) {
// 	// do something with the payload
// });
// inside component B...
//
// messageBus.publish('new_signup', {'foo': 'bar', 'goo': 'gar'} );
// Back inside component A...
//
// myCallback is invoked, receiving {'foo': 'bar', 'goo': 'gar'} as the payload.
//
// And inside any other subscribing components...
//
// If components C, D, E, and F had similarly subscribed to this message, they would all have their callbacks invoked at this time as well.
//
// Problem extension #1
//
// Add the concept of channels.
//
// I.e., when you subscribe or publish, you can optionally designate a "channel" on which your message is received/sent. Unless you subscribe to that channel, you don't receive messages publishes on that channel.
//
// Subscriber example
//
// messageBus.subscribe({
// 	channel: 'commerce',
// 	topic: 'order_complete',
// 	callback: function(payload) {
// 		// do something with the payload
// 	}
// });
// Publisher example
//
// messageBus.publish({
// 	channel: 'commerce',
// 	topic: 'order_complete',
// 	data: {
// 	  plan_level: 'GOLD',
// 	  user_id: '4273984723428'
// 	}
// });
// Problem extension #2
//
// Add topic wildcarding.
//
// This allows subscribers to receive all messages that partially-match on a pattern.
//
// Subscriber subscribes with wildcarding
//
// messageBus.subscribe({
// 	channel: 'commerce',
// 	topic: 'order_*',
// 	callback: function(payload) {
// 		// do something with the payload
// 	}
// });
// Publisher publishes as normal (no wildcarding on this side)
//
// messageBus.publish({
// 	channel: 'commerce',
// 	topic: 'order_started',
// 	data: {
// 	  user_id: '4273984723428'
// 	}
// });
// The above subscriber receives this message.
//
// messageBus.publish({
// 	channel: 'commerce',
// 	topic: 'order_complete',
// 	data: {
// 	  plan_level: 'GOLD',
// 	  user_id: '4273984723428'
// 	}
// });
// The above subscriber also receives this message.
