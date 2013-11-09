$(document).ready(function(){

	function getPrize(i) {
		if (i < prizes.length)
			return prizes[i];
		else
			return "";
	}

	var prizes = [
	  "$500 Cash"
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
				var topScore = null;
				var leaders = 0;

				for ( var i=0, iLen=oSettings.aiDisplay.length ; i<iLen ; i++ )
				{
					if(topScore == null)
						topScore = parseInt( $('td:eq(3)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html() );

					if(topScore == parseInt( $('td:eq(3)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html() ) ) {
						$('td:eq(4)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).addClass('leader');
						++leaders;
					}

					$('td:eq(0)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr ).html( i+1 );
					//$('td:eq(4)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr ).html( getPrize(i) );
				}

				if (leaders == 1) {
					$('#putt-table td.leader').html('$500 Cash');
				}
				else {
					$('#putt-table td.leader').html('Putt Off for $500 Cash');
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

	$('#putt-table').dataTable( oSettings );

});
