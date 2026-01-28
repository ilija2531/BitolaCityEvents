
namespace BitolaCityEvents.Core.Entities.Common.Abstractions
{
    public abstract class BaseEntity
    {
        protected BaseEntity()
        {
        }

        protected BaseEntity(Guid id)
        {
            Id = id;
        }

        public Guid Id { get; set; }
    }
}
