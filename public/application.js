var appName = 'mean';
var app = angular.module(appName, ['example','ngRoute']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});

app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);