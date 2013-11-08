$(document).ready(function(){

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
					//$('td:eq(4)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr ).html( getPrize(i) );
				}
			}
		},
		/*"aoColumnDefs": [
			{ "bSortable": false, "aTargets": [ 0 ] },
			{ "bSortable": false, "aTargets": [ 1 ] },
			{ "bSortable": false, "aTargets": [ 2 ] },
			{ "bSortable": false, "aTargets": [ 3 ] },
			{ "bSortable": false, "aTargets": [ 4 ] }
		],
		"aaSorting": [[ 3, 'asc' ]],*/
		"bAutoWidth": false, // Disable the auto width calculation 
		"aoColumns": [
			{ "sWidth": "5%" },
			{ "sWidth": "15%" },
			{ "sWidth": "15%" },
			{ "sWidth": "25%" },
			{ "sWidth": "15%" },
			{ "sWidth": "10%" },
			{ "sWidth": "5%" },
			{ "sWidth": "10%" }			
		],
		"iDisplayLength": 20
	}

	if (window.digital8.admin == "true") {
		//oSettings["aoColumnDefs"].push({ "bSortable": false, "aTargets": [ 5 ] });
		oSettings["aoColumns"].push({ "sWidth": "10%" });
	}

	$('#rego-table').dataTable( oSettings );

});