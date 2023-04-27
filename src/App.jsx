import Layout from "./Layout"
import * as Section from "./Sections"
function App() {
  return (
    <Layout>
      <Section.Hero />
      <Section.Services />
      <Section.AboutUs />
      <Section.Works />
      <Section.ContactUs />
    </Layout>
  )
}

export default App
