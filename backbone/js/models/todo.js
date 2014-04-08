/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			
			//add the date picker here and then add something to frontend to allow for data entry
			//then, when date is chosen, make sure that information is given in UTC (unix time stamp) 
			//so that it is able to compare and be able to sort once that step is needed.
			
			//change up the backbone library (toJSON or model.toJdson) 
			//and add a function ._dateparse that includes a plugin for changing the date
			
			title2: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();
