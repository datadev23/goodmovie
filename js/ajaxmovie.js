
  $.ajax({
 

  type:"GET",
  url:"https://api.themoviedb.org/3/discover/movie?api_key=8c17b779a91285d774bb734f9e18e808&query=with_genres=18&primary_release_year=2018&sort_by=popularity.desc",
  success: function(data) {

    for(var i=0; i<=9; i++) {

      //alert(JSON.stringify(data.results[i].title));
     // $('.text').text(JSON.stringify(data.results[0]));
      



    $("ul").append("<li>" + "<br>" + "<img src='https://image.tmdb.org/t/p/w200"+data.results[i].poster_path+"'>" +"</li></ul>");
    }

    // append it to a div tag 
    // append title and an image 
  
   // $('.text').text(JSON.stringify(data.results[0].title));

  },

  dataType: 'jsonp',


  });

