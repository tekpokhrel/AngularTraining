(function (angular) {

	ctrl.$inject = ['$scope', 'widgets'];

	function ctrl ($scope, widgets) {
		$scope.widgets = widgets.getAll();

		$scope.deleteWidget = function (widgetId) {
			if(confirm("Are you sure you want to delete the widget?")) {
				widgets.delete(widgetId);
			};
		}

	}

	angular.module("WidgetApp.Controllers")
		.controller('HomeCtrl', ctrl);

})(angular);