import './renting.css'

const Renting = () => {
  return (
    <div>
      <button className="text-Taophieu">THÊM PHIẾU THUÊ</button>

      <div className="form-field">
          <div id="cccd"><label for="name" className="form-label">CCCD</label>
              <input type="text" className="form-input"/>
              <div className="sp">
                  <label for="name" className="form-label">Số phòng</label>
                  <input type="text" className="form-input"/></div>
              <div className="mpt">
                  <label for="name" className="form-label">Mã phiếu</label>
                  <input type="text" className="form-input"/></div>
              <div classNameName="sl">
                  <label for="name" className="form-label">Số lượng</label>
                  <input type="text" className="form-input"/></div>
          </div>

          <div id="nbd"><label for="name" className="form-label">Ngày b.đầu</label>
              <input type="text" className="form-input"/>
              <div className="sp">
                  <label for="name" className="form-label">Ngày k.thúc</label>
                  <input type="text" className="form-input"/></div>
              <div className="mpt">
                  <label for="name" className="form-label">Trạng thái</label>
                  <input type="text" className="form-input"/></div>
              <div className="sl">
                  <label for="name" className="form-label">Ghi chú</label>
                  <input type="text" className="form-input"/></div>
          </div>
      </div>
      <div className="Menu-frame"></div>
      <div className="Avatar-frame"></div>
      <button className="btn">Lập phiếu thuê</button>
    </div>
  )
}

export default Renting
