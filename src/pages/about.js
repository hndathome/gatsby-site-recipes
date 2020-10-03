import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"

export default function About() {
    return (
        <Layout>
            <div style={{ color: `teal` }}>
                <Header headerText="About Gatsby" />
                <Header headerText="It's pretty cool" />
                <p>Such wow. Very React.</p>
            </div>
        </Layout>

    )
}