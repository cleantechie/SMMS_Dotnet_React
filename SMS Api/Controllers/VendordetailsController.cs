using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SMS_Api.Models;

namespace SMS_Api.Controllers
{
    public class VendordetailsController : ApiController
    {
        private SMSEntities db = new SMSEntities();
        public IEnumerable<Vendor> Get()

        {

            try
            {
                return db.Vendors.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }



        }

        public string Delete(int id)
        {
            try
            {
                Vendor vendor = db.Vendors.Find(id);
                Credential credential = db.Credentials.Find(id);
                if (vendor == null) { return "Id not Found"; }
                else
                {
                    db.Vendors.Remove(vendor);
                    db.Credentials.Remove(credential);
                    db.SaveChanges();
                    return "Seller removed successfully";
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}
