import './room.css'
import React from 'react'
import Textfield from '@atlaskit/textfield'

export default function Room() {
  return (

    <div id='main'>
      {/* Thanh các tác vụ */}
      <div className='component'></div>
      <div className='search_bar'></div>
      <div className='user'></div>

      
      <Textfield
        name="search_for_room"
        placeholder="Nhập mã phòng ..."
      ></Textfield>
      

      <div id='sd'>Sơ đồ phòng</div>
      {/* Sơ đồ các phòng */}
      <div id='room'>
          <div class='box_room empty' id='r_101'>
            <div class='text_box' id='text'>101(A)(Trống)</div>
            <div id='ok'></div>
          </div>
          <div class='box_room full' id='r_102'>
            <div class='text_box' id='text'>102(B)(Đã đặt)</div>
            <div id='x'></div>
          </div>
          <div class='box_room full' id='r_103'>
            <div class='text_box' id='text'>103(C)(Đã đặt)</div>
            <div id='x'></div>
          </div>
          <div class='box_room full' id='r_201'>
            <div class='text_box' id='text'>201(A)(Đã đặt)</div>
            <div id='x'></div>
          </div>
          <div class='box_room empty' id='r_202'>
            <div class='text_box' id='text'>202(B)(Trống)</div> 
            <div id='ok'></div>

          </div>
          <div class='box_room empty' id='r_203'>
            <div class='text_box' id='text'>203(C)(Trống)</div>
            <div id='ok'></div>

          </div>
          <div class='box_room empty' id='r_301'>
            <div class='text_box' id='text'>301(A)(Trống)</div>
            <div id='ok'></div>

          </div>
          <div class='box_room full' id='r_302'>
            <div class='text_box' id='text'>302(B)(Đã đặt)</div>
            <div id='x'></div>
          </div>
          <div class='box_room full' id='r_303'>
            <div class='text_box' id='text'>303(C)(Đã đặt)</div>
            <div id='x'></div>
          </div>
      </div>

      <div className='search_room'>
          {/* Bảng tìm kiếm */}
          <div id='tc'>Tra cứu phòng</div>
          
          <div id='search_bt'>
            <div id='search_img'></div>
          </div>
          <div id='room_table'>
              <div class='table_tag' id='mp'>Mã phòng</div>
              <div class='table_tag' id='lp'>Loại phòng</div>
              <div class='table_tag' id='dg'>Đơn giá</div>
              <div class='table_tag' id='tt'>Tình trạng</div>

              {/* Dòng 1 */}
              <div class='room_box'>
                <div class='mp_value'>
                  <div id='text'>101</div>
                </div>
                <div class='lp_value'>
                  <div id='text'>A</div>
                </div>
                <div class='dg_value'>
                  <div id='text'>150.000đ</div>
                </div>
                <div class='tt_value'>
                  <div id='text'>Trống</div>
                </div>
              </div>
          </div>
      </div>
      <div className='room_inf'></div>
      
    </div>
  )
}

