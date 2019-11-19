window.onload = function() {
  var numeroDeSerie = new URLSearchParams(location.search).get("numeroDeSerie");

  // console.log(numeroDeSerie);
  var API_KEY = "8f8e7aa9f7776daab8e75dad4b1e06cc"
  var URL_IMAGEN_FIJA = "https://image.tmdb.org/t/p/original"

  var DETALLE_SERIE = "https://api.themoviedb.org/3/tv/" + numeroDeSerie + "?api_key=" + API_KEY + "&language=en-US"

  fetch(DETALLE_SERIE)
    .then(function(response) {
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);
      document.querySelector("#serieName").innerHTML = objetoLiteralRespuesta.name;
      document.querySelector("#serieAuthor").innerHTML = objetoLiteralRespuesta.created_by[0].name;
      document.querySelector("#serieDate").innerHTML = objetoLiteralRespuesta.first_air_date;
      document.querySelector("#serieGenres").innerHTML = objetoLiteralRespuesta.genres[0].name;
      document.querySelector("#serieIdioma").innerHTML = objetoLiteralRespuesta.languages[0];
      document.querySelector("#serieOverview").innerHTML = objetoLiteralRespuesta.overview;
      document.querySelector("#seriePoster").src = "http://image.tmdb.org/t/p/original" + objetoLiteralRespuesta.poster_path
    })
}
