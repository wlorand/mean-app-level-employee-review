(function(document, window, angular) {
	'use strict';

	var DashboardCtrl = function($scope, $stateParams) {
		$scope.name = 'Megan Prior-Pfeifer III';

		var today = new Date();
		var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		$scope.dd = today.getDate();
		$scope.mm = monthArray[today.getMonth()];
		$scope.yyyy = today.getFullYear();


		// Alerts for Dashboard
		$scope.alerts = [
			{ type: 'success', icon: 'ok', msg: 'Hooray! You did it from js!' },
			{ type: 'info', icon: 'flag', msg: 'Hey, you should know this...from js' },
			{ type: 'warning', icon: 'exclamation-sign', msg: 'Uh-oh, you better be careful...from js' },
			{ type: 'danger', icon: 'fire', msg: 'HALP! HALP! Your website is on fire!!! from js' },
			{ type: 'success', icon: 'ok', msg: 'Hip hop Hooray! - SS Dashboard now includes UIB Dismissible Alerts!' },
		];

		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};

	};

	module.exports = DashboardCtrl;

})(document, window, angular);