import Link from 'next/link';
import ContainerStyles from './styles/ContainerStyles';
import MediaContentStyle from './styles/MediaContentStyle';
import ButtonStyles from '../components/styles/ButtonStyle';

const Features = () => (
    <>
        <ContainerStyles>
            <MediaContentStyle className="content-right">
                <div className="media-image">
                    <img className="negative-mt-7" src="/static/launchpad1.png" />
                </div>
                <div className="media-content">
                    <div className="media-content--subtitle">Features</div>
                    <div className="media-content--title">Launchpad</div>
                    <div className="media-content--caption">
                    Use our Launchpad - our one-stop shop helping to professionally structure your startup. Our Launchpad will provide you with all the vital information and insights helping you to effectively build your business.
                    </div>
                    <div className="media-content--button">
                        <Link href="https://afrohub.typeform.com/to/rgfeMI">
                            <ButtonStyles> Launch Now </ButtonStyles>
                        </Link>
                    </div>
                </div>
            </MediaContentStyle>
        </ContainerStyles>
    </>
)


export default Features