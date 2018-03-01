angular.module('Calculator', [])
    .controller('CalculatorController', function($scope) {
            $scope.add = function() {
                $scope.resultText =  $scope.a + $scope.b;
            };

            $scope.subract = function() {
                $scope.resultText =  $scope.a - $scope.b;
            };

            $scope.multiply = function() {
                $scope.resultText =  $scope.a * $scope.b;
            };

            $scope.divide = function() {
                $scope.resultText =  $scope.a / $scope.b;
            };
    });