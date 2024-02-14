import React from "react";
import { GithubOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="bg-dark text-light p-4 row">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <a href="https://github.com/Tantalumm" style={{color:"white"}}>
          <GithubOutlined style={{ fontSize: "30px" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
