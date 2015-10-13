'use strict';
var path = require('path');

// Development specific configuration
// ==================================
module.exports = {

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),
  
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/challengeboard-dev'
  },

  seedDB: true
};
