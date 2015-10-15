'use strict';

angular.module('challengeBoardApp')
  .service('challengeService', function ($q, challengeFactory) {
    class ChallengeService {
            constructor() {
                this.challenges = {};
                // this.loading = false;
                // this.errors = false;
            }

            init() {
                return new $q(function(resolve, reject){
                    this.loading = true;
                    //this service is now trying to load data
                    challengeFactory.find()
                        .then(function(challengeData){
                            //assign the response to the service
                            this.challenges = challengeData;

                            //done loading
                            this.loading = false;
                            this.errors = false;
                        }.bind(this))
                        .then(resolve)
                        .catch(function(e){
                            this.loading = false;
                            this.errors = true;
                            return reject(e);
                        }.bind(this))
                }.bind(this));
            }
        }
        return new ChallengeService;
  });
