import Link from 'next/link';
import ContainerStyles from './styles/ContainerStyles';
import MediaContentStyle from './styles/MediaContentStyle';
import ButtonStyles from '../components/styles/ButtonStyle';

const Professionals = () => (
    <>
        <ContainerStyles>
            <MediaContentStyle className="content-right">
                <div className="media-image">
                    <img src="/static/launchpad.png" />
                </div>
                <div className="media-content">
                    <div className="media-content--subtitle">Features</div>
                    <div className="media-content--title">Discover & Network with black professionals</div>
                    <div className="media-content--caption">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation
                    </div>
                    <div className="media-content--button">
                        <Link href="https://afrohub.typeform.com/to/rgfeMI">
                            <ButtonStyles> Learn More </ButtonStyles>
                        </Link>
                    </div>
                </div>
            </MediaContentStyle>
        </ContainerStyles>
    </>
)


export default Professionals