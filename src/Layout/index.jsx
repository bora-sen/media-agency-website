import React from "react"
import Header from "./Header"
import Footer from "./Footer"
function Layout({ children }) {
  return (
    <main className="overflow-hidden">
      <Header />
      <section>
        {children}
      </section>
      <Footer />
    </main>
  )
}

export default Layout
