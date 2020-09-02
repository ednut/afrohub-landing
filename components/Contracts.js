import Link from 'next/link';
import ContainerStyles from './styles/ContainerStyles';
import MediaContentStyle from './styles/MediaContentStyle';
import ButtonStyles from '../components/styles/ButtonStyle';

const Contracts = () => (
    <>
        <ContainerStyles>
            <MediaContentStyle className="content-left">
                <div className="media-content">
                    <div className="media-content--subtitle">Features</div>
                    <div className="media-content--title">Apply for coporate contracts</div>
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
                <div className="media-image">
                    <img src="/static/contracts.png" />
                </div>
            </MediaContentStyle>
        </ContainerStyles>
    </>
)


export default Contracts