import Banner from '../components/Banner';
import Partners from '../components/Partners'
import Diversity from '../components/Diversity'
import Features from '../components/Features'
import Network from '../components/Network'
import Launchpad from '../components/Launchpad'
import Community from '../components/Community'
import Contracts from '../components/Contracts'
import Professionals from '../components/Professionals'


const Home = () => (
    <>
        <Banner title="Black Business Reinvented" 
                caption="Unifying the global Black network, AfroHub is a space for black people working or interested in tech to connect, collaborate and build black-led products." 
                button={true}
                image="/static/banner-img.png"
                showBannerDots = {true}
        />
        {/* <Partners/> */}
        <Diversity/>
        <Features/>
        <Network/>
        <Launchpad/>
        <Community/>
        <Contracts/>
        <Professionals/>
    </>
)


export default Home