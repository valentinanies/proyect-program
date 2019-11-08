window.addEventListener('load',function(){

var API_KEY = "8f8e7aa9f7776daab8e75dad4b1e06cc"
var URL_IMAGEN_FIJA = "https://image.tmdb.org/t/p/original"

// 1) populares

var URL_POPULARES = 'https://api.themoviedb.org/3/tv/popular?api_key='+API_KEY+'&page=1'

fetch(URL_POPULARES)
  .then(function(response) {
    return response.json();
  })
  .then(function(objetoLiteralRespuesta) {
    console.log(objetoLiteralRespuesta);

    // capturar el UL que va a contener los LI (series)
    var ul = document.querySelector("#populares")
    var arrayDeSeries = objetoLiteralRespuesta.results
    var li = ""
    for (var i = 0; i < arrayDeSeries.length; i++) {

      li = '<li>'
      li +=    '<div class="uk-card uk-card-default uk-card-body">' + arrayDeSeries[i].name + '</div>'
      li +=     '<img src="'+ URL_IMAGEN_FIJA + arrayDeSeries[i].poster_path + '" alt="">'
      li += '</li>'

      ul.innerHTML += li
    }


  });

// 3) al aire hoy

var URL_AIRE_HOY = "https://api.themoviedb.org/3/tv/airing_today?api_key="+ API_KEY +"&language=en-US"

fetch(URL_AIRE_HOY)
  .then(function(response) {
    return response.json();
  })
  .then(function(objetoLiteralRespuesta) {
    console.log(objetoLiteralRespuesta);

    // capturar el UL que va a contener los LI (series)
    var ul = document.querySelector("#airehoy")
    var arrayDeSeries = objetoLiteralRespuesta.results
    var li = ""
    for (var i = 0; i < arrayDeSeries.length; i++) {

      li = '<li>'
      li +=    '<div class="uk-card uk-card-default uk-card-body">' + arrayDeSeries[i].name + '</div>'
      li +=     '<img src="'+ URL_IMAGEN_FIJA + arrayDeSeries[i].poster_path + '" alt="">'
      li += '</li>'

      ul.innerHTML += li
    }


  });

// 2) mayor puntaje

var URL_PUNTAJE = "https://api.themoviedb.org/3/tv/top_rated?api_key="+ API_KEY +"&page=1"

fetch(URL_PUNTAJE)
  .then(function(response) {
    return response.json();
  })
  .then(function(objetoLiteralRespuesta) {
    console.log(objetoLiteralRespuesta);

    // capturar el UL que va a contener los LI (series)
    var ul = document.querySelector("#puntaje")
    var arrayDeSeries = objetoLiteralRespuesta.results
    var li = ""
    for (var i = 0; i < arrayDeSeries.length; i++) {

      li = '<li>'
      li +=    '<div class="uk-card uk-card-default uk-card-body">' + arrayDeSeries[i].name + '</div>'
      li +=     '<img src="'+ URL_IMAGEN_FIJA + arrayDeSeries[i].poster_path + '" alt="">'
      li += '</li>'

      ul.innerHTML += li
    }


  });



})
