angular.module('activityController', [])
  .controller('activityController', function($scope, $http, $timeout, Activities) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    $scope.formData = {};
   $scope.uiConfig = {
      calendar:{
        height: 750,
        editable: false,
        header:{
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
    $scope.events = [];
    var count = 0;
        
    // $scope.ticketEvents = [];
    $scope.eventSources = [$scope.events];
    
    /* Change View */
    $scope.changeView = function(view,calendar) {
      calendar.fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      calendar.fullCalendar('render');
    };
    
    Activities.get()
        .success(function(data) {
            $scope.activities = data;
            populateEvents();
        });
        
    function populateEvents() {
       $timeout(function(){
         $scope.activities.forEach(function(a) {
           $scope.events.push({title: a.name, start: a.date, url: a.url});
           count = count + 1;
         });
       });
     }
     
     // function populateEvents() {
     //    $scope.activities.forEach(function(a) {
     //      $scope.events.push({title: a.name, start: a.date, url: a.url});
     //    });
     //  }
  });
