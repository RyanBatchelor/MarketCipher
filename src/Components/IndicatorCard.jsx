
const IndicatorCard = ({ borderColor, title, content, image, onClick, isActive }) => {
  return (
    <>
    <div className={`card ${isActive ? 'active' : ''}`} style={{ borderColor }} onClick={onClick}>
      <div className="card-content">

        <div className="card-image">
            <img src={image} alt=""/>
        </div>

        <div className="card-text">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default IndicatorCard