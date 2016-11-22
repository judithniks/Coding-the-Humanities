/*
  file:    shorty.js
  desc:    script for the chatbot called Shorty which responds to select, recognized user inputs in fitting ways.
  authors: jniks+dgrouwe
  date:    17/11/2016
*/

/* ------------------
  required packages
   ------------------ */

var express = require('express');  

var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server); 

var chance = require('chance').Chance();

var jquery = require('jquery');



/* ------------------------------
  arrays of possible user inputs
   ------------------------------ */

// general greetings
const pattern_1 = ["Hello", "Yo", "Dude", "Greetings", "Hoi", "Hey"];
// general questions
const pattern_2 = ["How do you do?", "How are you?", "Wazzup?", "Whaddup?", "Whazzaaa", "How're you?", "What's good?", "What's up?", "Sup?", "Whats up"];
// neutral answers to bot question
const pattern_3 = ["Nm", "Nothing", "Nothing much", "Not much", "Could be worse", "Can't complain"];
// positive answers
const pattern_4 = ["Fine", "Great", "Amazing", "Good", "Better", "Decent", "Pretty good", "Very well"];
// negative answers
const pattern_5 = ["Not so well", "Bad", "Terrible", "Meh", "Pretty bad"];
// general farewell
const pattern_6 = ["Bye", "Ok", "Farewell", "Talk to you later", "Goodbye", "See you", "See ya", "Later"];
// getting crunk
const pattern_7 = ["Yeah", "Okay", "What"]



/* ----------------------------------
  various functions used throughout
   ---------------------------------- */


// sets all user input to lower case for ease of matching
function matches(msg, array_of_patterns) {
  var msg_lower = msg.toLowerCase();

  for(var i = 0; i < array_of_patterns.length; i++) {
    var pattern_lower = array_of_patterns[i].toLowerCase();

    if(msg_lower.search(pattern_lower) > -1) {
      return true; 
    }
  }
  return false;
}

// lets script randomly select an item from the response array
function choice(array) {
  var index = chance.natural({'min': 0, 'max': array.length - 1});  
  return array[index];
}

// randomly interjects an item from the response array
function maybe(array) {
  if( chance.bool() ) {
    return choice(array);
} 
    else {
    return '';
  }
}



/* -----------------------------------------------
  randomly generates answers based on user input
  matched to the tone of the arrays above
   ----------------------------------------------- */

function pattern_1_greeting() {
  return choice(["Hi", "Yo, man", "Yo, brotha from another Motha", "Well, hello there"]) + ', ' 
  + choice(['My name is Shorty', "I'm Shorty"]) + "! I'm "  
  + choice(["feelin'", "doin'"]) + ' '  
  + choice(["pimpin'", 'amazeballz', "gangsta as f*ck"])
  + choice(['!', ", mah n*gga.", ', mah sistah from another mistah.']) + ' '
  + choice(['Whazzaaaa', 'Whaddup', "How you doin'"]) + '?';
}

function pattern_2_general_q() {
  return choice(['OK', 'Amazeballz', "Just rollin'", "Just pimpin' my ride"]) + ', ' 
  + choice(["you know", "what can I say", "one might say"]) + ', ' + "I'm doing" 
    + maybe([" mothaf*ckin'", " effin'"]) + ' ' 
  + choice(['great', "pimpin'", "fine"]) + '! '
  + choice(["You?", "Yourself?", "How you doin'?", "And yoself?"]);
}

function pattern_3_neutral_a() {
  switch(choice([1, 2, 3])){
    case 1:
      return choice(['Well', 'Ok']) + ", that's  " 
       + maybe(['pretty ', 'a little '])
      + choice(['wack', 'boring', 'lame', "boring as f*ck"]) + '. '
       + maybe(["I'm gonna leave you hangin', bro.", "Let's get wasted!", "I'm gonna go and get blazed."]);
    case 2:
      return 'Ok, ' 
      + choice(["lil' Shorty", "man", "bro", "mah n*gga", "mah sistah"]) + '! ' 
      + choice(["Let's ", "We gonna '"]) + 'get ' 
        + maybe(['absolutely ', "mothaf*ckin ", "riggidy riggidy "])
      + choice(['drunk', 'rekt', 'wasted', "f*cked up", 'schwifty']) + ' '
      + choice(['together', 'with the boys', "at the crib"]) + '. ' 
      + choice(['See you in 5', 'See you later, aligator', 'Get yo swag on']) + '! ';
    case 3:
      return 'Ok, ' 
      + choice(["don't care", "don't give a shit"]) 
       + maybe([', sorry bro', ', shithead']) + '. ' 
      + choice(["Peace", "Say hello to your moms from me", "I'm out"]) + '! ';
  }
}

function pattern_4_positive_a() {
  switch(choice([1, 2]))
  {
    case 1:
      return choice(['Good to hear', 'Nice', 'Keep doing you']) + ", " 
      + choice(['Bro', 'dude', 'fatty']) + "! " 
      + choice(['Gotta go', 'See you', "Nature is callin'"]) 
      + choice(["!!", "!", "...", "."]);
    case 2:
      return 'Ok, ' 
      + choice(["lil' Shorty", "man", "bro", "mah n*gga", "mah sistah"]) + '! ' 
      + choice(["Let's", "We gonna"]) + ' get ' 
        + maybe(['absolutely ', "mothaf*ckin' "])
      + choice(['drunk', 'rekt', 'wasted']) + ' '
      + choice(['together', 'with the boys', "in the hood"]) + ', ' 
      + choice(['see you in 5', 'see you later, aligator', 'get your swag on']) + '!' 
        + maybe([" We're gonna shine bright like diamonds!"]);
  }
}

function pattern_5_negative_a() {

  switch(choice([1, 2, 3]))
  {
    case 1:
      return choice(['Hmmm', 'Ok']) + ', ' + " don't be " 
        + maybe(['so ', "effin' ", "mothaf*ckin' "]) 
      + choice(['superficial', 'depressing', 'debbie downer']) + '. ' 
        + maybe(["You're losing your street cred! "]) 
      + choice(["I'm gonna leave you hangin'", "Gonna go get gone now", "Gotta go and pimp mah ride"]) + ', '
      + choice(["nerd", "loser", "debbie"]) + '.';

    case 2:
      return choice(['I am sorry', 'Shit', 'That sucks']) + ', ' 
      + choice(['bro', 'man']) + '! ' 
      + choice(['Hope tomorrow will be better', "You'll get through it", "Alcohol numbs the pain", "Get yo swag on"]) 
        + maybe ([', bro', ', mah friend', ', homey']) + '! '
      + choice(["I'm gonna head off", "Gotta get going", "Gotta run"])
        + maybe([", stay strong", ", keep yo head up", ", we'll talk later"]) + '. ';
    case 3:
      return choice(['Bummers', 'Sucks man', "Ain't nobody got time for that"]) + ', ' 
      + choice(['gotta go', "my moms is callin'"]) 
      + choice([', sorry bro!', '!', ', see you later!']);
  }
}

function pattern_6_farewell() {
    return maybe(['Alright! ']) 
    + choice(['See ya', 'Bye', 'See you later, aligator', 'Good luck', 'Peace', 'Keep it frosty']) + '!'
      + maybe(['!', " Love you long time!"]);
}

// if user input is not recognized
function default_answer() {
  return choice(['Speak English, mothaf*ckah!', "What ya sayin'?", "Try again.", "Computer says no.", "Error: 0 f*cks found."]);
}

// if user is getting crunk
function pattern_7_reaction() {
  return choice(["OKAY", "YEAH", "WHAT"]) + '!';
}

/* -----------------------------------------------
  matches the randomly generated answers to the
  user input
   ----------------------------------------------- */
function answer(msg) {

  if(matches(msg, pattern_1)) { 
    return pattern_1_greeting();

  } else if(matches(msg, pattern_2)) {
    return pattern_2_general_q();

  } else if(matches(msg, pattern_3)) {
    return pattern_3_neutral_a();

  } else if(matches(msg, pattern_4)) {
    return pattern_4_positive_a();

  } else if(matches(msg, pattern_5)) {
    return pattern_5_negative_a();

  } else if(matches(msg, pattern_6)) {
    return pattern_6_farewell();

  } else if(matches(msg, pattern_7)) {
    return pattern_7_reaction();

  } else {
    return default_answer();
  }
}


/* --------------------------------
  server and socket configuration
   -------------------------------- */

// tell express to server index.shorty.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.shorty.html');
});

// configure socket.io, notifications for user connection, messages, 
// disconnects and responses from shorty
io.on('connection', function(socket) {

  console.log('user connected');

  socket.on('message from user', function(msg) {
    console.log('got a user message: ' + msg);

    var response = answer(msg);                     

    io.emit('message from shorty', response);
  });

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

/* --------------
  starts server
   -------------- */
// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
  console.log('listening on port: ' + 8088);
});

