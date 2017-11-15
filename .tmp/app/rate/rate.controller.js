'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RateComponent = function () {
    function RateComponent($http, $scope, socket) {
      _classCallCheck(this, RateComponent);

      this.$http = $http;
      this.socket = socket;
      this.message = 'Hello';
      this.mapp_arr = [];
      this.re = [];
      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('rateendpoint');
      });
    }

    _createClass(RateComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/rateendpoints').then(function (response) {
          _this.re = response.data;
          _this.socket.syncUpdates('rateendpoint', _this.re);
        });
        this.$http.get('/api/moviemappingendpoints').then(function (response) {
          _this.mapp_arr = response.data;
        });
      }
    }, {
      key: 'insertReview',
      value: function insertReview() {

        this.$http.post('/api/rateendpoints', {

          USERNAME: this.username,
          COMMENT: this.review

        });
      }
    }]);

    return RateComponent;
  }();

  angular.module('yoTemplateApp').component('rate', {
    templateUrl: 'app/rate/rate.html',
    controller: RateComponent,
    controllerAs: 'ratingCtrl'
  });
})();
//# sourceMappingURL=rate.controller.js.map
