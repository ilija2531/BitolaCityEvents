using BitolaCityEvents.Core.Entities.Identity;
using BitolaCityEvents.DataAccess.Config.Entities.Identity.Common.Abstractions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitolaCityEvents.DataAccess.Config.Entities.Identity
{
    public class OrganizatorConfig : BaseAccountConfig<Organizator>
    {
        public override void Configure(EntityTypeBuilder<Organizator> builder)
        {
            base.Configure(builder);

            builder.ToTable("Organizators");

            builder.Property(p => p.OrganizatorName).HasMaxLength(30).IsRequired();
        }
    }
}
