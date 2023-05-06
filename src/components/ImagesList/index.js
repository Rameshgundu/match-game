import './index.css'

const ImagesList = props => {
  const {imagesList, changeImg} = props
  const {id, thumbnailUrl} = imagesList
  const onChangeImage = () => {
    changeImg(id)
  }
  return (
    <li>
      <button className="image-btn" type="button" onClick={onChangeImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ImagesList
