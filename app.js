function orderNow(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You are about to make a purchase!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, buy it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Order Successful!',
                'Your order has been placed successfully.',
                'success'
            )
        }
    })
}