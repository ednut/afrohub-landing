import Banner from '../components/Banner';
import Partners from '../components/Partners'
import Diversity from '../components/Diversity'
import Features from '../components/Features'
import Network from '../components/Network'
import Launchpad from '../components/Launchpad'
import Community from '../components/Community'
import Contracts from '../components/Contracts'
import Professionals from '../components/Professionals'
import Footer from '../components/Footer'

const Home = () => (
    <>
        <Banner title="Business Development Re-Invented" 
                caption="Unifying the global Black network, AfroHub is a space for black people working or interested in tech to connect, collaborate and build black-led products." 
                button={true}
                
        />
        <Partners/>
        <Diversity/>
        <Features/>
        <Network/>
        <Launchpad/>
        <Community/>
        <Contracts/>
        <Professionals/>
        <Footer/>
    </>
)


export default Home