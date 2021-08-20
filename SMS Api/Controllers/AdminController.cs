using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SMS_Api.Models;

namespace SMS_Api.Controllers
{
    public class AdminController : ApiController
    {
        private SMSEntities db = new SMSEntities();

        public IEnumerable<Product> Get()
        {
            return db.Products.ToList();
        }

        public string Post(Product product)
        {
           
            
            if (product == null)
            {
                return "Null Exception";
            }
            else
            {
                db.Products.Add(product);
                db.SaveChanges();
                return "Product Added Successfully";
            }
            
        }

        public string Put(Product product)
        {
            var product_ = db.Products.Find(product.Id);

            if (product_ == null) { return "Id not Found"; }
            else
            {
                product_.Id = product.Id;
                product_.Name = product.Name;
                product_.Category = product.Category;
                product_.Price = product.Price;

                
                db.SaveChanges();

                return "Product Updated Successfully";
            }
        }

        

        public string Delete(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null) { return "Id not Found"; }
            else
            {
                db.Products.Remove(product);
                db.SaveChanges();
                return "Product deleted successfully";
            }
        }
    }
}
