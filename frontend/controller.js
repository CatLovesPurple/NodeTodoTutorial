var ctrl = angular.module("todo", ["service"]);
//it's really important to take a look at the order
ctrl.controller("main", ["$scope", "$http", "todoFactory", function($scope, $http, todoFactory){
    $scope.formData = {};


    todoFactory.get().success(function(data){
        $scope.todoitems = data;
    });

    $scope.delete = function(id) {
        todoFactory.delete(id)
            .success(function(data){
                $scope.todoitems = data;
                $scope.formData = {};
            });
    }

    $scope.submitForm = function() {
        if(!$scope.formData.title){
            alert("please input title");
        }
        else if(!$scope.formData.content){
            alert("please input content");
        }
        if($scope.formData.title && $scope.formData.content) {
            var newtodoData = {
                "title": $scope.formData.title,
                "content": $scope.formData.content
            }
            todoFactory.create($scope.formData)
                .success(function (data) {
                    //return the updated todoitems
                    $scope.todoitems = data;
                    //clear form data for next time use
                    $scope.formData = {};
                });
        }

    }




}]);
