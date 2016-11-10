ngApp.config(function($routeProvider){
		$routeProvider.when('/',{
				templateUrl	:	'public/pages/home.html',
				controller	:	'AngularController'
		})
		.otherwise({
				redirectTo	:	'/'
		})
});