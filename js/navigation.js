// Toggles class open to display/hide the whole navigation
$( ".widget__extendednavigation" ).addClass( "closed" );

$( ".extendednavigation__navigation-toggle" ).click(function() {
	$( ".widget__extendednavigation" ).toggleClass( "open" );
    $( "body" ).toggleClass( "navigation--open" );
});



$('.navigation-body').click(function(e) {
    if (e.target == this) {
        $( ".widget__extendednavigation" ).removeClass( "open" );
        $( "body" ).removeClass( "navigation--open" );
    }
});





// Togglse class open to display/hide folders

$( ".navigation-item.folder .item-name--parent" ).each(function() {
	$( this ).click(function() {
			$( this ).parent( ".navigation-item.folder" ).toggleClass( "open" );
	});
});
