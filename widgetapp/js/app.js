(function(angular) {

	"use strict";

	angular.module('WidgetApp.Services', []);
	angular.module('WidgetApp.Filters', ['WidgetApp.Services']);
	angular.module('WidgetApp.Controllers', ['WidgetApp.Services']);

	angular.module('WidgetApp', ['ui.router', 'WidgetApp.Controllers', 'WidgetApp.Filters'])
	.run(function ($templateCache) {
		$templateCache.put("tpls/home.html", `
<table class="table">
	<thead>
		<tr>
			<th>Name</th>
			<th>color</th>
			<th>size</th>
			<th>quantity</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="widget in widgets">
			<td ng-bind="widget.name"></td> 
			<td ng-bind="widget.color | colorName"></td>
			<td ng-bind="widget.size"></td>
			<td ng-bind="widget.quantity"></td>
			<td>
				<button ui-sref="edit({widgetId: widget.id})">Edit</button>
				<button ui-sref="view({widgetId: widget.id})">View</button>
				<button ng-click="deleteWidget(widget.id)">Delete</button>
			</td>
		</tr>
	</tbody>
</table>
<button ui-sref="create">Create</button>
		`);





		$templateCache.put("tpls/view.html", `


<div>
	<h1 ng-bind="widget.name"></h1>

	<p ng-bind="widget.description"></p>

	<label>Color: 
	<span ng-bind="widget.color"></span></label>
	<label>Size: 
	<span ng-bind="widget.size"></span></label>
	<label>Quantity: 
	<span ng-bind="widget.quantity"></span></label>
</div>
<button ui-sref="edit({widgetId: widget.id})">Edit</button>
<button ui-sref="home">Return to List</button>


		`);




		$templateCache.put("tpls/edit.html", `

<form name="widgetForm">
	<label>Name: <input ng-model="widget.name" name="widgetName" required /><span class="error" ng-show="widgetForm.widgetName.$invalid && widgetForm.widgetName.$touched"> Please enter name.</span></label>
	<label>Description: <input ng-model="widget.description" name="widgetDescription" required /><span class="error" ng-show="widgetForm.widgetDescription.$invalid && widgetForm.widgetDescription.$touched"> Please enter description.</span></label>
	<label>Color: 
	<select ng-model="widget.color" name="widgetColor" required ng-options="color.code as color.name group by color.category for color in colors"/>
		<option value="">Select One</option>
	</select>
	<span class="error" ng-show="widgetForm.widgetColor.$invalid && widgetForm.widgetColor.$touched"> Please select color.</span></label>
	<label>Size: <input ng-model="widget.size" name="widgetSize" required /><span class="error" ng-show="widgetForm.widgetSize.$invalid && widgetForm.widgetSize.$touched"> Please enter size.</span></label>
	<label>Quantity: <input ng-model="widget.quantity" type="number" name="widgetQuantity" required /><span class="error" ng-show="widgetForm.widgetQuantity.$invalid && widgetForm.widgetQuantity.$touched"> Please enter quantity.</span></label>

	<button type="button" ng-click="saveWidget()" ng-disabled="widgetForm.$invalid">Save</button>
	<button type="button" ng-if="widget.id" ng-click="deleteWidget(widget.id)">Delete</button>
	<button type="button" ui-sref="home">Return to List</button>
</form>

		`);
	})

})(angular);