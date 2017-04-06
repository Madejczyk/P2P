//Jakub Madejczyk
//Wrapping in a closure is a good habit :)
(function (){
var app = angular.module('grid',[]); //Creating our module: angular.module('Application Name', Dependencies)
    app.directive('fileTable', function(){
        return {
            restrict: 'E',//Type of Directive (E for Element)
            templateUrl: './templates/file-table.html'
        };
    });
    app.directive('filePanel', function(){
        return {
            restrict: 'E',//Type of Directive (E for Element)
            templateUrl: './templates/file-panel.html'
        };
    });
    app.directive('fileReview', function(){
        return {
            restrict: 'E',//Type of Directive (E for Element)
            templateUrl: './templates/file-review.html'
        };
    });
    //Local
    app.controller('GridController', function(){
        this.files = downloadFiles;
        this.selectedFile = null;
        this.selectedTab = 0;
        this.canUpload = true;

        this.sFileAndTab = function(setFile, setTab){
            this.selectedFile = setFile;
            this.selectedTab = setTab;
        }
    });
    //HTTP
    /*app.controller('GridController', ['$http',function($http){
        var grid - this;
        grid.files = [];

        $http.get('/files.json').success(function(data){
            grid.files = data;
        });
    }]);*/


    app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(file){
            file.reviews.push(this.review);
            this.review = {};
        };
    });
})();
/*
Directives - HTML annotations that trigger Javascript behaviors
    np-app - attach the Application Module to the page
    ng-controller - attach a Controller function to the page
    ng-show / ng-hide - display a section based on an Expression
    ng-repeat - repeat a section for each item in an Array
        orderBy: '-seeders' - will list files by descending seeders
        orderBy: 'seeders' - files would list in ascending order
Modules - Where our application components live
Controllers - Where we add application behavior
Expressions - How values get displayed within the page
*/