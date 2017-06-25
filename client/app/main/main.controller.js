'use strict';

angular.module('ciscoSparkAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.rooms = [];

    this.$onInit = function() {
      $http.get('/api/rooms').then(function(rooms) {
        console.log(rooms.data)
        $scope.rooms = rooms.data;
      });
    };

    $scope.getRoomMembers = function(id) {
      console.log(id);
      $http.get('/api/rooms/'+ id).then(function(people) {
        console.log(people.data);
        $scope.people = people.data;
      });
    }
  });
