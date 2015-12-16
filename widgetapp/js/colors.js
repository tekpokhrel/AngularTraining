(function(angular) {

	function factory () {
		var
			colors = [
				{code: "blue", name: "Blue", category: "Budget"},
				{code: "black", name: "Black", category: "Standard"},
				{code: "aqua", name: "Aqua", category: "Premium"},
				{code: "navy", name: "Navy", category: "Budget"},
				{code: "green", name: "Green", category: "Standard"},
				{code: "olive", name: "Olive", category: "Premium"},
			];

		return {
			getAll: function () {
				return colors;
			}
		}
	}

	angular.module('WidgetApp.Services')
		.factory('colors', factory);

})(angular);