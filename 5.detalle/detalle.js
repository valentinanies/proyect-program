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

      for (var i = 0; i < objetoLiteralRespuesta.genres.length; i++) {
        document.querySelector("#serieGenres").innerHTML += '<a href="../3.orden-por-genero/3-index.html?idGenero='+objetoLiteralRespuesta.genres[i].id+'">'+objetoLiteralRespuesta.genres[i].name+'</a>'
      }

      document.querySelector("#serieIdioma").innerHTML = objetoLiteralRespuesta.languages[0];
      document.querySelector("#serieOverview").innerHTML = objetoLiteralRespuesta.overview;
      document.querySelector("#seriePoster").src = "http://image.tmdb.org/t/p/original" + objetoLiteralRespuesta.poster_path
    })


// capturo con query selector

document.querySelector("#recomendaciones").addEventListener("click",function(){
  fetch("https://api.themoviedb.org/3/tv/" + numeroDeSerie + "/recommendations?api_key=" + API_KEY + "&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(objetoLiteralRespuesta) {
    console.log(objetoLiteralRespuesta.results)
    for (var i = 0; i < objetoLiteralRespuesta.results.length; i++) {
      var poster= objetoLiteralRespuesta.results[i].poster_path
      var name= objetoLiteralRespuesta.results[i].name
      document.querySelector(".conteiner-recom").innerHTML = name;
      document.querySelector(".conteiner-recom").src = "http://image.tmdb.org/t/p/original" + objetoLiteralRespuesta.poster_path
    }

  })
})





document.querySelector("#trailer").addEventListener('click',function(){
  fecth("https://api.themoviedb.org/3/tv/" +  + "/videos?api_key=" + API_KEY)
})


// var ul = document.querySelector("#info").addEventListener('click',function(){
//   fetch(DETALLE_SERIE)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(objetoLiteralRespuesta) {
//       console.log(objetoLiteralRespuesta);
// var arrayDeSeries = objetoLiteralRespuesta.results
// var li = ""
// for (var i = 0; i < arrayDeSeries.length; i++) {
//
//   li = '<li class="contenedorDeSerie">'
//   li +=    '<p class="tituloDeSerie">' + arrayDeSeries[i].name + '</p>'
//   li +=    '<p class="vote">' + arrayDeSeries[i].vote_average + '</p>'
//   li += '</a>'
//   li += '</li>'
// }

// })

}
