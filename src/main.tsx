import { worker } from "@uidotdev/react-query-api"
import React from "react"
import ReactDOM from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"

import App from "./App"

import "@/styles/tailwind.css"

const queryClient = new QueryClient()

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
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="min-h-screen border-t-8 border-yellow-400 bg-gray-900">
              <App />
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </React.StrictMode>,
      document.getElementById("root")
    )
  })
