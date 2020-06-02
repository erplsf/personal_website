import React from "react"
import { Helmet } from "react-helmet"
import "../assets/style.css";

//     <div> Solve. Improve. Repeat. </div>

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
        <title>Andriy Mykhaylyk</title>
    </Helmet>
    <div className="bg-gray-300">
    <div className="font-serif text-lg"> Solve. Improve. Repeat. </div>
    <div className="flex flex-row">
    <div className="w-2/5 font-sans text-lg text-center bg-green-300">
    <div> Hello, My name is _Andriy Mykhaylyk_. I help to *solve your problems*. </div>
    </div>
    </div>
    </div>
  </>
)
