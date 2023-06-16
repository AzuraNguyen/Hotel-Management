import './renting.css'
import { useState } from 'react';
import Modal from "react-modal";

const Renting = () => {
    const [soPhong, setSoPhong] = useState('');
    const [soLuong, setSoLuong] = useState('');
    const [ngayBD, setNgayBD] = useState('');
    const [ngayKetThuc, setNgayKetThuc] = useState('');
    const [ghiChu, setGhiChu] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nguoiThue, setNguoiThue] = useState([]);

    // Xử lý sự kiện khi người dùng nhấn nút "Lập phiếu thuê"
    const handleLapPhieuClick = () => {
        // Tạo object chứa thông tin cần gửi tới API Django
        const data = {
        soPhong,
        soLuong,
        ngayBD,
        ngayKetThuc,
        ghiChu,
        };
        // Thêm thông tin người thuê vào mảng nguoiThue
        setNguoiThue([...nguoiThue, data]);
        // Gọi API Django 
        fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => {
            // Xử lý kết quả trả về từ API
            console.log(response);
            setIsModalOpen(true); // Mở modal hiển thị thông báo
            resetForm(); // Gọi hàm resetForm để xóa thông tin trong form
            //setShowInfo(true); // Thiết lập showInfo thành true khi gọi API thành công
        })
        .catch(error => {
            // Xử lý lỗi (nếu có)
            console.error(error);
        });
    };
    
    const resetForm = () => {
        setSoPhong('');
        setSoLuong('');
        setNgayBD('');
        setNgayKetThuc('');
        setGhiChu('');
    };
    
    const closeModal = () => {
        setIsModalOpen(false); // Đóng modal
    };


    return (
        <div className='renting'>
            <div className='renting_customer'>
                <div className='renting_title'>Khách đặt phòng</div>
                <form className='form_customer_info'>
                    <div className='input_group'>
                        <label id='input_label'>Họ tên*</label>
                        <input required type='text' id='name' name='HoTen' placeholder='Nguyễn Thị A'/>
                    </div>
                    <div className='row'>
                        <div className='input_group'>
                            <label id='input_label'>CCCD*</label>
                            <input required placeholder='123456789012'/>
                        </div>
                        <div className='input_group'>
                            <label id='input_label'>Giới tính*</label>
                            <select id='gender' required defaultValue={''}>
                                <option value='' disabled hidden>--Chọn--</option>
                                <option value='0'>Nam</option>
                                <option value='1'>Nữ</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input_group'>
                            <label id='input_label'>Quốc tịch*</label>
                            <select id='nationality' required defaultValue={''}>
                                <option value='' disabled  hidden>--Chọn-- </option>
                                <option value='VNG'>Việt Nam</option>
                                <option value='CHN'>Trung Quốc</option>
                            </select>
                        </div>
                        <div className='input_group'>
                            <label id='input_label'>Loại khách*</label>
                            <select id='customer_type' required defaultValue={''}>
                                <option value='' disabled hidden>--Chọn-- </option>
                                <option value='NoiDia'>Nội địa</option>
                                <option value='NuocNgoai'>Nước ngoài</option>
                            </select>
                        </div>
                    </div>
                    <div className='input_group'>
                        <label id='input_label'>SĐT</label>
                        <input placeholder='0123456789'/>
                    </div>
                    <div className='input_group'>
                        <label id='input_label'>Email</label>
                        <input placeholder='abc@gmail.com'/>
                    </div>
                    <div className='input_group'>
                        <label id='input_label'>Địa chỉ</label>
                        <input name='DiaChi' placeholder='TPHCM, Hà Nội, ...'/>
                    </div>
                </form>
            </div>

            <div className='renting_room'>
                <div className='renting_title'>Thông tin đặt phòng</div>
                <form className='form_renting_info'>
                    <div className='row'>
                        <button className='btn_huy_thue'>Hủy thuê phòng</button>
                        <button className='btn_nhan_phong'>Nhận phòng</button>
                    </div>
                    <div className='row_2'>
                        <input className='ngayNhan' type='date' data-date-format="DD MM YYYY"/>
                        <text className='arrow'>&#8594;</text>
                        <input className='ngayTra' type='date' data-date-format="DD MM YYYY"/>
                        <input className='tgian_soDem' value={'2 đêm'}/>
                    </div>
                    <div className='row'>
                        <div className='input_group'>
                            <label id='input_label'>Phòng*</label>
                            <select id='room_number' required defaultValue={''}>
                                <option value='' disabled  hidden>--Chọn-- </option>
                                <option value='VNG'>101</option>
                                <option value='CHN'>102</option>
                            </select>
                        </div>
                        <div className='input_group'>
                            <label id='input_label'>Số người</label>
                            <input name='soNguoi' type='number' min='1' defaultValue={'1'}/>
                        </div>
                    </div>
                    <div className='input_group'>
                        <label id='input_label'>Ghi chú</label>
                        <input name='ghiChu' type='text' defaultValue={''}/>
                    </div>
                </form>
            </div>
            {/* <h1 className="text-Taophieu">THÊM PHIẾU THUÊ</h1>
            <div className="form-field">
                <div id="col1"><label htmlFor="name" className="form-label">Số lượng</label>
                    <input 
                        type="text" 
                        className="form-input col-left"
                        value={soLuong}
                        onChange={e => setSoLuong(e.target.value)}/>
                    <div className="sp">
                        <label htmlFor="name" className="form-label">Số phòng</label>
                        <input 
                            type="text" 
                            className="form-input col-left"
                            value={soPhong}
                            onChange={e => setSoPhong(e.target.value)}/></div>
                    <div className="mpt">
                        <label htmlFor="name" className="form-label">Ghi chú</label>
                        <input 
                            type="text" 
                            className="form-input col-left"
                            value={ghiChu}
                            onChange={e => setGhiChu(e.target.value)}/></div>
                    
                </div>

                <div id="col2"><label htmlFor="name" className="form-label">Ngày b.đầu</label>
                    <input 
                        type="text" 
                        className="form-input col-right"
                        value={ngayBD}
                        onChange={e => setNgayBD(e.target.value)}/>
                    <div className="sp">
                        <label htmlFor="name" className="form-label">Ngày k.thúc</label>
                        <input 
                            type="text" 
                            className="form-input col-right"
                            value={ngayKetThuc}
                            onChange={e => setNgayKetThuc(e.target.value)}/></div>
                </div>
            </div>
            <div className="Menu-frame"></div>
            <div className="Avatar-frame"></div>
            <button className="btn" onClick={handleLapPhieuClick}>Lập phiếu</button>
            <Modal 
                isOpen={isModalOpen} 
                onRequestClose={closeModal}
                className="small-modal"
            >
                <h2>Lập phiếu thành công!</h2>
                <button onClick={closeModal}>OK</button>
            </Modal>
            {nguoiThue.length > 0 && (
                <div className="info-container">
                    <h3>Phiếu thuê hiện tại</h3>
                    <p>Số lượng người: {nguoiThue[nguoiThue.length - 1].soLuong}</p>
                    <p>Phòng: {nguoiThue[nguoiThue.length - 1].soPhong}</p>
                    <p>Ngày bắt đầu: {nguoiThue[nguoiThue.length - 1].ngayBD}</p>
                    <p>Ngày kết thúc: {nguoiThue[nguoiThue.length - 1].ngayKetThuc}</p>
                    <p>Ghi chú: {nguoiThue[nguoiThue.length - 1].ghiChu}</p>
                </div>
            )} */}
        </div>
    )
}

export default Renting

/*          <div>
                {nguoiThue.map((nguoi, index) => (
                <div key={index} className="info-container">
                    <h3>Thông tin người thuê {index + 1}:</h3>
                    <p>Số lượng: {nguoi.soLuong}</p>
                    <p>Số phòng: {nguoi.soPhong}</p>
                    <p>Ngày bắt đầu: {nguoi.ngayBD}</p>
                    <p>Ngày kết thúc: {nguoi.ngayKetThuc}</p>
                    <p>Ghi chú: {nguoi.ghiChu}</p>
                </div>
                ))}
            </div>
 */
/*          {nguoiThue.length > 0 && (
                <div className="info-container">
                    <h3>Phiếu thuê hiện tại</h3>
                    <p>Số lượng người: {nguoiThue[nguoiThue.length - 1].soLuong}</p>
                    <p>Phòng: {nguoiThue[nguoiThue.length - 1].soPhong}</p>
                    <p>Ngày bắt đầu: {nguoiThue[nguoiThue.length - 1].ngayBD}</p>
                    <p>Ngày kết thúc: {nguoiThue[nguoiThue.length - 1].ngayKetThuc}</p>
                    <p>Ghi chú: {nguoiThue[nguoiThue.length - 1].ghiChu}</p>
                </div>
            )} */