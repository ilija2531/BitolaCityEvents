using BitolaCityEvents.Core.Entities.Common.Abstractions;
using BitolaCityEvents.Core.Entities.Identity.Common.Abstractions;

namespace BitolaCityEvents.Core.Entities.Identity.Media
{
    public class AccountPhoto : BaseEntity
    {
        public AccountPhoto() : base()
        {
        }

        public AccountPhoto(Guid id, string path, Guid accountId, Account account = null)
            : base(id)
        {
            Path = path;
            AccountId = accountId;
            Account = account;
        }

        public string Path { get; set; }
        public Guid AccountId { get; set; }
        public Account Account { get; set; }
    }
}
