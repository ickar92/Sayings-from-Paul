$( document ).ready( function () {

	var sayings = [
		'Если падоешь то и тащещь за собой', 
		'Кочаться, кочаться и еще раз кочаться!!',
		'Хлеб всему голова'
	];

	var firstBqNumber = 0;
	var lastBqNumber = sayings.length - 1;
	var currentBqNumber;

	init();

	$( '.previous' ).click( function () {
		if ( currentBqNumber <= firstBqNumber) {
			currentBqNumber = lastBqNumber;
		} else {
			currentBqNumber--;	
		}
		applyTextToBq( currentBqNumber );
		localStorage.setItem("currentBqNumber", currentBqNumber);
	});

	$( '.next' ).click( function () {
		if ( currentBqNumber >= lastBqNumber) {
			currentBqNumber = firstBqNumber;
		} else {
			currentBqNumber++;	
		}
		applyTextToBq( currentBqNumber );
		localStorage.setItem("currentBqNumber", currentBqNumber);
	});

	function init() {
		if (lsTest) {
			currentBqNumber = localStorage.getItem("currentBqNumber");
		} else {
			currentBqNumber = firstBqNumber;
		}
		applyTextToBq( currentBqNumber );
		// localStorage.setItem("currentBqNumber", currentBqNumber);
	}

	function applyTextToBq( bqNumber ) {
		$( '.bq' ).text( sayings[bqNumber] );
	}

	function lsTest() {
	    var test = 'test';
	    try {
	        localStorage.setItem(test, test);
	        localStorage.removeItem(test);
	        return true;
	    } catch(e) {
	        return false;
	    }
	}
});