import Link from 'next/link';
import ContainerStyles from './styles/ContainerStyles';
import NetworkStyle from './styles/NetworkStyle';
import ButtonStyles from '../components/styles/ButtonStyle'

const Network = () => (
    <>
        <NetworkStyle>
            <div className="network-rightImage">
            </div>
            <div className="network-leftImage">
            </div>
            <div className="network-banner--overlay">
                <ContainerStyles>
                    <div className="network-banner--overlay__title">Meet your black professional network</div>
                    <div className="network-banner--overlay__caption">Unifying the global Black network, AfroHub is a space for black people working or interested in tech to connect, collaborate and build black-led products.</div>
                    <div className="network-banner--overlay__button">
                        <Link href="https://afrohub.typeform.com/to/rgfeMI">
                            <ButtonStyles white> Get Started </ButtonStyles>
                        </Link>
                    </div>
                </ContainerStyles>
            </div>
        </NetworkStyle>
    </>
)


export default Network