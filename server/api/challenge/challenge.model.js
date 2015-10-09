'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ChallengeSchema = new Schema({
  name: String,
  details: String,
  user: String,
  link: String,
  difficulty: Number,
  isSolved: Boolean
});

module.exports = mongoose.model('Challenge', ChallengeSchema);