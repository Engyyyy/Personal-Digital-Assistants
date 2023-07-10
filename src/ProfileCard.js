function ProfileCard({ title, handle, image }) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-1by1">
          <img src={image} alt={`${title} logo`} />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{title}</p>
            <p class="subtitle is-6">{handle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
