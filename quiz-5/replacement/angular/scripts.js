	/*var theAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	function letterExists(stringToTest) {
	    stringToTest = stringToTest.toUpperCase();
	    return function(letr) {
	        return stringToTest.indexOf(letr) > -1;
	    }
	}

	function processAllLetters(stringToProcess) {
	    return theAlphabet.every(letterExists(stringToProcess)); //.every() breaks on false
	}*/


	var instapanagramApp = angular.module('instapanagramApp', [
	    'ui.bootstrap',
	    'instapanagramAppControllers'
	]);

	var instapanagramAppControllers = angular.module('instapanagramAppControllers', []);

	instapanagramAppControllers.controller('panagramController', ['$scope',

	    function($scope) {
	        $scope.panagramResponses = [];
	        $scope.checkString = "";
	        $scope.responseCount = 0;

	        $scope.getClass = function(panagram) {
	        	console.log(pan);
	        	return panagram.status;
	        };
	        $scope.checkPanagram = function() {
	        	var checkPan = new Pangram($scope.checkString);
	        	var thisStatus = checkPan.run();
	            var panagramText = thisStatus ? 'This sentence is a panagram!' : 'This sentence is not a panagram!';
	            var statusClass = thisStatus ? 'trueResponse' : 'falseResponse';
	            $scope.panagramResponses.push({
	                "entry": $scope.checkString,
	                "result": panagramText,
	                "count": $scope.responseCount,
	                "status": statusClass
	            });
	            $scope.responseCount++;
	            $scope.checkString = "";
	        };
	    }

	]);

	instapanagramApp.directive('enterPress', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.enterPress);
                });

                event.preventDefault();
            }
        });
    };
});