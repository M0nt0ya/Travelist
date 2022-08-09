const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const boton = document.getElementById('btn-iniciar');

boton.addEventListener('click', (e) => {
  e.preventDefault();
  if (usuario.value == 'Ismael' && contraseña.value == 'Ismael23') {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Iniciado sesión con éxito'
    })
    setTimeout(() => {
      location.href = "horarios.html";
    }, 3000);
  }else if (usuario.value == '' && contraseña.value == '') {
    Swal.fire({
        title: 'Error!',
        text: "El campo usuario y el campo contraseña se encuentran vacios",
        icon: 'warning',
        confirmButtonText: 'OK'
      })
  }else if (usuario.value == '' || contraseña.value == '') {
    Swal.fire({
        title: 'Error!',
        text: "El campo usuario o el campo contraseña se encuentra vacio",
        icon: 'warning',
        confirmButtonText: 'OK'
      })
  }else {
    Swal.fire({
      title: 'Error!',
      text: 'El usuario o contraseña es incorrecto',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  };
});