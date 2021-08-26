using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SMS_Api.Models;

namespace SMS_Api.Controllers
{
    public class RegistrationController : ApiController
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
        public string Post(Vendor vendor)
        {
            try
            {
                db.Vendors.Add(vendor);
                Credential credential = new Credential
                {
                    Email = vendor.Email,//email is the username
                    Password = vendor.Password
                };
                db.Credentials.Add(credential);
                db.SaveChanges();
                return "Vendor Added and can Login";
            }
            catch (Exception)
            {
                return "Exception from the front end";
            }
        }
    }
}
