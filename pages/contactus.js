import ContactusStyles from '../components/styles/ContactusStyle';
import ContainerStyles from '../components/styles/ContainerStyles';
import Banner from '../components/Banner';

const Contactus = () => (
    <>
        <Banner title="Get in touch " 
                button={false}
                backgroundColor="#16314B"
                shorter = "33rem"
                showBannerDots = {false}
        />
        <ContactusStyles>
            <ContainerStyles>
                <div className="title-wrap">
                    <div className="title">
                        Contact us
                    </div>
                    <div className="caption">
                        Create custom landing pages with Omega that converts more visitors than any website. 
                    </div>
                </div>
                <div className="banner"></div>
                <div className="contact-info">
                    <div className="info">
                        <span className="info-title">Call us</span>
                        <span>+1-492-4918-395</span>
                        <span>+14-394-409-591</span>
                    </div>
                    <div className="info">
                        <span className="info-title">Email us</span>
                        <span>info@mail.com</span>
                        <span>support@mail.com</span>
                    </div>
                    <div className="info">
                        <span className="info-title">Visit us</span>
                        <span>34 Madison Street, NY, USA 10005</span>
                    </div>
                </div>
            </ContainerStyles>
        </ContactusStyles>
    </>
)


export default Contactus;