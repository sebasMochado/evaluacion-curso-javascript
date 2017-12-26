function reducirTamañoTecla(elemento){
  elemento.style.padding = "2px";
}

function aumentarTamañoTecla(elemento){
  elemento.style.padding = "0";
}

var Calculadora = {
  init: function(){
    this.asignarEventoTamañoTecla('tecla');
  },

  asignarEventoTamañoTecla: function(selector) {
    var tecla = document.getElementsByClassName(selector);
    for (var i = 0; i < tecla.length; i++) {
      tecla[i].onmousedown = this.eventoReducirTamañoTecla;
      tecla[i].onmouseup = this.eventoAumentarTamañoTecla;
    }
  },

  eventoReducirTamañoTecla: function(event) {
    reducirTamañoTecla(event.target);
  },

  eventoAumentarTamañoTecla: function(event) {
    aumentarTamañoTecla(event.target);
  }
}

Calculadora.init();
