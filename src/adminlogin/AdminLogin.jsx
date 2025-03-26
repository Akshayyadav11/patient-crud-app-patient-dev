import { useRef, useState } from "react";
import { admin } from "../business_logic/AdminDetails";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";


export function AdminLogin(){
    const [errorMessage, setErrorMsg]=useState('')
    let navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();
    const email = useRef()
    const password = useRef()
    function test_login(e){
        e.preventDefault();
       console.log(email.current.value);
       console.log(password.current.value);
        if(admin.email==email.current.value && admin.password ==password.current.value){
            setCookie('admin', admin.email)
            alert('Logged in successfully')
            navigate('/home')
        }else{
             
            setErrorMsg('Incorrect email or password')
        }
    }
        
    return (
        <>
        <div className="p-5 bg-dark text-white">
            <h4>ADMIN LOGIN</h4>
            <small>{errorMessage} </small>
            <form onSubmit={test_login}> 
                <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" ref={email} id="exampleInputEmail1"  autoComplete="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control"  ref={password}  autoComplete="current-password" id="exampleInputPassword1" />
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="reset" className="btn btn-primary">Reset</button>
                </div>
            </form>
        </div>
        </>
    );
}