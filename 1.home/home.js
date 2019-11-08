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

      li = '<li class="contenedorDeSerie">'
      li +=    '<p class="tituloDeSerie">' + arrayDeSeries[i].name + '</p>'
      li +=     '<img src="'+ URL_IMAGEN_FIJA + arrayDeSeries[i].poster_path + '" alt="">'
      li +=    '<p class="vote">' + arrayDeSeries[i].vote_average + '</p>'
      li += '</li>'

      ul.innerHTML += li
    }

    var contenedoresDeSeriesPopulares = document.querySelectorAll("#populares .contenedorDeSerie")

    for (var i = 0; i < contenedoresDeSeriesPopulares.length; i++) {
      contenedoresDeSeriesPopulares[i].onmouseover = function() {
        var titulo = this.querySelector(".tituloDeSerie");
        titulo.style.display = "block";
        titulo.classList.add("uk-animation-slide-bottom")

        var vote = this.querySelector(".vote");
        vote.style.display = "block";
        vote.classList.add("uk-animation-slide-bottom")
      }

      contenedoresDeSeriesPopulares[i].onmouseout = function() {
        var titulo = this.querySelector(".tituloDeSerie");
        titulo.style.display = "none";
        titulo.classList.remove("uk-animation-slide-bottom")

        var vote = this.querySelector(".vote");
        vote.style.display = "none";
        vote.classList.add("uk-animation-slide-bottom")
      }
    }

  });

  // 2) al aire hoy

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

        li = '<li class="contenedorDeSerie">'
        li +=    '<p class="tituloDeSerie">' + arrayDeSeries[i].name + '</p>'
        li +=     '<img src="'+ URL_IMAGEN_FIJA + arrayDeSeries[i].poster_path + '" alt="">'
        li +=    '<p class="vote">' + arrayDeSeries[i].vote_average + '</p>'
        li += '</li>'

        ul.innerHTML += li
      }

      var contenedoresDeSeriesAireHoy = document.querySelectorAll("#airehoy .contenedorDeSerie")

      for (var i = 0; i < contenedoresDeSeriesAireHoy.length; i++) {
        contenedoresDeSeriesAireHoy[i].onmouseover = function() {
          var titulo = this.querySelector(".tituloDeSerie");
          titulo.style.display = "block";
          titulo.classList.add("uk-animation-slide-bottom")

          var vote = this.querySelector(".vote");
          vote.style.display = "block";
          vote.classList.add("uk-animation-slide-bottom")
        }

        contenedoresDeSeriesAireHoy[i].onmouseout = function() {
          var titulo = this.querySelector(".tituloDeSerie");
          titulo.style.display = "none";
          titulo.classList.remove("uk-animation-slide-bottom")

          var vote = this.querySelector(".vote");
          vote.style.display = "none";
          vote.classList.add("uk-animation-slide-bottom")
        }
      }



    });


  // 3) mayor puntaje

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

        li = '<li class="contenedorDeSerie">'
        li +=    '<p class="tituloDeSerie">' + arrayDeSeries[i].name + '</p>'
        li +=     '<img src="'+ URL_IMAGEN_FIJA + arrayDeSeries[i].poster_path + '" alt="">'
        li +=    '<p class="vote">' + arrayDeSeries[i].vote_average + '</p>'
        li += '</li>'

        ul.innerHTML += li
      }

      var contenedoresDeSeriesPuntaje = document.querySelectorAll("#puntaje .contenedorDeSerie")

      for (var i = 0; i < contenedoresDeSeriesPuntaje.length; i++) {
        contenedoresDeSeriesPuntaje[i].onmouseover = function() {
          var titulo = this.querySelector(".tituloDeSerie");
          titulo.style.display = "block";
          titulo.classList.add("uk-animation-slide-bottom")

          var vote = this.querySelector(".vote");
          vote.style.display = "block";
          vote.classList.add("uk-animation-slide-bottom")

        }

        contenedoresDeSeriesPuntaje[i].onmouseout = function() {
          var titulo = this.querySelector(".tituloDeSerie");
          titulo.style.display = "none";
          titulo.classList.remove("uk-animation-slide-bottom")

          var vote = this.querySelector(".vote");
          vote.style.display = "none";
          vote.classList.add("uk-animation-slide-bottom")

        }

      }

    });



})
