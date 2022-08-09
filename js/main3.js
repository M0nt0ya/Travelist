function mostrar_Inputs() {
  let destinos = document.getElementById('destinos').value;

  if (destinos == 1) {
    location.href = "../html/hora.html";
  }else if (destinos == 2){
    location.href = "../html/hora1.html";
  }
}
