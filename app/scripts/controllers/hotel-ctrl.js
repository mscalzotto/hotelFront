'use strict'

angular.module('hotel')
.controller('HotelController', ['$scope', '$state', '$log', 'hotelService', function($scope, $state, $log, hotelService) {

  hotelService.getHotels().then(successCallback, errorCallback);

  angular.element(document).ready(function() {
    $("#slider-range").slider({
      range: true,
      min: minPrice(),
      max: maxPrice(),
      values: [ minPrice(), maxPrice() ],
      slide: function( event, ui ) {
        $(".price-b").text('$' + ui.values[0]);
        $(".price-a").text('$' + ui.values[1]);
      }
    });
    $(".price-b").text('$' + $("#slider-range").slider( "values", 0 ));
    $(".price-a").text('$' + $("#slider-range").slider( "values", 1 ));
  });

  function successCallback(response) {
    $log.info('OK - API RESPONSE', response);

    if (response.status == 204) {
      $state.go('no-hotels-found');
    } else {
      $scope.hotels = response.data;
    }
  }

  var minPrice = function() {
    var min = 0;
    angular.forEach($scope.hotels, function(val, index) {
      if (index == 0) {
        min = val.price;
      } else {
        if (val.price < min) {
          min = val.price;
        }
      }
    });

    return min;
  }

  var maxPrice = function() {
    var max = 0;
    angular.forEach($scope.hotels, function(val, index) {
      if (index == 0) {
        max = val.price;
      } else {
        if (val.price > max) {
          max = val.price;
        }
      }
    });

    return max;
  }

  function errorCallback(error) {
    $log.error('ERROR - API RESPONSE', error);
  }

  $scope.getStars = function(stars) {
    return new Array(stars);
  }

  $scope.getAmenitiesLength = function(amenities) {
    return new Array(amenities.length);
  }

  $scope.mapAmenities = function(amenities) {
    var returnArray = [];
    angular.forEach(amenities, function(val, index) {
      returnArray.push(amenitiesToMap[val]);
    });

    return returnArray;
  }

  $scope.mapMealplan = function(mealplan) {
    var returnArray = [];
    angular.forEach(mealplansToMap, function(val, index) {
      returnArray.push(mealplansToMap[mealplan]);
    });

    return returnArray;
  }

  var amenitiesToMap = {
    "wifi": "fa-wifi",
    "bar": "fa-glass",
    "ac": "fa-snowflake-o"
  };

  var mealplansToMap = {
    "breakfast": ["fa-coffee","Desayuno"],
    "only-room": ["fa-hotel","Sólo la habitación"]
  }

}]);
