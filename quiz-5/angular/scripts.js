	var theAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	function letterExists(stringToTest) {
	    stringToTest = stringToTest.toUpperCase();
	    return function(letr) {
	        return stringToTest.indexOf(letr) > -1;
	    }
	}

	function processAllLetters(stringToProcess) {
	    return theAlphabet.every(letterExists(stringToProcess)); //.every() breaks on false
	}


	var instapanagramApp = angular.module('instapanagramApp', [
	    'ui.bootstrap',
	    'instapanagramAppControllers'
	]);

	var instapanagramAppControllers = angular.module('instapanagramAppControllers', []);

	instapanagramAppControllers.controller('panagramController', ['$scope',

	    function($scope) {
	        $scope.panagramResponses = [];
	        $scope.checkString = "";


	        $scope.checkPanagram = function() {

	            var panagramText = processAllLetters($scope.checkString) ? 'This sentence is a panagram!' : 'This sentence is not a panagram!';
	            $scope.panagramResponses.push({
	                "entry": $scope.checkString,
	                "result": panagramText
	            });

	        };
	    }

	]);