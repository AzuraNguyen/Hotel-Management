import './login.css'
import { useState } from 'react';
import ListUser from './data/resource';

let isLogined = false;

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
        isLogined = true;
    }
    else{
        alert("Tài khoản hoặc mật khẩu không đúng");
    }
    
}

function is_clicked(){
    console.log('click');
}


const Login = () => {
    const [user, setUser] = useState('  Nhập tài khoản');
    const [password, setPassWord] = useState('  Nhập mật khẩu');


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
                            onClick={is_clicked}>
                        Quên mật khẩu?
                    </button>
                    <button id="login_button"
                            onClick={() => {login_click(user, password)}}>
                        <div id="bt">
                            Đăng nhập
                        </div>
                    </button>
                    <div id="miss">
                        Don't have any account? 
                        <button id="sign_up"
                                onClick={is_clicked}>
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
export {isLogined}
