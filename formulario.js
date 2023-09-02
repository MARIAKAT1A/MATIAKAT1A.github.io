function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    var cuerpoMensaje = "Nombre: " + nombre + "\nEmail: " + email + "\nMensaje: " + mensaje;
    var link = "https://mail.google.com/mail/u/0/?to=gbamariakatia@gmail.com&su=Nuevo+mensaje&body&fs=1&tf=cm" + encodeURIComponent(cuerpoMensaje);
  
    window.open(link, "_blank");
  }

  function initMap() {
    var centroMapa = { lat: -12.083660721943872, lng: -76.99605353958275 };
  
    var mapa = new google.maps.Map(document.getElementById('map'), {
      center: centroMapa,
      zoom: 12
    });

    var marcador = new google.maps.Marker({
      position: centroMapa,
      map: mapa,
      title: 'Ubicación del mapa'
    });
  }
