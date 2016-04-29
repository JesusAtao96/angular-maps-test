'use strict';

/**
 * @ngdoc function
 * @name yomapsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yomapsApp
 */
angular.module('yomapsApp')
  .controller('MainCtrl', function ($scope, $log, $timeout) {
    

    //$scope.map = { center: { latitude: -12.187578, longitude: -77.007827 }, zoom: 16 };
    
    $scope.map = {center: {latitude: -12.187578, longitude: -77.007827 }, zoom: 16 };
    $scope.map = {center: {latitude: -12.187578, longitude: -77.007827 }, zoom: 16 };
    $scope.options = {scrollwheel: false};
    $scope.marker = {
      id: 0,
      coords: {
        latitude: -12.187578,
        longitude: -77.007827
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
    $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
      if (_.isEqual(newVal, oldVal))
        return;
    });
    $timeout(function () {
      $scope.marker.coords = {
        	latitude: -12.187578,
        	longitude: -77.007827
      };
      $timeout(function () {
        $scope.marker.coords = {
          	latitude: -12.187578,
        	longitude: -77.007827
        };
      }, 2000);
    }, 1000);
  });
