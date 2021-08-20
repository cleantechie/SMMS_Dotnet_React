using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SMS_Api.Models;

namespace SMS_Api.Controllers
{
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        private SMSEntities db = new SMSEntities();
        
        [HttpPost]
        public IHttpActionResult Login(Credential credential)
        {
            if (credential.Email == "admin" && credential.Password == "admin")
            {
                return Ok(new { status = 200, isSuccess = true, isAdmin="True", message = "Admin Login successfully" });

            }

            else
            {
                
                if (db.Credentials.SingleOrDefault(x =>
                    x.Email == credential.Email && x.Password == credential.Password)!=null)
                {

                    return Ok(new
                        { status = 200, isSuccess = true, isAdmin = "false", message = "User Login successfully", UserDetails = credential.Email });
                }
                else
                {
                    
                    return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
                }
                

            }
            /*var log = db.Vendors.Where(x => x.Email.Equals(vendor.Email) && x.Password.Equals(vendor.Password)).FirstOrDefault();

            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
            }
            else

                return Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });*/
        }
    }
}
