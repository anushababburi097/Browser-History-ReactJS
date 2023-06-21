import './index.css'

const HistoryItems = props => {
  const {browserDetails, deleteIconList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails

  const onDeleteIcon = () => {
    deleteIconList(id)
  }

  return (
    <li className="browser-list-items">
      <p className="history-time">{timeAccessed}</p>
      <div className="list-title-content">
        <img src={logoUrl} alt="domain logo" className="logo-image" />
        <p className="tittle">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>

      <button
        type="button"
        className="btn"
        onClick={onDeleteIcon}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default HistoryItems
