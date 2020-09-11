import CommunityStyle from './styles/CommunityStyle';
import ButtonStyles from '../components/styles/ButtonStyle';

const Community = () => (
    <>
        <CommunityStyle>
            
            <div className="community-banner">
                <div className="community-banner-wrap">
                        <div className="community-banner--tittle">Our community and networks are growing.</div>
                        <div className="community-banner--caption">AfroHub is designed to unlock black potential in a way that has never been done before. Connecting members across the globe, we’ve started changing the narrative.</div>
                        <div className="community-banner--button">
                            <ButtonStyles target="_blank" href="https://afrohub.typeform.com/to/rgfeMI"> Explore More </ButtonStyles>
                        </div>
                </div>
                
                <div className="community-banner-map hide-on-mobile">
                </div>
            </div>
          
        </CommunityStyle>
    </>
)


export default Community