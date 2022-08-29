import React from "react"
import ReactDOM from "react-dom"

import { worker } from "@uidotdev/react-query-api"

import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import App from "./App"

import "@styles/tailwind.css"
import "@styles/rc-tooltip.css"

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
            <div className="max-w-screen min-h-screen border-t-8 border-yellow-400 bg-slate-900">
              <App />
            </div>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </React.StrictMode>,
      document.getElementById("root")
    )
  })
