import './index.css'

const CountryItem = props => {
  const {each, onTapVisitButton} = props
  const onTapVisit = () => {
    onTapVisitButton(each)
  }
  return (
    <li>
      <div className="container3">
        <p className="para">{each.name}</p>
        {each.isVisited ? (
          <button type="button" className="colorVisited">
            Visited
          </button>
        ) : (
          <button type="button" className="colorVisit" onClick={onTapVisit}>
            Visit
          </button>
        )}
      </div>
      <hr className="horizontal" />
    </li>
  )
}
export default CountryItem
