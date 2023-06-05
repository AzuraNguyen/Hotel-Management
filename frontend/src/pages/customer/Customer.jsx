import './customer.css'

const Customer = () => {
  return (
    <div class="container">
        {/* <div class="sidebar">
            <div class="avata">
                <div class="container_avata">
                    <img src={require("./avata.png" )}/>
                </div>
            </div>
            <div class="datphong">
                <div class="container_dp_img">
                <img src={require("./taodatphong.png" )}/>
                </div>
                <div class="container_dp_text">
                    <div class="dp_text">
                        Tạo đặt phòng
                    </div>
                </div>
            </div>
            <div class="thongke">
                <div class="container_tk_img">
                    <img src={require("./thongke.png" )}/>
                    </div>
                    <div class="container_tk_text">
                        <div class="tk_text">
                            Thống kê
                        </div>
                    </div>
            </div>
            <div class="sodophong">
                <div class="container_sdp_img">
                    <img src={require("./sodophong.png" )}/>
                    </div>
                    <div class="container_sdp_text">
                        <div class="sdp_text">
                            Sơ đồ phòng
                        </div>
                    </div>
            </div>
            <div class="thanhtoan">
                <div class="container_tt_img">
                    <img src={require("./thanhtoan.png" )}/>
                    </div>
                    <div class="container_tt_text">
                        <div class="tt_text">
                            Thanh toán
                        </div>
                    </div>
            </div> 
            <div class="quanlykhach">
                <div class="container_qlk_img">
                    <img src={require("./quanlykhach.png" )}/>
                    </div>
                    <div class="container_qlk_text">
                        <div class="qlk_text">
                            Quản lý khách
                        </div>
                    </div>
            </div>
            <div class="capnhat">
                <div class="container_cn_img">
                    <img src={require("./capnhatquydinh.png" )}/>
                    </div>
                    <div class="container_cn_text">
                        <div class="cn_text">
                           Cập nhật quy định
                        </div>
                    </div>
            </div>
            <div class="text">
                <div class="container_text">
                    <img src={require("./text.png" )}/>
                </div>
            </div>
        </div> */}
        <div class="content">
            <div class="form_nhap">
                <div class="search">
                    <div class="icon_search">
                    </div>
                    <form action="" class="text_search">
                        <input type="text" placeholder="Search..."/>

                    </form>
                </div>
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

                <div class="danhsach">
                    <div class="title_danhsach">
                        <div class="text_danhsach">
                            Danh sách khách hàng hiện tại
                        </div>
                    </div>
                    <div class="box_danhsach">

                    </div>
                </div>
                <div class="themkhach_bt">
                    <div class="icon_bt">
                    </div>
                    <div class="text_bt">
                        Thêm khách
                    </div>
                </div>
            </div>
            <div class="avata_user">
                <div class="container_user">
                    <div class="avt">
                        <img src={require("./user.png" )}/>
                    </div>
                    <div class="name">
                        <div class="name_mini">
                            Group09
                        </div>
                        <div class="icon">
                        </div>
                    </div>
                    <div class="em">
                        <div class="ema">
                            group09@email.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Customer