# References

I intentionally used none, some, most or all of the ideas and concepts from the resources listed in this file.
Uninentionally, I have probably gleaned and conflated concepts they benevolently introduced, so if you're wondering "wait, why did he do this?" this explains why.

In general, when working with React I try to find opportunities to exercise these ideas...

<a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank">Thinking In React</a>

...particularly when I fall into the trap of premature optimization, reminders such as the following are beneficial:

<blockquote>Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand.</blockquote>

Additionally, Dan Abramov started his own blog recently, and I am generally interested in and inspired by most things he has to say about web development:

<a href="https://overreacted.io/" target="_blank">Overreacted</a>

Some of the content is not beginner-friendly, as he disclaims from the start of <a href="https://overreacted.io/react-as-a-ui-runtime/" target="_blank">this article</a>, but he is still able to impart meaningful concepts that helped my understanding
of React even during the duration of this project. 

Some nuggets:

<blockquote>I like to think of React elements as being like frames in a movie. They capture what the UI should look like at a specific point in time. They don’t change.</blockquote>

<blockquote>If an element type in the same place in the tree “matches up” between the previous and the next renders, React reuses the existing host instance.</blockquote>

<blockquote>What’s a good value for a key? An easy way to answer this is to ask: when would you say an item is the “same” even if the order changed? For example, in our shopping list, the product ID uniquely identifies it between siblings.</blockquote>

## Other References

1. https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0
2. https://www.twilio.com/blog/react-app-with-node-js-server-proxy
