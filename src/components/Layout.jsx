import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props) => {
    const { children } = props;
    console.log(children);

    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    )
}