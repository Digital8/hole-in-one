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
      shots: req.param('shots')
    }

    // Create a Shot with the params sent from 
    Putt.create(shotObj, function shotCreated(err, shot) {

      // // If there's an error
      // if (err) return next(err);

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }

        return res.redirect('/putt/new');
      }
      else {

        return res.redirect('/');
      }

    });
  },

  index: function(req, res, next) {

    // Get an array of all shots in the Shot collection(e.g. table)
    Putt.find(function foundShots(err, shots) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      res.view({
        shots: shots
      });
    });
  },

  destroy: function(req, res, next) {

    Putt.findOne(req.param('id'), function foundShot(err, shot) {
      if (err) return next(err);

      if (!shot) return next('Shot doesn\'t exist.');

      Putt.destroy(req.param('id'), function shotDestroyed(err) {
        if (err) return next(err);

      });        

      res.redirect('/');

    });
  }

};