import React from "react"
import { Helmet } from "react-helmet"
import "../assets/style.css";

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
        <title>Andriy Mykhaylyk</title>
    </Helmet>
    <div className="md:flex">
      <div>Solve. Improve. Repeat</div>
    </div>
  </>
)
