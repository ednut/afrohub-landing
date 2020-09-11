import styled from 'styled-components';

const ContactusStyle = styled.div`
    .title-wrap{
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
        .title{
            font-size: ${props => props.theme.titleFont};
            font-weight: 700;
        }
        .caption{
            font-size: ${props => props.theme.captionFont};
            font-weight: 300;
        }
    }
    .banner{
        width: 100%;
        height: 30rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url('/static/contactus.png');
        border-radius: 2rem;
        margin-bottom: 4rem;
    }
    .contact-info{
        background-color: #F7F7FB;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 80%;
        margin: auto;
        margin-bottom: 4rem;
        border-radius: 1rem;
        padding: 4rem 2rem;
        @media (max-width: 991px){
            width: 100%;
            margin-bottom: 2rem;
            flex-direction: column;
        }
        .info{
            width: 30%;
            @media (max-width: 991px){
                width: 100%;
            }
            span{
                display: block;
                font-size: 1.3rem;
                color: #696871;
                &.info-title{
                    font-weight: 600;
                    font-size: 1.6rem;
                    color: ${props => props.theme.black};
                }
            }
            
        }
    }
`

export default ContactusStyle