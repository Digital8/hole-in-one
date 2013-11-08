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

    var registerObj = {
      first_name: req.param('first_name'),
      last_name: req.param('last_name'),
      email: req.param('email'),
      age: req.param('age'),
      post_code: req.param('post_code'),
      android: req.param('android'),
      iphone: req.param('iphone'),
      phone: req.param('phone')
    }

    // Create a Shot with the params sent from 
    Register.create(registerObj, function registerCreated(err, shot) {

      // // If there's an error
      // if (err) return next(err);

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }

        return res.redirect('/register/new');
      }
      else {

        return res.redirect('/');
      }

    });
  },

  destroy: function(req, res, next) {

    Register.findOne(req.param('id'), function foundRegister(err, register) {
      if (err) return next(err);

      if (!register) return next('Registration doesn\'t exist.');

      Register.destroy(req.param('id'), function registerDestroyed(err) {
        if (err) return next(err);
      });        

      res.redirect('/');

    });
  },

  index: function(req, res, next) {

    // Get an array of all shots in the Shot collection(e.g. table)
    Register.find(function foundRegisters(err, registers) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      res.view({
        registers: registers
      });
    });
  }

};