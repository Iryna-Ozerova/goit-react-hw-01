import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
    return (
      <div className={css.card}>
  <div className={css.description}>
    <img className={css.avatar}
      src={image}
      alt="User avatar"
    />
    <p className={css.userTitle}>{name}</p>
    <p className={css.userInfo}>{tag}</p>
    <p className={css.userInfo}>{location}</p>
  </div>

  <ul className={css.statsList}>
    <li className={css.statsItem}>
      <span className={css.statLabel}>Followers</span>
      <span className={css.statValue}>{followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statLabel}>Views</span>
      <span className={css.statValue}>{views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statLabel}>Likes</span>
      <span className={css.statValue}>{likes}</span>
    </li>
  </ul>
</div>
  )
};

export default Profile;