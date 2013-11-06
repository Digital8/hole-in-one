/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  schema: true,

  attributes: {
    
    first_name: {
      type: 'string',
      required: true
    },

    last_name: {
      type: 'string',
      required: true
    },

    phone: {
      type: 'string',
      required: true
    },

    age: {
      type: 'string',
      required: true
    },

    post_code: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },

    android: {
      type: 'boolean',
      defaultsTo: false
    },

    iphone: {
      type: 'boolean',
      defaultsTo: false
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj._csrf;
      return obj;
    }

  },

  beforeValidation: function (values, next) {
    if (typeof values.android !== 'undefined') {
      if (values.android === 'unchecked') {
        values.android = false;
      } else  if (values.android[1] === 'on') {
        values.android = true;
      }
    }

    if (typeof values.iphone !== 'undefined') {
      if (values.iphone === 'unchecked') {
        values.iphone = false;
      } else  if (values.iphone[1] === 'on') {
        values.iphone = true;
      }
    }
    
    next();
  }

};
