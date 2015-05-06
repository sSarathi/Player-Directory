//linker between different html template pretending they are from same page

//specefying my application that it will run ng-route for deep linking different html


var MyApp=angular.module('myApp',['ngRoute','MyController']);


// which way I'm going to access different html staying in single page and using different controller for every html individually


MyApp.config(['$routeProvider',function($routeProvider){$routeProvider.
	when('/list',{
				templateUrl: 'partials/list.html',
				controller:'ListController'
				}).
	when('/details',{

				templateUrl: 'partials/details.html',
				controller:'DetailsController'


					}).


	when('/bio/:playerID',{

				templateUrl: 'partials/bio.html',
				controller:'BioController'


					}).

	otherwise({
				redirectTo:'/list'

				});
}]); 