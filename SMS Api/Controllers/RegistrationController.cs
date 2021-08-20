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
            return db.Vendors.ToList();
        }
        public string Post(Vendor vendor)
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
    }
}
