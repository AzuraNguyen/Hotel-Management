import './login.css'
import { useEffect, useState } from 'react';

const Login = () => {
    const [user, setUser] = useState('  Nhập tài khoản');
    const [password, setPassWord] = useState('  Nhập mật khẩu');
    const [ListUser, setListUser] = useState('');
    const [data, setData] = useState('');

    
    useEffect(() => {
        const interval = setInterval(() => {
            // Gọi API Django để lấy dữ liệu
            fetch('http://127.0.0.1:8000/api/login/', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
                setListUser(data);
            })
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error(error);
            });
        }, 5000);   
        return () => clearInterval(interval);
        
    }, [])
    
    function login_click(user, password){
        
        //Biến kiểm tra tồn tại trong dữ liệu
        var is_exist = false;
        
        
        for(let i = 0; i < ListUser.length; i++){
            if(user == ListUser[i].user && password == ListUser[i].password){
                is_exist = true;
            }
        }
        if(is_exist){
            alert("Đăng nhập thành công");
            window.location.href = '/room'; // Chuyển trang nếu đăng nhập thành công
        }
        else{
            alert("Tài khoản hoặc mật khẩu không đúng");
        }
    }
    
    function forget_pw_clicked(){
        console.log("Xin lỗi hành động này chưa được hỗ trợ");
    }
    
    function signup_clicked(){
        console.log("Xin lỗi hành động này chưa được hỗ trợ");
    }

    return (
        <div className='login'>
            <div id="box_right">
                <div className="box_login">
                    <h1>GROUP 9 ACCESS</h1>
                    <div id="P">Vui lòng điền thông tin của bạn để truy cập vào tài khoản của bạn</div>
                    
                    <div id="em">Tên đăng nhập</div>
                    <input 
                        name="email" 
                        id="text_em"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    
                    
                    <div id="pw">Mật khẩu</div>
                    <input 
                        name="email" 
                        id="text_pw"
                        value={password}
                        onChange={e => setPassWord(e.target.value)}
                    />
                    
                    <button id="fg"
                            onClick={forget_pw_clicked}>
                        Quên mật khẩu?
                    </button>
                    <button id="login_button"
                            onClick={() => {login_click(user, password)}}>
                        <div id="bt">
                            Đăng nhập
                        </div>
                    </button>
                    <div id="su">
                        Don't have any account? 
                        <button id="sign_up"
                                onClick={signup_clicked}>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
            
            <div id="box_left">
                <div id="img_box">
                    <div id="img"></div>
                </div>
            </div>
        </div>
    )
}


export default Login