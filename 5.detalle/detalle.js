window.onload = function() {
  var numeroDeSerie = new URLSearchParams(location.search).get("numeroDeSerie");

  // console.log(numeroDeSerie);
  var API_KEY = "8f8e7aa9f7776daab8e75dad4b1e06cc"
  var URL_IMAGEN_FIJA = "https://image.tmdb.org/t/p/original"

  var DETALLE_SERIE = "https://api.themoviedb.org/3/tv/" + numeroDeSerie + "?api_key=" + API_KEY + "&language=en-US"

//TRAER LOS DETALLES DE LA SERIE + QS PARA MODIFICAR EL HTML CON LA INFO NUEVA

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


// RECOMENDACIONES

var RECOM = "https://api.themoviedb.org/3/tv/" + numeroDeSerie + "/recommendations?api_key=" + API_KEY + "&page=1"
var ul = document.querySelector("#recomendaciones").addEventListener('click',function(){
    fetch(RECOM)
      .then(function(response) {
        return response.json();
        })
      .then(function(objetoLiteralRespuesta){
        console.log(objetoLiteralRespuesta);

        var ul = document.querySelector(".contenedorRecom")
        var arrayDeSeries = objetoLiteralRespuesta.results
        var li = ""
        for (var i = 0; i < arrayDeSeries.length; i++) {

          li = '<li class="contenedorRecom">'
          li += '<a href=../5.detalle/5-index.html?numeroDeSerie=' + arrayDeSeries[i].id + '>'
          li +=    '<p class="tituloDeSerie">' + arrayDeSeries[i].name + '</p>'
          li +=     '<img src="'+ URL_IMAGEN_FIJA + arrayDeSeries[i].poster_path + '" alt="">'
          li += '</a>'
          li += '</li>'

          ul.innerHTML += li
        }

      });
  });





// TRAILER

document.querySelector("#trailer").addEventListener('click',function(){
  fecth("https://api.themoviedb.org/3/tv/" +  + "/videos?api_key=" + API_KEY)
  document.querySelector('query').src = youy + video.key
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
