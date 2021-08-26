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
            try
            {
                Invoice invoice = new Invoice
                {
                    VendorName = Utility.Vendorname,
                    PaymentDateTime = DateTime.Now,
                    Amount = Utility.totalAmount
                };
                db.Invoices.Add(invoice);

                db.CartItems.RemoveRange(db.CartItems.ToList());
                db.SaveChanges();

                return Ok(new { status = 200, isDeleteSuccess = true, isCartEmpty = "True", message = "Payment Done" });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        [HttpGet]
        public string cartTotal()
        {
            try
            {
                var cartItems = db.CartItems.ToList();

                foreach (var item in cartItems)
                {
                    total = total + (item.Quantity * item.Price);
                }

                Utility.totalAmount = total;

                return ""+total ;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }


    }
}
