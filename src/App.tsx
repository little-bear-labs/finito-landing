import './App.css'

import { About } from './components/About'
import { Cta } from './components/Cta'
import { FAQ } from './components/FAQ'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Integrations } from './components/Integrations'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'
import { Pricing } from './components/Pricing'
import { ScrollToTop } from './components/ScrollToTop'
import { Services } from './components/Services'
import { Signup } from './components/Signup'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Workflow } from './components/Workflow'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Integrations />
      <Workflow />
      <Signup />
      <FAQ />
      {/* TODO: From here down, don't show for now? */}
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
