using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using SMS_Api.Models;

namespace SMS_Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class VendordashboardController : ApiController
    {
        private SMSEntities db = new SMSEntities();

        public IEnumerable<Product> Get()
        {
            return db.Products.ToList();
        }

        public string Post(int? id)
        {
            try
            {
                Product product = db.Products.Find(id);
                if (db.CartItems.SingleOrDefault(x => x.Name == product.Name) == null)
                {
                    CartItem cartItem = new CartItem
                    {

                        Name = product.Name,
                        Category = product.Category,
                        Quantity = 1,
                        Price = product.Price,
                        TotalPrice = 1 * product.Price

                    };

                    db.CartItems.Add(cartItem);

                    db.SaveChanges();


                }
                else
                {
                    CartItem cartItem = db.CartItems.SingleOrDefault(x => x.Name == product.Name);
                    cartItem.Quantity++;
                    cartItem.TotalPrice = cartItem.Price * cartItem.Quantity;


                    db.SaveChanges();

                }

                return "Added to cart";
            }
            catch (Exception)
            {
                return "Failed to Add check the id ";
            }
        }
    }
}
