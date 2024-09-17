import './App.css'
import BusinessBenefits from './components/BusinessBenefits'
import ExpertiseGrid from './components/ExpertiseGrid'
import Footer from './components/Footer'
import Header from './components/Header'
import PartnerSection from './components/PartnerSection'
import ProjectsShowcase from './components/ProjectShowcase'

function App() {
  return (
    <>
     <Header />
     <ExpertiseGrid />
     <PartnerSection />
     <BusinessBenefits />
     <ProjectsShowcase />
     <Footer />
    </>
  )
}

export default App
