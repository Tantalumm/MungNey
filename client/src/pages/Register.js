import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/layout/Spinner";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      console.log(values);
      await axios.post("/users/register", values);

      message.success("Registerration Successfull");

      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("invalid username or password");
    }
  };
  return (
    <div className="register-page">
      {loading && <Spinner />}
      <Form layout="vertical" onFinish={submitHandler}>
        <div className="text-center">
          <h1>Register Form</h1>
        </div>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
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
            Register
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link style={{ color: "black" }} to="/Login">
            Click Here to Login
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;
