import css from "./Profile.module.css";

const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div className={css.card}>
      <div className={css.cardHead}>
        <img
          className={css.img}
          src={image}
          alt={name}
          width={200}
          height={200}
        />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p> 
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.listItemCount}>{stats.followers}</span>   
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.listItemCount}>{stats.views}</span>   
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.listItemCount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
