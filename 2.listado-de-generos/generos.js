window.onload = function() {
  var URL_IMAGEN_FIJA = "https://image.tmdb.org/t/p/original"
  var API_KEY = "8f8e7aa9f7776daab8e75dad4b1e06cc"


  // 1) populares

  var URL_GENEROS = 'https://api.themoviedb.org/3/genre/tv/list?api_key='+API_KEY+'&page=1'

  fetch(URL_GENEROS)
    .then(function(response) {
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      // console.log(objetoLiteralRespuesta);

      var arrayGeneros = objetoLiteralRespuesta.genres
      var contenedor = document.querySelector('.contenedorGeneros')
      // console.log(arrayGeneros);

      for (var i = 0; i < arrayGeneros.length; i++) {
        console.log(arrayGeneros[i].name);

        var div = '<a href="../3.orden-por-genero/3-index.html?idGenero='+ arrayGeneros[i].id +'"> <div>'
        div += '<div class="uk-card uk-card-default uk-card-body">'
        div += '<h3 class="uk-card-title">' + arrayGeneros[i].name + '</h3>'
        div += '</div>'
        div += '</div></a>'

        contenedor.innerHTML += div
      }



    });

}
