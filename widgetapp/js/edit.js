(function (angular) {

	ctrl.$inject = ['$scope', 'widgets', 'colors', '$stateParams', '$state'];

	function ctrl ($scope, widgets, colors, $stateParams, $state) {
		if($stateParams.widgetId) {
			$scope.widget = widgets.get(parseInt($stateParams.widgetId, 10));
		} else {
			$scope.widget = {};
		}

		$scope.colors = colors.getAll();

		$scope.saveWidget = function () {
			if($scope.widget.id) {
				widgets.update($scope.widget);
			} else {
				widgets.insert($scope.widget);
			}
			$state.go('home');
		};

		$scope.deleteWidget = function () {
			if(confirm("Are you sure you want to delete the widget?")) {
				widgets.delete($scope.widget.id);
				$state.go('home');
			};
		};
	}

	angular.module("WidgetApp.Controllers")
		.controller('EditCtrl', ctrl);

})(angular);