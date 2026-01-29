using BitolaCityEvents.Core.Entities.Identity.Common.Abstractions;
using BitolaCityEvents.Core.Entities.Identity.Media;
using BitolaCityEvents.Core.Entities.Joins;

namespace BitolaCityEvents.Core.Entities.Identity
{
    public class User : Account
    {
        public User() : base()
        {
        }

        public User(string username, string firstName, string lastName, AccountPhoto photo = null,
            IEnumerable<UserSavedEvents> savedEvents = null, IEnumerable<UserGoingEvents> goingEvents = null)
            : base(username, photo)
        {
            FirstName = firstName;
            LastName = lastName;
            SavedEvents = savedEvents;
            GoingEvents = goingEvents;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IEnumerable<UserSavedEvents> SavedEvents { get; set; }
        public IEnumerable<UserGoingEvents> GoingEvents { get; set; }
    }
}
