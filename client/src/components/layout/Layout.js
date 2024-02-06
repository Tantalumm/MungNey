import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({Children}) => {
    return(
        <>
            <Header/>
            <div className="content">
                {Children}
                
            </div>
            <Footer/>
            <div>

            </div>

        </>
    );
};

export default Layout;