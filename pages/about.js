import AboutusStyles from '../components/styles/AboutusStyle';
import Banner from '../components/Banner';
import ContainerStyles from '../components/styles/ContainerStyles';

const About = () => (
    <>
    <Banner title="Using the disruptive power of technology to accelerate growth for the Black community." 
            caption="We’re founded on the belief that access to founding startups or working in corporate-level positions should be within arms reach to all." 
            button={false}
            backgroundColor="transperent"
            backgroundImage="linear-gradient(to right bottom, #358184, #2b8494, #2b86a3, #3a87b1, #5287bc);"
            showBannerDots = {true}
        />
    <AboutusStyles>
        <ContainerStyles>
            <div className="statement">
                <div className="statement--heading">
                    <div className="statement--heading__sub-title">Our Mission</div>
                    <div className="statement--heading__title">To build the table instead of asking for the seat at one.</div>
                </div>
                <div className="statement--caption">
                    AfroHub was built by a remote team from America, Ghana, Nigeria and the UK. We’re passionate, solution-oriented change makers, who recognize the possibilities of what a united Black community can do. We believe that by:
                </div>

                <div className="statement--content">
                    <div className="statement--content--wrapper">
                        <div className="statement--content--icon">
                            <img src="/static/deep-learning.svg" />
                        </div>
                        <div className="statement--content--info">
                            <div className="statement--content--info_title">Network</div>
                            <div className="statement--content--info_caption">Join AfroHub and increase your global network of Black professionals in tech.</div>
                        </div>
                    </div>

                    <div className="statement--content--wrapper">
                        <div className="statement--content--icon">
                            <img src="/static/contract.svg" />
                        </div>
                        <div className="statement--content--info">
                            <div className="statement--content--info_title">Build</div>
                            <div className="statement--content--info_caption">Benefit from access to a community that will help you build innovative products and create new opportunities.</div>
                        </div>
                    </div>

                    <div className="statement--content--wrapper">
                        <div className="statement--content--icon">
                            <img src="/static/discover.svg" />
                        </div>
                        <div className="statement--content--info">
                            <div className="statement--content--info_title">Discover</div>
                            <div className="statement--content--info_caption">Continue supporting Black-led ventures by gaining access to our directory of carefully vetted businesses. #BuyBlack</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="statement">
                <div className="statement--heading">
                    <div className="statement--heading__sub-title">Our Vision</div>
                    <div className="statement--heading__title">A space where you can create, collaborate and build.</div>
                </div>
                <div className="statement--caption">
                    Being a home for Black professionals, no matter where they are in the world. We’re a collective, attracting tech pioneers and its supporting roles to build well designed and insightful products together. AfroHub is the launchpad of Black innovation the place where passionate people, both familiar and unfamilar with tech can discover new opportunities to make their first step into the industry.
                </div>
            </div>

            <div className="images-wrap">
                <div className="img left"></div>
                <div className="img right"></div>
            </div>
        </ContainerStyles>
    </AboutusStyles>
    </>
    
)


export default About