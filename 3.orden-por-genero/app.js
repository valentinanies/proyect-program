window.onload = function(){

  var query = new URLSearchParams(location.search);

  var idGenero = query.get('idGenero');

  // console.log(idGenero);

  var API_KEY = "8f8e7aa9f7776daab8e75dad4b1e06cc"
  var URL_IMAGEN_FIJA = "https://image.tmdb.org/t/p/original"


  fetch("https://api.themoviedb.org/3/discover/tv?api_key=8f8e7aa9f7776daab8e75dad4b1e06cc&page=1&with_genres=" + idGenero)
    .then(function(res){
      return res.json()
    })
    .then(function(data){
      console.log(data);
    })
    .catch(function(error){
      console.log(error);
    })


}
