/* let's say you have to:

    Finish your homework.

    Then, clean your room.

    After that, call your friend.

Each task depends on the previous one being finished first. So, you can't call your friend until your room is cleaned, and you can’t clean your room until you finish your homework. You have to do them one after the other.

In JavaScript, when you write code that does things like fetching information from the internet, reading a file, or waiting for something else to happen, callbacks are like these tasks. A callback is a function that tells the computer: "Do this once you're done with the last thing." So, you put tasks inside each other in a sequence.

Now, imagine if you had to do many tasks that depend on each other. What would happen if all the tasks started stacking up? You’d have homework inside the room-cleaning task, which is inside the calling-a-friend task. It would look very messy and hard to follow, like a tangled mess of homework, room-cleaning, and friends all mixed up!

This messy situation in JavaScript is called Callback Hell. It’s when there are too many callbacks nested inside each other, making the code hard to read and manage. The further in you go, the harder it is to understand, just like how hard it is to untangle a pile of messy homework and room-cleaning tasks.

Is Callback Hell the same as a function?

Not exactly! A callback is a type of function, but Callback Hell happens when those functions are nested too deep. It’s like when you keep putting homework inside room-cleaning tasks and that makes it really hard to figure out where everything starts and ends.

So, to sum up:

    Callbacks are like little helpers that wait for things to finish.

    Callback Hell happens when you have too many helpers inside each other, making things messy. */
/******************************************** */
    /*Imagine you're ordering a pizza online, and each step depends on the last one being done.
Step 1: Order the pizza

You can’t start eating until you order it, right?
Step 2: Wait for the pizza to be delivered

You can’t eat it until it arrives at your door.
Step 3: Eat the pizza

Only after it’s delivered, you can finally eat.

Now, let’s translate this into callback functions in JavaScript. */
//Simple example without Callback Hell:

//In the code above, each action depends on the previous one:




// Order the pizza.

// Once that’s done, deliver the pizza.

// Once the pizza is delivered, eat it.