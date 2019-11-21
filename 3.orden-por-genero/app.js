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

      var div = document.querySelector(".resultadosDiv")
      var arrayGeneros = data.results
      var li = ""
        for (var i = 0; i < arrayGeneros.length; i++) {
          arrayGeneros[i]
          li = '<div class="serie">'
          li += '<a href=../5.detalle/5-index.html?numeroDeSerie=' + arrayGeneros[i].id + '>'
          li +=    '<p class="tituloDeSerie">' + arrayGeneros[i].name + '</p>'
          li +=     '<img src="'+ URL_IMAGEN_FIJA + arrayGeneros[i].poster_path + '" alt="">'
          li += '</a>'
          li += '</div>'

          div.innerHTML += li


        }


    })
    .catch(function(error){
      console.log(error);
    })


}
