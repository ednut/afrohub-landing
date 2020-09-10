import Link from 'next/link';
import ContainerStyles from './styles/ContainerStyles';
import BannerStyles from '../components/styles/BannerStyles';
import ButtonStyles from '../components/styles/ButtonStyle';

const Banner = (props) => (
    <>
        <BannerStyles backgroundColor={props.backgroundColor}>
            <ContainerStyles>
                <div className="banner-wrap">
                    <div className="banner-text">
                        <div className="banner-text--title">{props.title}</div>
                        <div className="banner-text--caption">{props.caption}</div>
                        {props.button && <div className="banner-text--button">
                            <Link href="https://afrohub.typeform.com/to/rgfeMI">
                                <ButtonStyles white> Join The Waitlist</ButtonStyles>
                            </Link>
                        </div>}
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