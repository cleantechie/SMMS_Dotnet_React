using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SMS_Api.Models;

namespace SMS_Api.Controllers
{
    public class InvoiceController : ApiController
    {
        private SMSEntities db = new SMSEntities();

        public IEnumerable<Invoice> Get()

        {

            try
            {
                return db.Invoices.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }



        }
       
        

    }
}
