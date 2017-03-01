'use strict'

angular.module('hotel')
.service('hotelService', ['$http', 'hotelConfig', function($http, hotelConfig) {

  var url = hotelConfig.getHotelApiPath();

  this.getHotels = function() {
    return $http.get(url + hotelConfig.paths.hotels)
                .then(successCallback, errorCallback);
  }

  function successCallback(response) {
    return response;
  }

  function errorCallback(error) {
    if (error.status === -1) {
      throw error.status + ' : ERR_CONNECTION_REFUSED';
    } else if (error.status === 500) {
      throw error.status + ' : ' + error.data.Message;
    }
    throw error.status + ' : ' + error.data.result;
  }

}]);
