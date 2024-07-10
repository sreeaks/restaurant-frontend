import { useState } from "react";
// import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
//testBranch
function RegisterFail() {

    const [password, setPass]=useState('password');
    const [icon, setIcon]=useState(eyeOff);
  
    const handleToggle = () => {    
      if(password==='password'){
        setIcon(eye);      
        setPass('text');
      }
      else{
        setIcon(eyeOff);     
        setPass('password');
      }
    }

    return(
        <section data-testid="register-2">
            <div className="zz">
                <h1 className="tb">Register</h1>
                <h6 className="tb text-danger">The username is taken.</h6>
                <form action="/register" method="POST">
                    <div className='loginRegisterCentered akula'>
                        <span>
                            <div>
                                <input id="name" name="name" placeholder="Name (Optional)" type="text" className="inp-text-input-loginReg" autocomplete="off"></input>
                            </div>
                            <p></p>
                            <div>
                                <input id="email" name="email" placeholder="Email (Optional)" type="text" className="inp-text-input-loginReg" autocomplete="off"></input>
                            </div>
                            <p></p>
                            <div>
                                <input id="username" name="username" placeholder="Username" type="text" required className="inp-text-input-loginReg" autocomplete="off"></input>
                            </div>
                            <p></p>
                            <div>
                                <input id="password" name="password" placeholder="Password" type={password} required className="inp-text-input-loginReg" autocomplete="off"></input>
                                <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
                            </div>
                            <p></p>
                            <input type="submit" value="Create Account" className="inp-text-input-loginReg  btn btn-secondary mt-0"/>
                            <div class="register">
                               <p className="text-light mt-3 mb-0">Already have an account?</p> 
                                <Link to='/login'><button id="login-link" className="btn-work  btn btn-secondary mt-0">Login</button></Link>
                            </div>
                        </span>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default RegisterFail;