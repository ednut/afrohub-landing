import ContainerStyles from './styles/ContainerStyles';
import BannerStyles from '../components/styles/BannerStyles';
import ButtonStyles from '../components/styles/ButtonStyle';

const Banner = (props) => (
    <>
        <BannerStyles backgroundColor={props.backgroundColor} 
                      backgroundImage={props.backgroundImage}
                      image={props.image}
                      shorter={props.shorter}
                      >
         {props.showBannerDots && <div><span className="light-circle"></span>
            <span className="circle"></span>
            <span className="triangle-wrap">
                <svg height="30" width="30">
                    <polygon points="16,4 7,25 25,25" className="triangle" />
                </svg>
            </span></div>}   
            
            <ContainerStyles>
                <div className="banner-wrap">
                    <div className="banner-text">
                        <div className="banner-text--title">{props.title}</div>
                        <div className="banner-text--caption">{props.caption}</div>
                        {props.button && <div className="banner-text--button">
                            <ButtonStyles target="_blank" href="https://afrohub.typeform.com/to/rgfeMI" white> Join The Waitlist</ButtonStyles>
                        </div>}
                    </div>
                    <div className="banner-image">
                        <img src={props.image}/>
                    </div>
                </div>
            </ContainerStyles>
        </BannerStyles>
    </>
)


export default Banner