import React from "react";
import { Link } from "gatsby";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="site">
                    <Link to={`/`}>
                        ブログサンプル
                    </Link>
                </h1>
            </div>
        </header>
    )
}