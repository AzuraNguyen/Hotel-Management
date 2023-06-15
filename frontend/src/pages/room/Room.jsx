import './room.css'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Rooms from './source/rooms.js';
import Room_type from './source/room_type.js';



export default function Room() {

  const mp_value = document.getElementById('mp_value')
  const type_value = document.getElementById('type_value')
  const price_value = document.getElementById('price_value')
  const status_value = document.getElementById('status_value')

  const room_list = document.getElementsByTagName('button');

  //Màu chia loại phòng theo trạng thái
  const empty_room_color = 'white';
  const full_room_color = 'gray';

  const Rooms_API = [];

  // useEffect(() => {
  //   // Gọi API Django 
  //   fetch('your-api-endpoint', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(response => {
  //       // Xử lý kết quả trả về từ API
  //       Rooms_API = response.data;
  //     })
  //     .catch(error => {
  //       // Xử lý lỗi (nếu có)
  //       console.error(error);
  //     });
  // })

  function search_click(room_number){
    let is_exist = false;
    for(let i = 0; i < Rooms.length; i++){
      if(Rooms[i].num == room_number){
        is_exist = true;
        mp_value.innerText = room_number;
        type_value.innerText = Rooms[i].type;
        status_value.innerText = Rooms[i].status;
        for(let j = 0; j < Room_type.length; j++)
        {
          if(Room_type[j].type == Rooms[i].type){
            price_value.innerText = Room_type[j].price;
          }
        }
      }
    }
    if(!is_exist){
      alert("Nhập lại mã phòng để kiểm tra");
    }
  }
  const room_click = event => {
    let id = event.currentTarget.id;

    for(let i = 0; i < Rooms.length; i++){
      if(id.includes(Rooms[i].num)){
        setRoomType(Rooms[i].type);
        setRoomDC(Rooms[i].day_come);
        setRoomDG(Rooms[i].day_go);
        setRoomStatus(Rooms[i].status);

        for(let j = 0; j < Room_type.length; j++)
      {
        if(Room_type[j].type == Rooms[i].type){
          setRoomPrice(Room_type[j].price);
        }
      }
      }
    }
    for(let j = 0; j < rooms_num.length; j++){
      if(id.includes(rooms_num[j])){
        setRoomNum(rooms_num[j])
      }
    }
    setBRC(!box_room_isClicked);
  }

  function rent_click(id){
    alert('Đã bấm đặt phòng ' + id);
  }

  useEffect(() => {
    for(let i = 0; i < Rooms.length; i++){
      if(Rooms[i].status == 'Đã đặt'){
        for(let button_room of room_list){
          if(button_room.id == Rooms[i].num){
            button_room.style.background = full_room_color;
            rooms_status[i]('Đã đặt');
            // button_room.style.
          }
        }
      }
      else if(Rooms[i].status == 'Trống'){
        for(let button_room of room_list){
          if(button_room.id == Rooms[i].num){
            button_room.style.background = empty_room_color;
            rooms_status[i]('Trống');
            // button_room.style.
          }
        }
      }
    }
  })

  //Mã phòng của các phòng
  const rooms_num = ['101', '102', '103', '201', '202', '203', '301', '302', '303']

  const [room_number, setRoomNumber] = useState('');


  //Biến dùng cho trạng thái các phòng
  const [r_101_status, set101Status] = useState('Trống');
  const [r_102_status, set102Status] = useState('Trống');
  const [r_103_status, set103Status] = useState('Trống');
  const [r_201_status, set201Status] = useState('Trống');
  const [r_202_status, set202Status] = useState('Trống');
  const [r_203_status, set203Status] = useState('Trống');
  const [r_301_status, set301Status] = useState('Trống');
  const [r_302_status, set302Status] = useState('Trống');
  const [r_303_status, set303Status] = useState('Trống');

  const rooms_status = [set101Status, set102Status, set103Status, set201Status, set202Status, set203Status, set301Status, set302Status, set303Status];

  // Biến dùng cho thông tin phòng
  const [room_num, setRoomNum] = useState('101'); //Mã phòng
  const [room_type, setRoomType] = useState('A'); //Loại phòng
  const [room_adult, setRoomAdult] = useState('2'); //Số người lớn
  const [room_bb, setRoomBb] = useState('2'); //Số trẻ em
  const [room_price, setRoomPrice] = useState('150.000'); //Đơn giá mặc định
  const [room_pp, setRoompp] = useState('2'); //Số người thuê
  const [room_day_come, setRoomDC] = useState('xx/xx/xxxx'); //Ngày đến
  const [room_day_go, setRoomDG] = useState('xx/xx/xxxx'); //Ngày đi
  const [room_status, setRoomStatus] = useState('Trống');

  //Biến kiểm tra các phòng được nhấp vào hay chưa
  const [box_room_isClicked, setBRC] = useState('false');
  return (
    
    <div id='main'>
      {/* Thanh các tác vụ */}
      {/* <div className='component'></div>
      <div className='search_bar'></div>
      <div className='user'></div> */}

      <div id='sd'>Sơ đồ phòng</div>
      {/* Sơ đồ các phòng */}
      <div id='room'>
          <button 
            class='box_room' 
            id='r_101'
            onClick={room_click}
          >
              <div class='text_box room_text'>101(A) ({r_101_status})</div>
          </button>
          <button 
            class='box_room' 
            id='r_102'
            onClick={room_click}
          >
              <div class='text_box room_text'>102(B) ({r_102_status})</div>
          </button>
          <button 
            class='box_room' 
            id='r_103'
            onClick={room_click}
          >
              <div class='text_box room_text'>103(C) ({r_103_status})</div>
          </button>
          <button 
            class='box_room' 
            id='r_201'
            onClick={room_click}
          >
              <div class='text_box room_text'>201(A) ({r_201_status})</div>
          </button>
          <button 
            class='box_room' 
            id='r_202'
            onClick={room_click}
          >
              <div class='text_box room_text'>202(B) ({r_202_status})</div> 
          </button>
          <button 
            class='box_room' 
            id='r_203'
            onClick={room_click}
          >
              <div class='text_box room_text'>203(C) ({r_203_status})</div>
          </button>
          <button 
            class='box_room' 
            id='r_301'
            onClick={room_click}
          >
              <div class='text_box room_text'>301(A) ({r_301_status})</div>
          </button>
          <button 
            class='box_room' 
            id='r_302'
            onClick={room_click}
          >
              <div class='text_box room_text'>302(B) ({r_302_status})</div>
          </button>
          <button 
            class='box_room' 
            id='r_303'
            onClick={room_click}
          >
              <div class='text_box room_text'>303(C) ({r_303_status})</div>
          </button>
      </div>

      {box_room_isClicked && <div id='room_inf_box'>
        <div className='infor_header' id='header_1'>
         Thông tin phòng {room_num}
        </div>
        <div className='line' id='line_1'></div>
        <div className='inf_box' id='default'>
          <div className='inf_text' id='i_type'>Loại: {room_type}</div>
          <div className='inf_text' id='i_adult'>Người lớn: {room_adult}</div>
          <div className='inf_text' id='i_bb'>Trẻ em: {room_bb}</div>
          <div className='inf_text' id='i_price'>Đơn giá: {room_price}</div>
        </div>
        <div className='line' id='line_2'></div>
        <div className='infor_header' id='header_2'>Hiện tại</div>
        <div className='inf_box' id='present'>
          <div className='inf_text' id='i_pp'>Số người thuê: {room_pp}</div>
          <div className='inf_text' id='i_day_come'>Ngày đến: {room_day_come}</div>
          <div className='inf_text' id='i_day_go'>Ngày đi: {room_day_go}</div>
          <div className='inf_text' id='i_serv'>Dịch vụ: Không</div>
          <div className='inf_text' id='i_status'>Trạng thái: {room_status}</div>
        </div>
        <button 
          id='rent_bt'
          onClick={() => {rent_click(room_num)}}
        >Đặt phòng</button>
      </div>}
      
      <div className='search_room'>
          {/* Bảng tìm kiếm */}
          <div id='tc'>Tra cứu phòng</div>
          <input
            name='room_searching'
            id='tcp'
            value={room_number}
            onChange={e => setRoomNumber(e.target.value)}
            />
          <div id='search_bt'>
            <button 
              id='search_img'
              onClick={() => {search_click(room_number)}}
              
            ></button>
          </div>
          
          <div id='room_table'>
              <div class='table_tag' id='mp'>Mã phòng</div>
              <div class='table_tag' id='type'>Loại phòng</div>
              <div class='table_tag' id='price'>Đơn giá</div>
              <div class='table_tag' id='status'>Tình trạng</div>

              {/* Dòng 1 */}
              <div class='room_box'>
                <div class='mp_box room_text'>
                  <div id='mp_value'>101</div>
                </div>
                <div class='type_box room_text'>
                  <div id='type_value'>A</div>
                </div>
                <div class='price_box room_text'>
                  <div id='price_value'>150.000đ</div>
                </div>
                <div class='status_box room_text'>
                  <div id='status_value'>Trống</div>
                </div>
              </div>
          </div>
      </div>
      
      
    </div>
    
  )
}

