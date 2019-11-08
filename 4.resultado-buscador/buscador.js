window.onload = function() {
  var queBuscoElUsuario = new URLSearchParams(location.search).get("busqueda");

  console.log(queBuscoElUsuario);

  var API_KEY = "8f8e7aa9f7776daab8e75dad4b1e06cc"
  var URL_IMAGEN_FIJA = "https://image.tmdb.org/t/p/original"

  var URL_AIRE_HOY = "https://api.themoviedb.org/3/search/tv?api_key="+ API_KEY +"&language=en-US&query=" + queBuscoElUsuario + "&page=1"

  fetch(URL_AIRE_HOY)
    .then(function(response) {
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);

      // capturar el UL que va a contener los LI (series)
      var ul = document.querySelector("#buscando")
      var arrayDeSeries = objetoLiteralRespuesta.results
      var li = ""
      for (var i = 0; i < arrayDeSeries.length; i++) {
        if(arrayDeSeries[i].poster_path != null){
          li = '<li>'
          li +=     '<img src="'+ URL_IMAGEN_FIJA + arrayDeSeries[i].poster_path + '" alt="">'
          li +=    '<div class="uk-position-center uk-panel"><h1>'+arrayDeSeries[i].name+'</h1></div>'
          li += '</li>'
          ul.innerHTML += li
        }



      }


    });
}
