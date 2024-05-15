import React  from "react";
const LoginForm =({ isShowLogin })=>{


    return(
        <div className={`${!isShowLogin ? "active" : ""} show`}>
            <div>
                <div>
                    <form>
                        
                        

                        <div class="box166" >
                            <h2>Login form</h2>
User name or Email id: <br/><input type="text" class="text"  />  <br/><br/>
Password: <br/><input type="password"   class="pass"/><br/><br/>
                        <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginForm