$(document).ready(function() {


//ajaxload();
// load an ajax query from another page 

$.getScript( "js/ajaxmovie.js", function( data, textStatus, jqxhr ) {
  console.log( data ); // Data returned
  console.log( textStatus ); // Success
  console.log( jqxhr.status ); // 200
  console.log( "Load was performed." );
});

});
