import ServicesStyles from '../components/styles/ServicesStyle';
import Banner from '../components/Banner';
import ContainerStyles from '../components/styles/ContainerStyles';

const Services = () => (
    <>
        <Banner title="Services" 
                caption="We’re founded on the belief that access to founding startups or working in corporate-level positions should be within arms reach to all." 
                button={false}
                backgroundColor="#16314B"
                image="/static/service.png"
                showBannerDots = {true}
        />
        <ServicesStyles>
            <ContainerStyles>
            <div className="statement">
                <div className="statement--heading">
                    <div className="statement--heading__title">What we offer</div>
                </div>
                <div className="statement--caption">
                    AfroHub was built by a remote team from America, Ghana, Nigeria and the UK. We’re passionate, solution-oriented change makers, who recognize the possibilities of what a united Black community can do. We believe that by:
                </div>
            </div>

            <div className="image-sec"></div>

            <div className="features-content">
                <div className="features-content--wrapper">
                    <div className="features-content--icon">
                        <img src="/static/deep-learning.svg" />
                    </div>
                    <div className="features-content--info">
                        <div className="features-content--info_title">Network</div>
                        <div className="features-content--info_caption">Join AfroHub and increase your global network of Black professionals in tech.</div>
                    </div>
                </div>

                <div className="features-content--wrapper">
                    <div className="features-content--icon">
                        <img src="/static/contract.svg" />
                    </div>
                    <div className="features-content--info">
                        <div className="features-content--info_title">Build</div>
                        <div className="features-content--info_caption">Benefit from access to a community that will help you build innovative products and create new opportunities.</div>
                    </div>
                </div>

                <div className="features-content--wrapper">
                    <div className="features-content--icon">
                        <img src="/static/discover.svg" />
                    </div>
                    <div className="features-content--info">
                        <div className="features-content--info_title">Discover</div>
                        <div className="features-content--info_caption">Continue supporting Black-led ventures by gaining access to our directory of carefully vetted businesses. #BuyBlack</div>
                    </div>
                </div>

                <div className="features-content--wrapper">
                    <div className="features-content--icon">
                        <img src="/static/wind.svg" />
                    </div>
                    <div className="features-content--info">
                        <div className="features-content--info_title">Enhance Cultural Awareness</div>
                        <div className="features-content--info_caption">Enhance your cultural knowledge by enjoying content and conversation curated by Black people from all over the world.</div>
                    </div>
                </div>

                <div className="features-content--wrapper">
                    <div className="features-content--icon">
                        <img src="/static/learn.svg" />
                    </div>
                    <div className="features-content--info">
                        <div className="features-content--info_title">Learn</div>
                        <div className="features-content--info_caption">Upskill or retrain by having exclusive access to a range of learning programs, courses and resources.</div>
                    </div>
                </div>

                <div className="features-content--wrapper">
                    <div className="features-content--icon">
                        <img src="/static/hear.svg" />
                    </div>
                    <div className="features-content--info">
                        <div className="features-content--info_title">Hear</div>
                        <div className="features-content--info_caption">Get access to the latest black news and receive member-only invitations to events and webinars</div>
                    </div>
                </div>
            </div>
            </ContainerStyles>
        </ServicesStyles>
    </>
)


export default Services