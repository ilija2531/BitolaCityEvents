using BitolaCityEvents.Core.Entities.Identity.Media;
using Microsoft.AspNetCore.Identity;

namespace BitolaCityEvents.Core.Entities.Identity.Common.Abstractions
{
    public abstract class Account : IdentityUser<Guid>
    {
        protected Account() : base()
        {
        }

        protected Account(string userName, AccountPhoto photo = null) 
            : base(userName)
        {
            Photo = photo;
        }

        public AccountPhoto Photo { get; set; }
    }
}
