Prime Weekend Challenge 3

Hey Primers!!!
For this weekend, you are going to be using the jQuery Effects or jQuery UI Effects library to make some nifty data go onto a page in fun ways! https://api.jquery.com/category/effects/, or https://api.jqueryui.com/category/effects/. (Note that if you use jQuery UI Effects, you need to include a second JavaScript file in your page.)

First, spin up a new project (the reps are good, I promise!), host it on Heroku and back it up on GitHub. On page load, the user should see an index page that contains an introduction of some kind, while the Ajax loads. Make an Ajax request to have JSON information sent back to the client-side. The JSON information will come from a serverside JSON file that will be saved under the /models directory.

Inside the JSON file, you will have an array of objects. Each object should be a person in your cohort. So 18 objects. Inside those objects, assign two properties. One for their name, and one for a shout out for that person. You can add any other data you see necessary.

Once that array comes back from the server side api, populate that information onto the page. However, only one person should be on the screen at any given time. How this effect works, I’ll leave up to you.

Some possible ways to solve this problem are:
Make a next and prev button that moves through the list of people. Each time you navigate to the next person, all of the information should be displayed for that person.

The name and information of each person slides into the middle of the screen, does some nifty animation, and slides off the other side. Then the next repeats this process.

Each person’s information fades onto the screen, with a predefined background/text color. Then they fade out, and then another fades in.

Each person’s name bounces in, and explode to reveal their shout out. That slides out and the next person bounces in!
Some other hair brained effects!!!

The details are open for description, are up to you to decide how you would like to implement.

Hard Mode
Implement Bootstrap in a meaningful way. Meaning don't just pull it into the project, actually use it and style with it. This most likely means that your animations should target bootstrap components, or that a user can interact with the effects using some other Bootstrap Components.

Pro Mode
If you hit up Code Academy's Build an Interactive Website shows you how to build a flip-board carousel with these specifications mentioned in this challenge. I would HIGHLY encourage that you check out how to build a carousel there!

