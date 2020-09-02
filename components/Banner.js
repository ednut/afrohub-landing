import Link from 'next/link';
import ContainerStyles from './styles/ContainerStyles';
import BannerStyles from '../components/styles/BannerStyles';
import ButtonStyles from '../components/styles/ButtonStyle';

const Banner = () => (
    <>
        <BannerStyles>
            <ContainerStyles>
                <div className="banner-wrap">
                    <div className="banner-text">
                        <div className="banner-text--title">Business Development Re-Invented</div>
                        <div className="banner-text--caption">Unifying the global Black network, AfroHub is a space for black people working or interested in tech to connect, collaborate and build black-led products.</div>
                        <div className="banner-text--button">
                            <Link href="https://afrohub.typeform.com/to/rgfeMI">
                                <ButtonStyles white> Join The Waitlist</ButtonStyles>
                            </Link>
                        </div>
                    </div>
                    <div className="banner-image">
                        <img src="/static/banner-img.png"/>
                    </div>
                </div>
            </ContainerStyles>
        </BannerStyles>
    </>
)


export default Banner