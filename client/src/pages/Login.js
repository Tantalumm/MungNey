import React,{useState,useEffect} from "react";
import { Form, Input, message } from "antd";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/layout/Spinner";

const Login = () =>{
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const submitHandler = (values) => {
        try{
            setLoading(true)
            const {data} = axios.post("/users/login",values);
            setLoading(false)
            message.success("login complete");
            localStorage.setItem("user", JSON.stringify({...data,password:""}))
            navigate("/")
        }
        catch(error){
            setLoading(false)
            message.error("something wrong")
        }
    }
    
    useEffect(()=>{
        if(localStorage.getItem('user')){
            navigate("/")
            }
        },[navigate]);

    return(
        <>
        <div className="login-page">
            {loading && <Spinner/>}
            <Form layout="vertical" onFinish={submitHandler}>
                <h1>Login From</h1>
                <Form.Item label="email" name="email">
                    <Input type="email"/>
                </Form.Item>
                <Form.Item label="password" name="password">
                    <Input type="password"/>
                </Form.Item>
                <div className="d-flex justify-content-between">
                    <Link to="/register">Click Here to Register</Link>
                    <button className="btn btn-primary">Register</button>
                </div>
            </Form>
        </div>
        </>
    )
}

export default Login;