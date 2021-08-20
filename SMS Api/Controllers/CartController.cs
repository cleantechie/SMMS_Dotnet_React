using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Web.Routing;
using Microsoft.Ajax.Utilities;
using SMS_Api.Models;

namespace SMS_Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CartController : ApiController
    {
        public int total { get; set; }
        private SMSEntities db = new SMSEntities();
        /*
        [System.Web.Http.Route("cart/Method")]
        public void Method()
        {
            var cartItems = db.CartItems.ToList();

            foreach (var item in cartItems)
            {
                total = total + (item.Quantity * item.Price);
            }

            Utility.totalAmount = total;

            
            
        }*/


        public IEnumerable<CartItem> Get()

        {
            
                return db.CartItems.ToList();

            
            
        }

        /*public string Post(CartItem cartItem)
        {
            db.CartItems.Add(cartItem);
            db.SaveChanges();
            return "Item Added";
        }*/

        public string Put(CartItem cartItem)
        {
            try
            {
                CartItem item = db.CartItems.Find(cartItem.Id);

                if (item == null)
                {
                    return "Item was null";
                }
                else
                {
                    item.Name = cartItem.Name;
                    item.Category = cartItem.Category;
                    item.Price = cartItem.Price;
                    item.Quantity = cartItem.Quantity;
                    item.TotalPrice = cartItem.Price*cartItem.Quantity;

                    db.SaveChanges();

                    return "Updated";

                }
            }
            catch (Exception )
            {
                return "Expection arised";
            }
            
        }

        public string Delete(int? id)
        {
            if (id == null) throw new ArgumentNullException(nameof(id));
            CartItem cartItem = db.CartItems.Find(id);
            db.CartItems.Remove(cartItem);
            db.SaveChanges();

            return "Deleted with " + id + " Successfully";
        }

        /*[System.Web.Http.HttpDelete]
        [System.Web.Http.Route("cart/Pay")]
        public string Pay()
        {
            Invoice invoice = new Invoice
            {
                VendorName = "ASDf",
                PaymentDateTime = DateTime.Now,
                Amount = Utility.totalAmount
            };
            db.Invoices.Add(invoice);
            db.CartItems.RemoveRange(db.CartItems.ToList());
            db.SaveChanges();

            return "Invoice generated and cart is empty";
        }*/
    }
}
