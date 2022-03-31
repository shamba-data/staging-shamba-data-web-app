import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import VoiceAssistant from '../components/VoiceAssistant'
import ProductFeatures from '../components/ProductFeatures'
import SignUp from '../components/SignUp'
import Quotes from '../components/Quotes'
import Team from '../components/Team'
import RoadMap from '../components/RoadMap'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
import TimelineSlideShow from '../components/TimelineSlideShow'
export default function Home() {
  return (
    <div >
     
       <Navbar/>
      <VoiceAssistant/>
      <ProductFeatures/>
      <SignUp/>
      <Quotes/>
      <RoadMap/>
      <Timeline/>
      <TimelineSlideShow/>
      <Team/>
      <Footer/>
    </div>
  )
}
