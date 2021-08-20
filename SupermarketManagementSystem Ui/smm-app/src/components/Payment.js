
function Payment()
    {
        function emptyCart()
        {
            fetch('https://localhost:44349/api/cart/',{
                method:'DELETE',
                header:{'Accept':'application/json',
                     'Content-Type':'application/json'
            }
            })
            

        }

        function cartTotal()
        {
            fetch('https://localhost:44349/api/paydone')
        .then(response =>response.json())
        .then(data =>
                {

                  this.setState({paydone:data});
                }
            );
            emptyCart();

        }

    

    return(
        <div>
            <button onClick ={cartTotal}> Caluculate Total and Pay</button>
        </div>
    );

    }

export default Payment;
