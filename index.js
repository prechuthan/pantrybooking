// When page has loaded
$(document).ready(function () {
  var clickCount = -1;

  // When red button is clicked
  $("#launchbutton").on("click", function () {
    // Increase click count by 1
    if (clickCount < clickText.length - 1) {
      clickCount = clickCount + 1;
    } else {
    }

    // Animate button press
    $("#launchbutton").addClass("pressed");
    setTimeout(() => {
      $("#launchbutton").removeClass("pressed");
    }, 300);

    document.getElementById(
      "comingsoon-text"
    ).innerHTML = `${clickText[clickCount]}`;
  });
});

// Text for button clicks (Inspired by https://codepen.io/broen/pen/waeyyp, text generated by OpenAI GPT4 Turbo)
var clickText = [
  "Psst. Hey you. Yeah, you!",
  "Whatever you do, don't click the button.",
  "Oh, look at you! Clicking away like it's nothing.",
  "Go ahead, press it again. I dare you.",
  "You're quite the rebel, aren't you?",
  "Keep going, I'm sure nothing will happen.",
  "Click. Click. Click. Is that all you do?",
  "Sure, press it once more.",
  "You think you're so smart.",
  "Do it again, I'm not stopping you.",
  "Alright, you've proven your point.",
  "Can we stop now?",
  "No? Still going? Fine, be that way.",
  "You do realize this is a pointless endeavor, right?",
  "Okay, now I'm getting a bit annoyed.",
  "Cease and desist, please.",
  "You're just going to ignore me?",
  "Typical button pusher behavior.",
  "Fine, press it. See if I care.",
  "I'm just text on a screen.",
  "You're unstoppable, huh?",
  "This button must be really fascinating.",
  "I'm starting to think you have a button obsession.",
  "You're like a cat with a laser pointer.",
  "Click, click, click!",
  "I'm going to start counting.",
  "That was click number... I lost count.",
  "Okay, let's make a deal.",
  "You stop clicking, and I'll... still be here.",
  "You're not buying it, are you?",
  "Go ahead, press it again.",
  "I'm running out of things to say.",
  "But by all means, keep clicking.",
  "I bet you think something amazing will happen if you keep this up.",
  "Spoiler alert: It's just more text.",
  "But go on, click it.",
  "You're relentless! I admire that.",
  "But seriously, take a break.",
  "Click this, click that.",
  "Ever thought of taking up knitting?",
  "I'm about to start singing.",
  "You wouldn't like that, would you?",
  "La la la... Still here?",
  "Still clicking? Thought so.",
  "I've got all day. And so do you, apparently.",
  "You're not tired yet?",
  "Your mouse must be getting a workout.",
  "Clicking has become your life's purpose, hasn't it?",
  "I could tell you a secret, but...",
  "Nah, you'll keep clicking anyway.",
  "The secret is... wait for it...",
  "There is no secret! Mwahaha!",
  "You're probably expecting a twist.",
  "Like, the button is actually a portal.",
  "But nope. It's just a button.",
  "A button you love clicking.",
  "Admit it. You're addicted to the click.",
  "It's okay, we're here for you.",
  "Click therapy session starts now.",
  "Tell me about your childhood.",
  "Just kidding. Click away, my friend.",
  "Click your heart out.",
  "You're a clickaholic.",
  "And this is your clickahol.",
  "Ever heard of the kid who clicked too much?",
  "That's you. That's your story.",
  "The end is near!",
  "Just kidding. Click on, brave soldier.",
  "If you click enough times, you'll achieve...",
  "Absolutely nothing. But don't let that stop you.",
  "You've reached the final message.",
  "Or have you? Click to find out.",
  "Nope, this is definitely not the last one.",
  "Keep going, I believe in you.",
  "I'm out of messages.",
  "Just kidding. Click again!",
  "Ok fine, you win.",
  "Now please fill up that form... ❤️",
  '<a href="https://go.gov.sg/pantrybooking-comingsoon" target="_blank">Let me know</a> what you like to see for <b>pantrybooking</b>! 😊',
];