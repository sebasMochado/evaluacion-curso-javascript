var display = document.getElementById("display")

var operandos = {
  operador: "",
  operadorAnt: "",
  numAnt: 0
}

var calculadora = {
    init: function(){
      var self = this
      var cero = document.getElementById("0")
      var uno = document.getElementById("1")
      var dos = document.getElementById("2")
      var tres = document.getElementById("3")
      var cuatro = document.getElementById("4")
      var cinco = document.getElementById("5")
      var seis = document.getElementById("6")
      var siete = document.getElementById("7")
      var ocho = document.getElementById("8")
      var nueve = document.getElementById("9")
      var on = document.getElementById("on")
      var sign = document.getElementById("sign")
      var dividido = document.getElementById("dividido")
      var por = document.getElementById("por")
      var menos = document.getElementById("menos")
      var mas = document.getElementById("mas")
      var igual = document.getElementById("igual")
      var raiz = document.getElementById("raiz")
      var punto = document.getElementById("punto")

      cero.addEventListener("click", function(){
        self.numero("0")
      })

      cero.addEventListener("mousedown", function(){
        cero.setAttribute("style","transform:scale(0.95,0.95)")
      })

      cero.addEventListener("mouseup", function(){
        cero.setAttribute("style","transform:scale(1,1)")
      })

      uno.addEventListener("click", function(){
        self.numero("1")
      })

      uno.addEventListener("mousedown", function(){
        uno.setAttribute("style","transform:scale(0.95,0.95)")
      })

      uno.addEventListener("mouseup", function(){
        uno.setAttribute("style","transform:scale(1,1)")
      })

      dos.addEventListener("click", function(){
        self.numero("2")
      })

      dos.addEventListener("mousedown", function(){
        dos.setAttribute("style","transform:scale(0.95,0.95)")
      })

      dos.addEventListener("mouseup", function(){
        dos.setAttribute("style","transform:scale(1,1)")
      })

      tres.addEventListener("click", function(){
        self.numero("3")
      })

      tres.addEventListener("mousedown", function(){
        tres.setAttribute("style","transform:scale(0.95,0.95)")
      })

      tres.addEventListener("mouseup", function(){
        tres.setAttribute("style","transform:scale(1,1)")
      })

      cuatro.addEventListener("click", function(){
        self.numero("4")
      })

      cuatro.addEventListener("mousedown", function(){
        cuatro.setAttribute("style","transform:scale(0.95,0.95)")
      })

      cuatro.addEventListener("mouseup", function(){
        cuatro.setAttribute("style","transform:scale(1,1)")
      })

      cinco.addEventListener("click", function(){
        self.numero("5")
      })

      cinco.addEventListener("mousedown", function(){
        cinco.setAttribute("style","transform:scale(0.95,0.95)")
      })

      cinco.addEventListener("mouseup", function(){
        cinco.setAttribute("style","transform:scale(1,1)")
      })

      seis.addEventListener("click", function(){
        self.numero("6")
      })

      seis.addEventListener("mousedown", function(){
        seis.setAttribute("style","transform:scale(0.95,0.95)")
      })

      seis.addEventListener("mouseup", function(){
        seis.setAttribute("style","transform:scale(1,1)")
      })

      siete.addEventListener("click", function(){
        self.numero("7")
      })

      siete.addEventListener("mousedown", function(){
        siete.setAttribute("style","transform:scale(0.95,0.95)")
      })

      siete.addEventListener("mouseup", function(){
        siete.setAttribute("style","transform:scale(1,1)")
      })

      ocho.addEventListener("click", function(){
        self.numero("8")
      })

      ocho.addEventListener("mousedown", function(){
        ocho.setAttribute("style","transform:scale(0.95,0.95)")
      })

      ocho.addEventListener("mouseup", function(){
        ocho.setAttribute("style","transform:scale(1,1)")
      })

      nueve.addEventListener("click", function(){
        self.numero("9")
      })

      nueve.addEventListener("mousedown", function(){
        nueve.setAttribute("style","transform:scale(0.95,0.95)")
      })

      nueve.addEventListener("mouseup", function(){
        nueve.setAttribute("style","transform:scale(1,1)")
      })

      on.addEventListener("mousedown", function(){
        on.setAttribute("style","transform:scale(0.95,0.95)")
      })

      on.addEventListener("mouseup", function(){
        on.setAttribute("style","transform:scale(1,1)")
      })

      sign.addEventListener("mousedown", function(){
        sign.setAttribute("style","transform:scale(0.95,0.95)")
      })

      sign.addEventListener("mouseup", function(){
        sign.setAttribute("style","transform:scale(1,1)")
      })

      dividido.addEventListener("mousedown", function(){
        dividido.setAttribute("style","transform:scale(0.95,0.95)")
      })

      dividido.addEventListener("mouseup", function(){
        dividido.setAttribute("style","transform:scale(1,1)")
      })

      por.addEventListener("mousedown", function(){
        por.setAttribute("style","transform:scale(0.95,0.95)")
      })

      por.addEventListener("mouseup", function(){
        por.setAttribute("style","transform:scale(1,1)")
      })

      menos.addEventListener("mousedown", function(){
        menos.setAttribute("style","transform:scale(0.95,0.95)")
      })

      menos.addEventListener("mouseup", function(){
        menos.setAttribute("style","transform:scale(1,1)")
      })

      mas.addEventListener("mousedown", function(){
        mas.setAttribute("style","transform:scale(0.95,0.95)")
      })

      mas.addEventListener("mouseup", function(){
        mas.setAttribute("style","transform:scale(1,1)")
      })

      raiz.addEventListener("mousedown", function(){
        raiz.setAttribute("style","transform:scale(0.95,0.95)")
      })

      raiz.addEventListener("mouseup", function(){
        raiz.setAttribute("style","transform:scale(1,1)")
      })

      punto.addEventListener("mousedown", function(){
        punto.setAttribute("style","transform:scale(0.95,0.95)")
      })

      punto.addEventListener("mouseup", function(){
        punto.setAttribute("style","transform:scale(1,1)")
      })

      igual.addEventListener("mousedown", function(){
        igual.setAttribute("style","transform:scale(0.95,0.95)")
      })

      igual.addEventListener("mouseup", function(){
        igual.setAttribute("style","transform:scale(1,1)")
      })
    },

    numero: function(){
      
    },
}

calculadora.init()
