import './index.css'

const VisitedCountry = props => {
  const {each, onTapRemoveButton} = props
  const onTapRemove = () => {
    onTapRemoveButton(each)
  }
  return (
    <div className="container7">
      <img src={each.imageUrl} alt="thumbnail" className="image" />
      <div className="container10">
        <p className="para">{each.name}</p>
        <button type="button" className="button" onClick={onTapRemove}>
          Remove
        </button>
      </div>
    </div>
  )
}
export default VisitedCountry
