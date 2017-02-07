(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchChcker = function () {
    var lunchMenu = $scope.lunchMenu;
    if(!lunchMenu || lunchMenu ==''){
      $scope.outputMsg = 'Please enter data first';
      return;
    }

    var menuItems = lunchMenu.split(",");
    var count = 0;
    for(var ii=0,len=menuItems.length;ii<len;ii++){
      if(menuItems[ii]!=''){
        count++;
      }
    }

    if(count == 0){
      $scope.outputMsg = 'Please enter data first';
      $scope.msgColor="red";
    }
    else if(count<=3){
      $scope.outputMsg = 'Enjoy!';
      $scope.msgColor="green";
    }else{
      $scope.outputMsg = 'Too much!';
      $scope.msgColor="green";
    }
  };
}

})();
