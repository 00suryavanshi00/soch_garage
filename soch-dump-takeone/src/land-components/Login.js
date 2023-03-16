import React,{useState} from "react"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import {Link} from "react-router-dom"
import "./Login.css"

export const Login = (props) => {
    const { icon, iconPos} = props;
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
       


    }


    return (
        <div className="flex-container">
            <div className='bg'></div>
            
            <div className="auth-form">
            

            <form className="reg-form"  onSubmit={handleSubmit} >
                
            
                <h1 className="title ">Login</h1>
                <h3 className="tagline">Where Imagination turns to Animation</h3>

                <label htmlfor="email">email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>


                <label htmlfor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="Password" id="password" name="password"/>

                <label>
                    <input type="checkbox"  />
                       Remember Me
                </label>

                <Link className="link-but" to="/">Login</Link>
                <p class="or-class"> 
                    <div>
                    ______________
                    </div>
                    <div class="or">
                        <b>or</b>
                    </div>
                    <div>
                    ______________
                    </div>


                </p>
                <Link className="link-gog" to="/">
                <svg class = "googlelogo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                    <path fill="#fbbb00" d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"/><path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"/><path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"/>
                    <path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"/>
                    </svg>
                    <article >Login with Google</article> 
            
               
                </Link>
                

            </form>

            <div>
            <br></br>
                <Link className="login-link" to="/reg" >Not a Member? Register</Link>

            </div>

            
            
            
        </div>

    </div>
        
        
        
    )

}

export default Login;

