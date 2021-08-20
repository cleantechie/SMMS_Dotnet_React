using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SMS_Api.Models;

namespace SMS_Api.Controllers
{
    public class PaydoneController : ApiController
    {
        private SMSEntities db = new SMSEntities();
        public int total { get; set; }
        [HttpDelete]
        
        public IHttpActionResult PayResult()
        {

            db.CartItems.RemoveRange(db.CartItems.ToList());
            db.SaveChanges();

            return Ok(new { status = 200, isDeleteSuccess = true, isCartEmpty = "True", message = "Payment Done" });
        }
        [HttpGet]
        public string cartTotal()
        {
            var cartItems = db.CartItems.ToList();

            foreach (var item in cartItems)
            {
                total = total + (item.Quantity * item.Price);
            }

            Utility.totalAmount = total;

            return"Cart total "+total ;
        }


    }
}
