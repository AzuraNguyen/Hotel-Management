import './customer.css';

const Customer = () => {
  return (
    <div className="content">
        {/* <div class="form_nhap">
            <form action="" class="form_themkhach">
                <div class="title_themkhach">
                    <div class="icon_themkhach">
                    </div>
                    <div class="text_themkhach">
                        Thêm khách mới
                    </div>
                </div>
                <div class="container_themkhach">
                    <div class="left_themkhach">
                        <div class="nhap_cccd">
                            <div class="title_cccd">
                                Nhập CCCD
                            </div>
                            <input type="text"/>
                        </div>
                        <div class="nhap_hoten">
                            <div class="title_hoten">
                                Nhập họ tên
                            </div>
                            <input type="text"/>
                        </div>
                        <div class="nhap_sodt">
                            <div class="title_sodt">
                                Nhập số ĐT
                            </div>
                            <input type="text"/>
                        </div>
                        <div class="nhap_diachi">
                            <div class="title_diachi">
                                Nhập địa chỉ
                            </div>
                            <input type="text"/>
                        </div>
                    </div>
                    <div class="right_themkhach">
                        <div class="nhap_email">
                            <div class="title_email">
                                Nhập email
                            </div>
                            <input type="text"/>
                        </div>
                        <div class="nhap_gioitinh">
                            <div class="title_gioitinh">
                                Nhập giới tính
                            </div>
                            <input type="text"/>
                        </div>
                        <div class="nhap_quoctich">
                            <div class="title_quoctich">
                                Nhập quốc tịch
                            </div>
                            <input type="text"/>
                        </div>
                        <div class="nhap_loaikhach">
                            <div class="title_loaikhach">
                                Nhập loại khách
                            </div>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
            </form>
        </div> */}
        <div className='manage_customers'>
            <div className="list_customers">
                <div class="title_table_customers">
                    Danh sách khách hàng
                </div>
                <div className='search_wrapper'>
                    <div className='search'>
                        <input type='text' placeholder='Nhập tìm kiếm' id='search_box'/>
                    </div>
                    <div className='select_categories'>
                        <div className='categories_box'>
                            <input placeholder='CCCD' id='cate_box'/>
                        </div>
                        {/* <ul className='categories_options'>
                            <li>CCCD</li>
                            <li>Họ tên</li>
                            <li>SĐT</li>
                        </ul> */}
                    </div>
                    <div className='search_button'>
                        Tìm kiếm
                    </div>
                </div>
                {/* <div className='table_customers_wrapper'>
                    <table className='table_customers'>
                        <thead>
                            <th width='20%'>CCCD</th>
                            <th width='40%'>Họ tên</th>
                            <th width='10%'>Giới tính</th>
                            <th width='10%'>Quốc tịch</th>
                            <th width='20%'>SĐT</th>
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
                    </div> */}
            </div>
            <div className='add_customers_area'>
                <div className='title_add_customers'>
                    Thêm khách hàng
                </div>
                <div className='form_add_customers'></div>
            </div>
        </div>
    </div>
  )
};

export default Customer;