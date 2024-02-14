import React from "react";
import { GithubOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="bg-dark text-light p-4 row">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <GithubOutlined style={{fontSize: '30px'}}/>
    </div>
  </div>
  );
};

export default Footer;
