window.addEventListener('load', function() {

  var inputSeleccionGenero = document.querySelector('#seleccion-genero');
  var inputSeleccionSinGenero = document.querySelector('#seleccion-sin-genero');
  // Capturar el select del genero que no queremos
  var API_KEY = "8f8e7aa9f7776daab8e75dad4b1e06cc";
  var url = "https://api.themoviedb.org/3/genre/tv/list?api_key=" + API_KEY + "&language=en-US"

  fetch(url).

  then(function(response) {
    return response.json()
  })

  .then(function(resultado) {
    console.log(resultado.genres);
    for(let i = 0; i < resultado.genres.length; i++) {
      inputSeleccionGenero.innerHTML += "<option value=" + resultado.genres[i].id + ">" + resultado.genres[i].name + "</option>";
    }
    for(let i = 0; i < resultado.genres.length; i++) {
      inputSeleccionSinGenero.innerHTML += "<option value=" + resultado.genres[i].id + ">" + resultado.genres[i].name + "</option>";
    }
  })

})
