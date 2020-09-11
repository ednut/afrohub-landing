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
                    <div className="network-banner--overlay__title">Join your global Black-tech Network </div>
                    <div className="network-banner--overlay__caption">AfroHub is the space for Black people working, or interested in working, in tech to connect, collaborate and find new Black-tech roles.</div>
                    <div className="network-banner--overlay__button">
                        <ButtonStyles target="_blank" href="https://afrohub.typeform.com/to/rgfeMI" white> Get Started </ButtonStyles>
                    </div>
                </ContainerStyles>
            </div>
        </NetworkStyle>
    </>
)


export default Network