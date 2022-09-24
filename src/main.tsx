import React from "react"
import ReactDOM from "react-dom"

import App from "@app"
import { AppProviders } from "@context"
import { ProgressBar } from "@ui"
import { worker } from "@uidotdev/react-query-api"

import "@styles/tailwind.css"

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
          <App />
        </AppProviders>
      </React.StrictMode>,
      document.getElementById("root")
    )
  })
