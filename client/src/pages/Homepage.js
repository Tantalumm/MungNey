import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { FloatButton, Modal, Input, Form, Select, message, Table} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import Spinner from "../components/layout/Spinner";

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allService, setAllservice] = useState([]);

  const columns = [
    {
      title : 'Date',
      dataIndex : 'date'
    },
    {
      title : 'Title',
      dataIndex : 'title'
    },
    {
      title : 'Amount',
      dataIndex : 'amount'
    },
    {
      title : 'Type',
      dataIndex : 'type'
    },
    {
      title : 'Category',
      dataIndex : 'category'
    },
    {
      title : 'Action',
    },
  ]

  const getAllservice = async () => {
    try{
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      const res = await axios.post("/services/get-service",{userid:user._id})
      setLoading(false);
      setAllservice(res.data);
      console.log(res.data);
    }
    catch(err){
      console.log(err);
      message.error("service Issue");
    }
  };

  useEffect(() => {
    getAllservice();
  },[])

  const handleSubmit = async (values) =>{
    try{
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true)
      await axios.post("/services/add-service" , {...values,userid:user._id})
      message.success("add service successfully")
      setLoading(false)
      setShowModal(false)
    }
    catch(err){
      setLoading(false)
      message.error("add service failed")
    }
  }
  return (
    <Layout>
      {loading && <Spinner/>}
      <div className="filters">
        <div>
          <FloatButton
            icon={<PlusOutlined />}
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
      <div className="content">
        <Table columns={columns} dataSource={allService}/>
      </div>
      <Modal
        title="Service"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Title" name="title">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Type" name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="drink">Drink</Select.Option>
              <Select.Option value="travel">travel</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="invest">Invest</Select.Option>
              <Select.Option value="steaming">Steaming</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" type="submit">
              OK
            </button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Homepage;
