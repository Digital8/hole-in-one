$(document).ready(function(){

	function getPrize(i) {
		if (i < prizes.length)
			return prizes[i];
		else
			return "";
	}

	var prizes = [
	  "Cobra Golf Clubs (Valued at $1450)",
	  "Infiniti Car for a Weekend plus 9 & Dine at ELGC",
	  "Infiniti Car for a Weekend plus 9 & Dine at ELGC",
	  "Rife Putter (Valued at $200)",
	  "Rife Putter (Valued at $200)",
	  "Rife Putter (Valued at $200)",
	  "Rife Putter (Valued at $200)",
	  "Rife Putter (Valued at $200)",
	  "$88 ELGC Voucher (Nine & Dine for two)",
	  "$88 ELGC Voucher (Nine & Dine for two)",
	  "$88 ELGC Voucher (Nine & Dine for two)",
	  "$88 ELGC Voucher (Nine & Dine for two)",
	  "$88 ELGC Voucher (Nine & Dine for two)",
	  "$88 ELGC Voucher (Nine & Dine for two)",
	  "$88 ELGC Voucher (Nine & Dine for two)",
	  "$88 ELGC Voucher (Nine & Dine for two)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "30min Golf Lesson (valued at $60)",
	  "Box Srixon Z Balls",
	  "Box Srixon Z Balls",
	  "Box Srixon Z Balls",
	  "Box Srixon Z Balls",
	  "Box Srixon Z Balls"
	];

	var oSettings = {
		"sDom": "t<'row'<'span8'i><'span8'p>>",
		"sPaginationType": "bootstrap",
		"oLanguage": {
			"sInfo": "Showing _START_ to _END_ of _TOTAL_ shots"
		},
		"fnDrawCallback": function ( oSettings ) {
			if ( oSettings.bSorted || oSettings.bFiltered )
			{
				for ( var i=0, iLen=oSettings.aiDisplay.length ; i<iLen ; i++ )
				{
					$('td:eq(0)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr ).html( i+1 );
					$('td:eq(4)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr ).html( getPrize(i) );
				}
			}
		},
		"aoColumnDefs": [
			{ "bSortable": false, "aTargets": [ 0 ] },
			{ "bSortable": false, "aTargets": [ 1 ] },
			{ "bSortable": false, "aTargets": [ 2 ] },
			{ "bSortable": false, "aTargets": [ 3 ] },
			{ "bSortable": false, "aTargets": [ 4 ] }
		],
		"aaSorting": [[ 3, 'desc' ]],
		"bAutoWidth": false, // Disable the auto width calculation 
		"aoColumns": [
			{ "sWidth": "10%" },
			{ "sWidth": "20%" },
			{ "sWidth": "20%" },
			{ "sWidth": "10%" },
			{ "sWidth": "40%" }			
		],
		"iDisplayLength": 20
	}

	if (window.digital8.admin == "true") {
		oSettings["aoColumnDefs"].push({ "bSortable": false, "aTargets": [ 5 ] });
		oSettings["aoColumns"].push({ "sWidth": "10%" });
	}

	$('#shot-table').dataTable( oSettings );

});
