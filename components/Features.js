import ContainerStyles from './styles/ContainerStyles';
import FeaturesStyles from './styles/FeaturesStyles';

const Features = () => (
    <>
        <ContainerStyles>
            <FeaturesStyles>
                <div className="features-subtitle">Features</div>
                <div className="features-title">Connect with companies that have committed To Support the black community.</div>
                <div className="features-caption">The lack of Black representation within tech is an understatement. We’re solving this by creating a platform addressing key areas that will promote Black development.</div>
                <div className="features-content">
                    <div className="features-content--wrapper">
                        <div className="features-content--icon">
                            <img src="/static/deep-learning.svg" />
                        </div>
                        <div className="features-content--info">
                            <div className="features-content--info_title">Network</div>
                            <div className="features-content--info_caption">By joining you’ll expand your global network of Black Business Professionals.</div>
                        </div>
                    </div>

                    <div className="features-content--wrapper">
                        <div className="features-content--icon">
                            <img src="/static/contract.svg" />
                        </div>
                        <div className="features-content--info">
                            <div className="features-content--info_title">Build</div>
                            <div className="features-content--info_caption">Benefit from access to a community that will help you to create innovative products and solutions.</div>
                        </div>
                    </div>

                    <div className="features-content--wrapper">
                        <div className="features-content--icon">
                            <img src="/static/discover.svg" />
                        </div>
                        <div className="features-content--info">
                            <div className="features-content--info_title">Discover</div>
                            <div className="features-content--info_caption">Continue supporting Black-led ventures by gaining access to our directory of vetted businesses #BuyBlack.</div>
                        </div>
                    </div>

                    <div className="features-content--wrapper">
                        <div className="features-content--icon">
                            <img src="/static/wind.svg" />
                        </div>
                        <div className="features-content--info">
                            <div className="features-content--info_title">Enhance</div>
                            <div className="features-content--info_caption">Enjoying cross-cultural conversations with Black people all over the world and receive exclusive invites to global events and webinars.</div>
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
                            <div className="features-content--info_title">Keep updated</div>
                            <div className="features-content--info_caption">Stay current with access to our carefully curated black tech news, case studies and updates.</div>
                        </div>
                    </div>
                </div>
            </FeaturesStyles>
        </ContainerStyles>
    </>
)


export default Features