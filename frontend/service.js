
var service = angular.module("service",[]);

service.factory("todoFactory", ["$http",
    function($http){
        return {
            get: function(){
                return $http.get('/todo');
            },
            create: function(newtodo){
                return $http.post('/todo', newtodo);
            },
            delete: function(id){
                return $http.delete('/todo/' + id);
            }
        }
}]);

