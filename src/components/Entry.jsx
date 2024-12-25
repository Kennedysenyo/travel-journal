import marker from "/img/marker.png";

const Entry = (props) => {
  return (
    <article className="entry-div">
      <div className="img-div">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="info-div">
        <div className="name-and-loc">
          <span className="name">
            <img src={marker} alt="marker icon" />
            <p>{props.country}</p>
          </span>
          <a href={props.googleMapsLink} target="_blank" >View on Google Maps</a>
        </div>
        <div className="description-div">
          <h2>{props.title}</h2>
          <p className="duration">{props.dates}</p>
          <p className="description">{props.text}</p>
        </div>
      </div>

    </article>
  )
}

export default Entry;