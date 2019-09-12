//acomoda el elipse al centro y lo hace aparecer

anime({
  targets: ".elipseboi",
  keyframes: [{ left: "45%" }, { top: "45%" }, { opacity: 1 }],
  duration: 1000,
  easing: "easeInOutSine",
  complete: function() {
    beforeTouch();
  }
});

// movimiento del elipse hacia el boton

function beforeTouch() {
  anime({
    targets: ".elipseboi",
    keyframes: [{ left: "69%" }],
    duration: 600,
    easing: "easeInOutSine",
    complete: function() {
      touch();
    }
  });
}

function touch(){
    anime({
        targets: ".elipseboi",
        keyframes: [{ top: "-13%" }],
        duration: 500,
        easing: "easeInOutSine",
        complete: function() {
          onTouch();
        }
      });
}

// animacion de boton presionado

function onTouch(){
    anime({
        targets: ".elipseboi",
        keyframes: [{ scale: ["1",".8"]}, {scale:"1"}, {opacity:["1","0"]}, {top: "0%"}],
        duration: 1000,
        easing: "easeInOutSine",
      });
}



