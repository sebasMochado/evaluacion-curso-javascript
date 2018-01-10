var calculadora = {
  screenCalculator: document.getElementById("display"),
  screenValue: "0",
  operation: "",
  firstValue: 0,
  secondValue: 0,
  lastValue: 0,
  result: 0,
  equalKey: false,

  init: function(){
    this.changeSizeKeys();
    this.assignEventCalculator();
  },

  changeSizeKeys: function(){
      cero = document.getElementById("0");
      uno = document.getElementById("1");
      dos = document.getElementById("2");
      tres = document.getElementById("3");
      cuatro = document.getElementById("4");
      cinco = document.getElementById("5");
      seis = document.getElementById("6");
      siete = document.getElementById("7");
      ocho = document.getElementById("8");
      nueve = document.getElementById("9");
      on = document.getElementById("on");
      sign = document.getElementById("sign");
      dividido = document.getElementById("dividido");
      por = document.getElementById("por");
      menos = document.getElementById("menos");
      mas = document.getElementById("mas");
      igual = document.getElementById("igual");
      raiz = document.getElementById("raiz");
      punto = document.getElementById("punto");

      cero.addEventListener("mousedown", function(){
        cero.setAttribute("style","transform:scale(0.95,0.95)");
      });

      cero.addEventListener("mouseup", function(){
        cero.setAttribute("style","transform:scale(1,1)");
      });

      uno.addEventListener("mousedown", function(){
        uno.setAttribute("style","transform:scale(0.95,0.95)");
      });

      uno.addEventListener("mouseup", function(){
        uno.setAttribute("style","transform:scale(1,1)");
      });

      dos.addEventListener("mousedown", function(){
        dos.setAttribute("style","transform:scale(0.95,0.95)");
      });

      dos.addEventListener("mouseup", function(){
        dos.setAttribute("style","transform:scale(1,1)");
      });

      tres.addEventListener("mousedown", function(){
        tres.setAttribute("style","transform:scale(0.95,0.95)");
      });

      tres.addEventListener("mouseup", function(){
        tres.setAttribute("style","transform:scale(1,1)");
      });

      cuatro.addEventListener("mousedown", function(){
        cuatro.setAttribute("style","transform:scale(0.95,0.95)");
      });

      cuatro.addEventListener("mouseup", function(){
        cuatro.setAttribute("style","transform:scale(1,1)");
      });

      cinco.addEventListener("mousedown", function(){
        cinco.setAttribute("style","transform:scale(0.95,0.95)");
      });

      cinco.addEventListener("mouseup", function(){
        cinco.setAttribute("style","transform:scale(1,1)");
      });

      seis.addEventListener("mousedown", function(){
        seis.setAttribute("style","transform:scale(0.95,0.95)");
      });

      seis.addEventListener("mouseup", function(){
        seis.setAttribute("style","transform:scale(1,1)");
      });

      siete.addEventListener("mousedown", function(){
        siete.setAttribute("style","transform:scale(0.95,0.95)");
      });

      siete.addEventListener("mouseup", function(){
        siete.setAttribute("style","transform:scale(1,1)");
      });

      ocho.addEventListener("mousedown", function(){
        ocho.setAttribute("style","transform:scale(0.95,0.95)");
      });

      ocho.addEventListener("mouseup", function(){
        ocho.setAttribute("style","transform:scale(1,1)");
      });

      nueve.addEventListener("mousedown", function(){
        nueve.setAttribute("style","transform:scale(0.95,0.95)");
      });

      nueve.addEventListener("mouseup", function(){
        nueve.setAttribute("style","transform:scale(1,1)");
      });

      on.addEventListener("mousedown", function(){
        on.setAttribute("style","transform:scale(0.95,0.95)");
      });

      on.addEventListener("mouseup", function(){
        on.setAttribute("style","transform:scale(1,1)");
      });

      sign.addEventListener("mousedown", function(){
        sign.setAttribute("style","transform:scale(0.95,0.95)");
      });

      sign.addEventListener("mouseup", function(){
        sign.setAttribute("style","transform:scale(1,1)");
      });

      dividido.addEventListener("mousedown", function(){
        dividido.setAttribute("style","transform:scale(0.95,0.95)");
      });

      dividido.addEventListener("mouseup", function(){
        dividido.setAttribute("style","transform:scale(1,1)");
      });

      por.addEventListener("mousedown", function(){
        por.setAttribute("style","transform:scale(0.95,0.95)");
      });

      por.addEventListener("mouseup", function(){
        por.setAttribute("style","transform:scale(1,1)");
      });

      menos.addEventListener("mousedown", function(){
        menos.setAttribute("style","transform:scale(0.95,0.95)");
      });

      menos.addEventListener("mouseup", function(){
        menos.setAttribute("style","transform:scale(1,1)");
      });

      mas.addEventListener("mousedown", function(){
        mas.setAttribute("style","transform:scale(0.95,0.95)");
      });

      mas.addEventListener("mouseup", function(){
        mas.setAttribute("style","transform:scale(1,1)");
      });

      raiz.addEventListener("mousedown", function(){
        raiz.setAttribute("style","transform:scale(0.95,0.95)");
      });

      raiz.addEventListener("mouseup", function(){
        raiz.setAttribute("style","transform:scale(1,1)");
      });

      punto.addEventListener("mousedown", function(){
        punto.setAttribute("style","transform:scale(0.95,0.95)");
      });

      punto.addEventListener("mouseup", function(){
        punto.setAttribute("style","transform:scale(1,1)");
      });

      igual.addEventListener("mousedown", function(){
        igual.setAttribute("style","transform:scale(0.95,0.95)");
      });

      igual.addEventListener("mouseup", function(){
        igual.setAttribute("style","transform:scale(1,1)");
      });
    },

    assignEventCalculator: function(){
      cero.addEventListener("click", function(){
        calculadora.enterNumber("0");
      });

      uno.addEventListener("click", function(){
        calculadora.enterNumber("1");
      });

      dos.addEventListener("click", function(){
        calculadora.enterNumber("2");
      });

      tres.addEventListener("click", function(){
        calculadora.enterNumber("3");
      });

      cuatro.addEventListener("click", function(){
        calculadora.enterNumber("4");
      });

      cinco.addEventListener("click", function(){
        calculadora.enterNumber("5");
      });

      seis.addEventListener("click", function(){
        calculadora.enterNumber("6");
      });

      siete.addEventListener("click", function(){
        calculadora.enterNumber("7");
      });

      ocho.addEventListener("click", function(){
        calculadora.enterNumber("8");
      });

      nueve.addEventListener("click", function(){
        calculadora.enterNumber("9");
      });

      on.addEventListener("click", function(){
        calculadora.clearScreen();
      });

      menos.addEventListener("click", function(){
        calculadora.changeSign();
      });
    },

    enterNumber: function(valor){
      if (this.screenValue.length < 8) {
        if (this.screenValue == "0") {
          this.screenValue = "";
          this.screenValue = this.screenValue + valor;
        } else{
          this.screenValue + valor;
        }

      this.updateScreen();
      }
    },

    clearScreen: function(){
      this.screenValue = "0";
      this.operation = "";
      this.firstValue = 0;
      this.secondValue = 0;
      this.result = 0;
      this.operation = "";
      this.lastValue = 0;
      this.equalKey = false;
      this.updateScreen();
    },

    changeSign: function(){
      if(this.screenValue != "0") {
        var minSign;
        if (this.screenValue.charAt(0) == "-") {
          minSign = this.screenValue.slice(1);
        }else{
          minSign = "-" + this.screenValue;
        }

        this.screenValue = "";
        this.screenValue = minSign;
        this.updateScreen();
      }
    },

    updateScreen: function(){
      this.screenCalculator.innerHTML = this.screenValue;
    },
  };

  calculadora.init();
