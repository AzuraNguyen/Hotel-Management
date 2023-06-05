import './login.css'

const Login = () => {
  return (
    <div>
        <div id="box_right">
            <div class="box_login">
                <h1>GROUP 9 ACCESS</h1>
                <div id="P">Vui lòng điền thông tin của bạn để truy cập vào tài khoản của bạn</div>
                
                <div id="em">Tên đăng nhập</div>
                <textarea name="email" id="text_em" cols="30" rows="1">Điền tài khoản của bạn</textarea>
                
                <div id="pw">Mật khẩu</div>
                <textarea name="password" id="text_pw" cols="30" rows="1">Điền mật khẩu của bạn</textarea>
                
                <div id="fg">Quên mật khẩu?</div>
                <div id="login_button">
                    <div id="bt">
                        Đăng nhập
                    </div>
                </div>
                <div id="gg_button">
                    <div id="gg">
                        Đăng nhập bằng google
                    </div>
                </div>
                <div id="miss">Don't have any account? Sign up</div>
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
