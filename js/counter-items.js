



$(document).ready(function() {
	$('.number').on('click', '.number-minus, .number-plus', function(){
		// console.log(" click ");
		var $row = $(this).closest('.number');
		var $input = $row.find('.number-text');
		var step = $row.data('step');
		var val = parseFloat($input.val());
		// console.log($row + "  " + $input + " " + step + "  " + val);
		if ($(this).hasClass('number-minus')) {
			val -= step;
		} else {
			val += step;
		}
		$input.val(val);
		$input.change();
		return false;
	});

	// console.log($row + "  " + $input + " " + step + "  " + val);
 
	$('.number').on('change', '.number-text', function(){
		var $input = $(this);
		var $row = $input.closest('.number');
		var step = $row.data('step');
		var min = parseInt($row.data('min'));
		var max = parseInt($row.data('max'));
		var val = parseFloat($input.val());
		if (isNaN(val)) {
			val = step;
		} else if (min && val < min) {
			val = min;	
		} else if (max && val > max) {
			val = max;	
		}
		$input.val(val);
		console.log(val);
	});



});