customDirectives = angular.module('customDirectives', []);
customDirectives.directive('customAccordion', function () {
    return {
        scope:{
            ngModel: '='
        },
        restrict: 'A',
        template: '<div class="panel-group" id="{{panelId}}">\
                       <div class="panel panel-default" ng-repeat-start="item in ngModel">\
                           <div class="panel-heading">\
                               <h4 class="panel-title">\
<a ng-click="toggleCollapsedStates($index)" href="#{{panelBaseId}}-{{$index}}">{{item.fName}} {{item.lName}}</a>\
                               </h4>\
                           </div>\
<div id="{{panelBaseId}}-{{$index}}" data-parent="#{{panelId}}" class="panel-collapse collapse">\
                               <div class="panel-body">{{item.email}}  {{item.mCode}}-{{item.mNumber}}</div>\
                           </div>\
                       </div>\
                       <div ng-repeat-end></div>\
                   </div>',
        link: function (scope, el, attrs) {
            scope.panelBaseId = attrs.collapsePanelBodyId;
            scope.panelId = attrs.collapsePanelId;
        
            $(document).ready(function(){
                angular.forEach(scope.ngModel, function(value, key){
                    if (value.collapsed)
                    {
                        $("#" + scope.panelBaseId + "-" + key).collapse('show');
                    }
                });
            });
        
            scope.toggleCollapsedStates = function(ind){
                angular.forEach(scope.ngModel, function(value, key){
                    if (key == ind)
                    {
                        scope.ngModel[key].collapsed = !scope.ngModel[key].collapsed;
                        $("#" + scope.panelBaseId + "-" + ind).collapse('toggle');
                    }
                    else
                        scope.ngModel[key].collapsed = false;
                });
            }
        }
    };
});

customDirectives.directive('onlyDigits', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, element, attr, ctrl) {
        function inputValue(val) {
          if (val) {
            var digits = val.replace(/[^0-9]/g, '');

            if (digits !== val) {
              ctrl.$setViewValue(digits);
              ctrl.$render();
            }
            return parseInt(digits,10);
          }
          return undefined;
        }            
        ctrl.$parsers.push(inputValue);
      }
    };
});