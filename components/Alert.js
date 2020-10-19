

function Alert(callback) {
    Swal.fire({
        title: '¿ Estas Seguro?',
        text: "Esta accion no se revertirá!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, adelante!'
    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        }
    })
}

export default Alert;
