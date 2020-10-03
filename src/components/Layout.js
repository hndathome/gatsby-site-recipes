import React from "react"
// import { Link } from "@reach/router"
import { Link } from "gatsby"

export default function Layout({ children }) {
    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {children}
        </div>
    )
}
