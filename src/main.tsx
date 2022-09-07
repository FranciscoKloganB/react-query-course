import React from "react"
import ReactDOM from "react-dom"

import App from "@app"

import { worker } from "@uidotdev/react-query-api"

import { AppProviders } from "@context"

import "@styles/tailwind.css"
import "@styles/rc-tooltip.css"
import { ProgressBar } from "@ui"
import { MobileNavigation } from "./components/nav/MobileNavigation"

new Promise((res) => setTimeout(res, 100))
  .then(() =>
    worker.start({
      quiet: true,
      onUnhandledRequest: "bypass"
    })
  )
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <AppProviders>
          <ProgressBar />
          <MobileNavigation />
          <App />
        </AppProviders>
      </React.StrictMode>,
      document.getElementById("root")
    )
  })
