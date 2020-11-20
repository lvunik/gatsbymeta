import React from "react"
import { ThemeProvider } from "@material-ui/core"
import { theme } from "./theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>{children}</div>
    </ThemeProvider>
  )
}

export default Layout
