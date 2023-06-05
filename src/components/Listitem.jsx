const Listitem = ({ timeInMilliseconds, number, fromLocation, toLocation }) => {
  //   const hours = Math.floor(timeInMilliseconds / (3600 * 1000))
  const minutes = Math.floor((timeInMilliseconds % (3600 * 1000)) / (60 * 1000))
  const seconds = Math.floor((timeInMilliseconds % (60 * 1000)) / 1000)
  return (
    <li>
      <a href="#">
        <div className="email-list-item">
          <div className="email-author">
            {/* <img src="../../assets/images/avatars/profile-image-3.jpg" alt="" /> */}
            <span>Items Moved</span>
            <span className="email-date">
              {minutes} minutes {seconds} seconds
            </span>
          </div>
          <div className="email-info">
            <span className="email-subject">
              {number} items moved from {fromLocation} to {toLocation}
            </span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default Listitem
