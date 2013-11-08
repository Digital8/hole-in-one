/**
 * ShotController
 *
 * @module    :: Controller
 * @description :: Contains logic for handling requests.
 */

module.exports = {

  'new': function(req, res) {
    res.view();
  },

  create: function(req, res, next) {

    var shotObj = {
      first_name: req.param('first_name'),
      last_name: req.param('last_name'),
      distance: req.param('distance')
    }

    // Create a Shot with the params sent from 
    Shot.create(shotObj, function shotCreated(err, shot) {

      // // If there's an error
      // if (err) return next(err);

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }

        return res.redirect('/shot/new');
      }
      else {

        oShot = shot.toObject();
        oShot.name = oShot.first_name + " " + oShot.last_name;
        oShot.action = " scored " + oShot.distance + "m";

        Shot.publishCreate(oShot);

        return res.redirect('/');
      }

    });
  },

  index: function(req, res, next) {

    // Get an array of all shots in the Shot collection(e.g. table)
    Shot.find(function foundShots(err, shots) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      res.view({
        shots: shots
      });
    });
  },

  destroy: function(req, res, next) {

    Shot.findOne(req.param('id'), function foundShot(err, shot) {
      if (err) return next(err);

      if (!shot) return next('Shot doesn\'t exist.');

      Shot.destroy(req.param('id'), function shotDestroyed(err) {
        if (err) return next(err);

        Shot.publishUpdate(shot.id, {
          name: shot.first_name + ' ' + shot.last_name,
          action: ' has been removed.'
        });

        // Let other sockets know that the shot instance was destroyed.
        Shot.publishDestroy(shot.id);

      });        

      res.redirect('/');

    });
  },

  // This action works with app.js socket.get('/shot/subscribe') to
  // subscribe to the Shot model classroom and instances of the shot
  // model
  subscribe: function(req, res) {

    // Find all current shots in the shot model
    Shot.find(function foundShots(err, shots) {
      if (err) return next(err);
 
      // subscribe this socket to the Shot model classroom
      Shot.subscribe(req.socket);
 
      // subscribe this socket to the shot instance rooms
      Shot.subscribe(req.socket, shots);
 
      // This will avoid a warning from the socket for trying to render
      // html over the socket.
      res.send(200);
    });
  }

};