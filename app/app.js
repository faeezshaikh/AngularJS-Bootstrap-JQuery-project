var app = angular.module("angularApp", ["ngRoute"]);
	
	app.config(function($routeProvider) {
		$routeProvider
			.when("/awsum",{controller:"FaeezController",templateUrl: "app/partials/my_partial.html"})
			.when("/",{redirectTo: "/awsum"})
			.otherwise({redirectTo: "/awsum"})
		
	});
	
	
