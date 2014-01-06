$( "#btn-login" ).click(function() {
	$.ajax({
		url: "api/login.php",
		data: {
			email: $('#email').val(),
			pw:	$('#pw').val()
		},
		success: function( data ) {
			if( data=="OK" ){
				$( "#text-block" ).html( "<h1>Login successful</h1><p>Your login was successful, you can use our application now</p>" );
				$('#myModal').modal('hide');
			}
			else{
				$('.form-signin-heading').html( "Login failure, try again." );
			}
		}
	});
});		

$( ".nav a" ).click(function(event) {
	 var a_href = $( this ).attr('href').replace('#','') + '.html';
	 $( ".nav a" ).removeClass("active");
	 $( this ).addClass("active");
	$.ajax({
		url: "content/" + a_href,
		data: {
		},
		success: function( data ) {
			$( "#text-block" ).html( data );
		}
	});
});

$( ".brand" ).click(function(event) {
	 var a_href = $( this ).attr('href').replace('#','') + '.html';
	$.ajax({
		url: "content/" + a_href,
		data: {
		},
		success: function( data ) {
			$( "#text-block" ).html( data );
		}
	});
});

function showTop(){
	$( '#TopBar' ).fadeIn("slow");	
}

function hideTop(){
	$( '#TopBar' ).fadeOut("slow");	
}

function showBottom(){
	$( '#BottomBar' ).fadeIn("slow");	
}

function hideBottom(){
	$( '#BottomBar' ).fadeOut("slow");	
}

function showLeft(){
	$( '#LeftBar' ).fadeIn("slow");	
}

function hideLeft(){
	$( '#LeftBar' ).fadeOut("slow");	
}

function showRight(){
	$( '#RightBar' ).fadeIn("slow");	
}

function hideRight(){
	$( '#RightBar' ).fadeOut("slow");	
}

function logout(){
	$.ajax({
		url: "api/logout.php",
		success: function( data ) {
			$( "#text-block" ).html( "<h1>Succesfully loged out</h1><p>Feel free to login again at any time.</p>" );
		}
	});
};	

$('.TopControl').click(function () {
	alert("debug");
    $('.ToolbarTop').hide();
});	

$.get( "api/user_status.php", function(data) {
	if (data == "NOK") {
		$('#alertBox').html( "<p>Please login first</p>" ) ;
		$(".logedOnly").hide();
	}
	else{
		$("#btn-showLogin").hide();
		$("#alertBox").html('<p>You are loged in as ' + data + ' [<a href="javascript:logout();" class="alert-link">Logout</a>]</p>');
		$("#alertBox").removeClass("alert-danger");
		$("#alertBox").addClass("alert-info");
		
		
	}
});

$('#myModal').modal('hide');