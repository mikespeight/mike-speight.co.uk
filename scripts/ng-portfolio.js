/**
 *
 *	ng-portfolio.js
 *
 *  Angular version of portfolio
 *
 *	Created by Mike Speight on 07/10/2015.
 *
 */

"use strict"

console.log("ng-portfolio");

var portfolioApp = angular.module("portfolio",[]);

/* set path of data local or remote */
if(window.location.hostname == "www.mike-speight.co.uk"){
    var baseURL = "www.mike-speight.co.uk/";
    console.log("www.mike-speight.co.uk", baseURL);
}
else if(window.location.hostname == "192.168.1.80:8080"){
    var baseURL = "192.168.1.80:8080/mike-speight.co.uk/";
    console.log("192.168.1.80:8080", baseURL);
}
else {
    var baseURL = "localhost:8080/mike-speight.co.uk/";
    console.log("localhost", baseURL);
}

portfolioApp.controller('examplesController', function($scope, $http){
	$http.get('http://'+baseURL+'data/examples.json')
	.success(
		function(response) {
			$scope.projects = response;
			console.log($scope.projects);
		}
		);
});

