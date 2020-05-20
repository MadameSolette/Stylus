$(function() {

        $( "#dialog" ).dialog({
        autoOpen: false,
        width: 550,
        minHeight: 200,
        height: 'auto',
        position: {my: "bottom-20"}
        });

        $( "#opener" ).click(function() {
            $( "#content" ).css({opacity: 0.8});
            $( "#dialog" ).dialog( "open" );
        });

	$( "#dialog" ).on( "dialogclose", function() {
           $('#content').css({opacity: 1});
	});

});