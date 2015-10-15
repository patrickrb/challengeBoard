'use strict';

angular.module('challengeBoardApp')
  .factory('challengeFactory', function ($http) {
      class ChallengeFactory {
            find() {
                return $http.get('/api/challenges')
                    .then(x => {return x.data;});
            }

            findOne(challengeId){
                return $http.get(`/api/challenges/${challengeId}`)
                    .then(x => {return x.data.challenge;});
            }

            create(challengeToCreate){
                return $http.post(`/api/challenges`, challengeToCreate)
                    .then(x => {return x.data.challenge;});
            }

            update(challengeId, updatedChallenge){
                return $http.put(`/api/challenges/${challengeId}`, updatedChallenge)
                    .then(x => {return x.data.updated;});
            }

            remove(challengeId){
                return $http.delete(`/api/challenges/${challengeId}`)
                    .then(x => {return x.data;});
            }
        }
        return new ChallengeFactory;
  });