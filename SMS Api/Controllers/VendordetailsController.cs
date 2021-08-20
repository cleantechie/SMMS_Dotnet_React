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

            return db.Vendors.ToList();



        }
    }
}
