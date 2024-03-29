import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./pages/App"
import QRCodePage from "./pages/QRCode"
import NFTPreviewCardPage from "./pages/NFTPreviewCard"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/qr-code-component" element={<QRCodePage />} />
        <Route path="/nft-preview-card-component" element={<NFTPreviewCardPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
