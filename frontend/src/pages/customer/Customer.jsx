import './customer.css';

const Customer = () => {
  return (
    <div className="content">
        <div className='manage_customers'>
            <div className="list_customers">
                <div class="title_table_customers">
                    Danh sách khách hàng
                </div>
                <div className='search_wrapper'>
                    <div className='search'>
                        <input type='text' placeholder='Nhập tìm kiếm' id='search_box'/>
                    </div>
                    <select id='filter_customer'>
                        <option value='' disabled selected hidden>--Bộ lọc--</option>
                        <option value=''>-</option>
                        <option value='CCCD'>CCCD</option>
                        <option value='name'>Họ tên</option>
                        <option value='SDT'>SDT</option>
                    </select>
                    <div className='search_button'>
                        <button id='search_btn'>Tìm kiếm</button>
                    </div>
                </div>
                <div className='table_customers_wrapper'>
                    <table className='table_customers'>
                        <thead>
                            <th width='20%'>CCCD</th>
                            <th width='40%'>Họ tên</th>
                            <th width='10%'>Giới tính</th>
                            <th width='10%'>Quốc tịch</th>
                            <th width='20%'>SDT</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>123456789012</td>
                                <td>Nguyễn Anh Tuấn</td>
                                <td>Nam</td>
                                <td>Việt Nam</td>
                                <td>0123456789</td>
                            </tr>
                            <tr>
                                <td>123456789012</td>
                                <td>Nguyễn Anh Tuấn</td>
                                <td>Nam</td>
                                <td>Việt Nam</td>
                                <td>0123456789</td>
                            </tr>
                            <tr>
                                <td>123456789012</td>
                                <td>Nguyễn Anh Tuấn</td>
                                <td>Nam</td>
                                <td>Việt Nam</td>
                                <td>0123456789</td>
                            </tr>
                            <tr>
                                <td>123456789012</td>
                                <td>Nguyễn Anh Tuấn</td>
                                <td>Nam</td>
                                <td>Việt Nam</td>
                                <td>0123456789</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='add_customers_area'>
                <div className='title_add_customers'>
                    Thêm khách hàng
                </div>
                <form className='form_add_customer'>
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
                            <select id='gender' required>
                                <option value='' disabled selected hidden>--Chọn--</option>
                                <option value='0'>Nam</option>
                                <option value='1'>Nữ</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input_group'>
                            <label id='input_label'>Quốc tịch*</label>
                            <select id='nationality' required>
                                <option value='' disabled selected hidden>--Chọn-- </option>
                                <option value='VNG'>Việt Nam</option>
                                <option value='CHN'>Trung Quốc</option>
                            </select>
                        </div>
                        <div className='input_group'>
                            <label id='input_label'>Loại khách*</label>
                            <select id='customer_type' required>
                                <option value='' disabled selected hidden>--Chọn-- </option>
                                <option value='NoiDia'>Nội địa</option>
                                <option value='NuocNgoai'>Nước ngoài</option>
                            </select>
                        </div>
                    </div>
                    <div className='input_group'>
                        <label id='input_label'>SĐT</label>
                        <input placeholder=''/>
                    </div>
                    <div className='input_group'>
                        <label id='input_label'>Email</label>
                        <input placeholder='abc@gmail.com'/>
                    </div>
                    <div className='input_group'>
                        <label id='input_label'>Địa chỉ</label>
                        <input name='DiaChi' placeholder=''/>
                    </div>
                    <button className='btn_add_customer'>
                        Thêm
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
};

export default Customer;