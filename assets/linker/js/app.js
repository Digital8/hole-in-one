/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */


(function (io) {

  // as soon as this file is loaded, connect automatically, 
  var socket = io.connect();
  if (typeof console !== 'undefined') {
    //console.log('Connecting to Server...');
  }

  socket.on('connect', function socketConnected() {

    //console.log("This is from the connect: ", this.socket.sessionid);

    // Listen for the socket 'message'
    socket.on('message', messageReceivedFromServer);

    // Subscribe to the user model classroom and instance room
    socket.get('/user/subscribe');
    socket.get('/shot/subscribe');

  });


  // Expose connected `socket` instance globally so that it's easy
  // to experiment with from the browser console while prototyping.
  window.socket = socket;
  

})(

  // In case you're wrapping socket.io to prevent pollution of the global namespace,
  // you can replace `window.io` with your own `io` here:
  window.io

);

// This function routes the message based upon the model which issued it
function messageReceivedFromServer(message) {

  //console.log("Here's the message: ", message);

  // Okay, I need to route this message to the appropriate place.

  // This message has to do with the User Model
  if (message.model === 'user') {
    var userId = message.id
    updateUserInDom(userId, message);

    if(message.verb !== "destroy") {
      displayFlashActivity(message);  
    } 
  }

  if (message.model === 'shot') {
    var shotId = message.id
    updateShotInDom(shotId, message);

    if(message.verb !== "destroy") {
      displayFlashActivity(message);  
    } 
  }  
}

function displayFlashActivity(message) {
  $('#chatAudio')[0].play();
  $(".navbar").after("<div class='alert alert-success'>" + message.data.name + message.data.action + "</div>");
  $(".alert").fadeOut(5000);
}

// What page am I on?
var page = document.location.pathname;

// Strip trailing slash if we've got one
page = page.replace(/(\/)$/, '');

function updateShotInDom(shotId, message) {
  
  // Route to the appropriate user update handler based on which page you're on
  switch (page) {

    // If we're on the User Administration Page (a.k.a. user index)
    case '/':
    case '':
    case '/shot':

      // This is a message coming from publishCreate
      if(message.verb === 'create') {
        ShotIndexPage.addShot(message.data);
      }
      // This is a message coming publishDestroy
      if(message.verb === 'destroy') {
        ShotIndexPage.destroyShot(shotId);
      }
      break;
  }
}

function updateUserInDom(userId, message) {
  
  // Route to the appropriate user update handler based on which page you're on
  switch (page) {

    // If we're on the User Administration Page (a.k.a. user index)
    case '/user':

      // This is a message coming from publishUpdate
      if (message.verb === 'update') {
        UserIndexPage.updateUser(userId, message);
      }

      // This is a message coming from publishCreate
      if(message.verb === 'create') {
        UserIndexPage.addUser(message);
      }
      // This is a message coming publishDestroy
      if(message.verb === 'destroy') {
        UserIndexPage.destroyUser(userId);
      }
      break;
  }
}

/////////////////////////////////////////////////
// User index page DOM manipulation logic
// (i.e. backbone-style view)
/////////////////////////////////////////////////
var ShotIndexPage = {
  addShot: function(shot) {
    var adminStr = '';
    adminStr += '<form action="/shot/destroy/' + shot.id + '" method="POST">';
    adminStr += '<input type="hidden" name="_method" value="delete"/>';
    adminStr += '<input type="submit" class="btn btn-sm btn-danger" value="Delete"/>';
    adminStr += '<input type="hidden" name="_csrf" value="' + window.digital8.csrf + '" />';
    adminStr += '</form>';

    var data = ["", shot.first_name, shot.last_name, shot.distance, ""];

    if(window.digital8.admin === "true") {
      data.push(adminStr);
    }

    $('#shot-table').dataTable().fnAddData(data);
  },

  destroyShot: function(shotId) {
    //console.log('delete shot not implemented');
    window.location.reload();
  }
}

var UserIndexPage = {

  // Update the User, in this case their login status
  updateUser: function(id, message) {
    if (message.data.loggedIn) {
      var $userRow = $('tr[data-id="' + id + '"] td img').first();
      $userRow.attr('src', "/images/icon-online.png");
    } else {
      var $userRow = $('tr[data-id="' + id + '"] td img').first();
      $userRow.attr('src', "/images/icon-offline.png");
    }
  },

  // Add a user to the list of users in the User Administration Page
  addUser: function(user) {

  // obj is going to encompass both the new user data as well as the _csrf info from 
  // the layout.ejs file
  var obj = {
    user: user.data,
    _csrf: window.digital8.csrf || ''
  };

  // Add the template to the bottom of the User Administration Page
    $( 'tr:last' ).after(
      
      // This is the path to the templates file
      JST['assets/linker/templates/addUser.ejs']( obj )
    );
  },

  // Remove the user from the User Administration Page
  destroyUser: function(id) {
    $('tr[data-id="' + id + '"]').remove();
  }
}
