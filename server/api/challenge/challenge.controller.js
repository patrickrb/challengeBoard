/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /challenges              ->  index
 * POST    /challenges              ->  create
 * GET     /challenges/:id          ->  show
 * PUT     /challenges/:id          ->  update
 * DELETE  /challenges/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Challenge = require('./challenge.model');

// Get list of challenges
exports.index = function(req, res) {
  Challenge.find(function (err, challenges) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(challenges);
  });
};

// Get a single challenge
exports.show = function(req, res) {
  Challenge.findById(req.params.id, function (err, challenge) {
    if(err) { return handleError(res, err); }
    if(!challenge) { return res.status(404).send('Not Found'); }
    return res.json(challenge);
  });
};

// Creates a new challenge in the DB.
exports.create = function(req, res) {
  Challenge.create(req.body, function(err, challenge) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(challenge);
  });
};

// Updates an existing challenge in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Challenge.findById(req.params.id, function (err, challenge) {
    if (err) { return handleError(res, err); }
    if(!challenge) { return res.status(404).send('Not Found'); }
    var updated = _.merge(challenge, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(challenge);
    });
  });
};

// Deletes a challenge from the DB.
exports.destroy = function(req, res) {
  Challenge.findById(req.params.id, function (err, challenge) {
    if(err) { return handleError(res, err); }
    if(!challenge) { return res.status(404).send('Not Found'); }
    challenge.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}