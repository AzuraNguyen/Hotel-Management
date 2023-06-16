import React, {useState} from 'react';
import {useEffect} from 'react';
import './customer.css';


function Customer() {
    // Add new customer
    const [hoTen, setHoTen] = useState('');
    const [cccd, setCccd] = useState('');
    const [gioiTinh, setGioiTinh] = useState('');
    const [quocTich, setQuocTich] = useState('');
    const [loaiKhach, setLoaiKhach] = useState('');
    const [sdt, setSdt] = useState('');
    const [email, setEmail] = useState('');
    const [diaChi, setDiaChi] = useState('');

    // Customer table
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Customer filter search
    // const searchInput = document.getElementById("search_box").innerHTML;
    // const searchFilter = document.getElementById("filter_customer").innerHTML;

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/customer/')
            .then(response=>response.json())
            .then((data)=>{
                setIsLoaded(true);
                setItems(data);},
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
        )
    }, [])

    // Thêm dòng dữ liệu tự động
    const customerData = items;
    const rows = customerData.map((customer=>(
        <tr >
            <td>{customer.cccd}</td>
            <td>{customer.hoTen}</td>
            <td>{customer.gioiTinh}</td>
            <td>{customer.quocTich}</td>
            <td>{customer.sdt}</td>
        </tr>
    )));

    
    function filter_customer_table() {
        const inputStr = searchInput;
        document.querySelectorAll(".table_cusomters tr:not(.header)").forEach((tr)=> {
            const anyMatch = [...tr.children]
            .some(td => td.textContent.includes(inputStr));
            if (anyMatch) tr.style.removeProperty('display');
            else tr.style.display = 'none';
        })
    };
    

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
        return (
            <div className="content">
                <div className='manage_customers'>
                    <div className="list_customers">
                        <div className="title_table_customers">
                            Danh sách khách hàng
                        </div>
                        <div className='search_wrapper'>
                            <div className='search'>
                                <input 
                                    type='text' 
                                    placeholder='Nhập tìm kiếm' 
                                    id='search_box'
                                    />
                            </div>
                            <select id='filter_customer' defaultValue={''} placeholder='--Bộ lọc--'>
                                {/* <option value='' disabled hidden>--Bộ lọc--</option> */}
                                <option value=''>-</option>
                                <option value='CCCD'>CCCD</option>
                                <option value='name'>Họ tên</option>
                                <option value='SDT'>SDT</option>
                            </select>
                            <div className='search_button'>
                                <button id='search_btn' >Tìm kiếm</button>
                                {/* onClick={filter_customer_table()} */}
                            </div>
                        </div>
                        <div className='table_customers_wrapper'>
                            <table className='table_customers'>
                                <thead>
                                    <tr>
                                        <th width='20%'>CCCD</th>
                                        <th width='40%'>Họ tên</th>
                                        <th width='10%'>Giới tính</th>
                                        <th width='10%'>Quốc tịch</th>
                                        <th width='20%'>SDT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows}
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
                            <button className='btn_add_customer'>
                                Thêm
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};


// const Customer = () => {
//     const [customers, setCusomters] = useState(data);

//     function fetchData(){
//         fetch('https://127.0.0.1:8000')
//         .then(response=>response.json())
//         .then((data)=>{
//             this.setState({
//                 data:data
//             });
//         });
//     }

//     return (
//         <div className="content">
//             <div className='manage_customers'>
//                 <div className="list_customers">
//                     <div class="title_table_customers">
//                         Danh sách khách hàng
//                     </div>
//                     <div className='search_wrapper'>
//                         <div className='search'>
//                             <input type='text' placeholder='Nhập tìm kiếm' id='search_box'/>
//                         </div>
//                         <select id='filter_customer'>
//                             <option value='' disabled selected hidden>--Bộ lọc--</option>
//                             <option value=''>-</option>
//                             <option value='CCCD'>CCCD</option>
//                             <option value='name'>Họ tên</option>
//                             <option value='SDT'>SDT</option>
//                         </select>
//                         <div className='search_button'>
//                             <button id='search_btn'>Tìm kiếm</button>
//                         </div>
//                     </div>
//                     <div className='table_customers_wrapper'>
//                         <table className='table_customers'>
//                             <thead>
//                                 <th width='20%'>CCCD</th>
//                                 <th width='40%'>Họ tên</th>
//                                 <th width='10%'>Giới tính</th>
//                                 <th width='10%'>Quốc tịch</th>
//                                 <th width='20%'>SDT</th>
//                             </thead>
//                             <tbody>
//                                 {customers.map((customer)=>(
//                                     <tr>
//                                         <td>{customer.CCCD}</td>
//                                         <td>{customer.name}</td>
//                                         <td>{customer.gender}</td>
//                                         <td>{customer.nationality}</td>
//                                         <td>{customer.number}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 <div className='add_customers_area'>
//                     <div className='title_add_customers'>
//                         Thêm khách hàng
//                     </div>
//                     <form className='form_add_customer'>
//                         <div className='input_group'>
//                             <label id='input_label'>Họ tên*</label>
//                             <input required type='text' id='name' name='HoTen' placeholder='Nguyễn Thị A'/>
//                         </div>
//                         <div className='row'>
//                             <div className='input_group'>
//                                 <label id='input_label'>CCCD*</label>
//                                 <input required placeholder='123456789012'/>
//                             </div>
//                             <div className='input_group'>
//                                 <label id='input_label'>Giới tính*</label>
//                                 <select id='gender' required>
//                                     <option value='' disabled selected hidden>--Chọn--</option>
//                                     <option value='0'>Nam</option>
//                                     <option value='1'>Nữ</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className='row'>
//                             <div className='input_group'>
//                                 <label id='input_label'>Quốc tịch*</label>
//                                 <select id='nationality' required>
//                                     <option value='' disabled selected hidden>--Chọn-- </option>
//                                     <option value='VNG'>Việt Nam</option>
//                                     <option value='CHN'>Trung Quốc</option>
//                                 </select>
//                             </div>
//                             <div className='input_group'>
//                                 <label id='input_label'>Loại khách*</label>
//                                 <select id='customer_type' required>
//                                     <option value='' disabled selected hidden>--Chọn-- </option>
//                                     <option value='NoiDia'>Nội địa</option>
//                                     <option value='NuocNgoai'>Nước ngoài</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className='input_group'>
//                             <label id='input_label'>SĐT</label>
//                             <input placeholder='0123456789'/>
//                         </div>
//                         <div className='input_group'>
//                             <label id='input_label'>Email</label>
//                             <input placeholder='abc@gmail.com'/>
//                         </div>
//                         <div className='input_group'>
//                             <label id='input_label'>Địa chỉ</label>
//                             <input name='DiaChi' placeholder='TPHCM, Hà Nội, ...'/>
//                         </div>
//                         <button className='btn_add_customer'>
//                             Thêm
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// };

export default Customer;