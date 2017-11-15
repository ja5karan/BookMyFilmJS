'use strict';

(function(){

class RateComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.message = 'Hello';
      this.mapp_arr = [];
      this.re = [];
      $scope.$on('$destroy', function(){
        socket.unsyncUpdates('rateendpoint');
      });
  }




      $onInit() {
        this.$http.get('/api/rateendpoints').then(response => {
          this.re = response.data;
          this.socket.syncUpdates('rateendpoint', this.re);
        });
          this.$http.get('/api/moviemappingendpoints').then(response => {
          this.mapp_arr = response.data;
        });

      }
      insertReview() {


     this.$http.post('/api/rateendpoints', {

    USERNAME: this.username,
COMMENT: this.review

});
}
}

angular.module('yoTemplateApp')
  .component('rate', {
    templateUrl: 'app/rate/rate.html',
    controller: RateComponent,
   controllerAs: 'ratingCtrl'
  });

})();
