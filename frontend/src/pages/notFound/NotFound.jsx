import './notFound.css'

const NotFound = () => {
  return (
    <div>
      <div className="container">
        <div className="image">
          <img src={require("./image.png" )}/>
        </div>
        <div className="ooops">
          Ooops...
        </div>
        <div className="pnf">
          Page not found
        </div>
        <div className="text">
          Có vẻ thông tin bạn tìm kiếm không xuất hiện ở đây. Đừng bận tâm điều này, vui lòng tiếp tục bằng cách quay trở lại trang chủ của chúng tôi
        </div>
        <div className="bt">
          <div className="goback">
            Go Back
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
