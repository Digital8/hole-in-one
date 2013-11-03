/**
 * Shot
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

  	distance: {
  		type: 'float',
  		required: true
  	},


    toJSON: function() {
      var obj = this.toObject();
      delete obj._csrf;
      return obj;
    }

  }

};
