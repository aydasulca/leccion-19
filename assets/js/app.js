var img = document.getElementsByClassName('animal');
var seleccionar = document.getElementById('seleccionar');
seleccionar.onchange= function(){
  if(seleccionar.value=="original"){
    for (var i = 0; i < img.length; i++){
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("sepia");
    }
  }

    if(seleccionar.value=="blanco-negro"){
      for (var j = 0; j < img.length; j++){
        img[j].classList.add("blanco-negro");
        img[j].classList.remove("invertir-colores");
        img[j].classList.remove("sepia");
        img[j].classList.remove("original");
      }
    }

      if(seleccionar.value=="invertir-colores"){
        for (var k = 0; k < img.length; k++) {
          img[k].classList.remove("blanco-negro");
          img[k].classList.add("invertir-colores");
          img[k].classList.remove("sepia");
          img[k].classList.remove("original");
        }
      }

        if(seleccionar.value=="sepia"){
          for (var l = 0; l < img.length; l++) {
            img[l].classList.remove("blanco-negro");
            img[l].classList.remove("invertir-colores");
            img[l].classList.add("sepia");
            img[l].classList.remove("original");
          }
        }
}
