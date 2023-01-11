import React from "react"
import { Link } from "gatsby"

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <h1 className="site">
                    <Link to={`/`}>
                        ブログサンプル
                    </Link>
                </h1>
            </div>
        </footer>
    )
}