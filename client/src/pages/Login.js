import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/layout/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("login complete");
      console.log(values);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("something wrong");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <body>
      <div className="login-page">
        {loading && <Spinner />}
        <div>
          <Form layout="vertical" onFinish={submitHandler}>
            <div className="text-center">
              <h1>Login Form</h1>
            </div>

            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <div>
              <button
                className="btn btn-dark"
                style={{ height: "50px", width: "300px" }}
              >
                Login
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link style={{color:"black"}} to="/register">Click Here to Register</Link>
            </div>
          </Form>
        </div>
      </div>
    </body>
  );
};

export default Login;
