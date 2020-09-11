import styled from 'styled-components';

const CommunityStyle = styled.div`
    width: 100%;
    min-height: 40rem;
    position: relative;
    background-color: ${props => props.theme.footerColor};
    color: ${props => props.theme.white};
    .community{
        &-banner{
            display: flex;
            &-wrap{
                width: 45%;
                padding: 6rem 2rem 2rem 10rem;
                @media (max-width: 991px){
                    width: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    background-image: url('/static/map.png');
                    padding: 10rem 2rem;
                }
            }
            &--tittle{
                font-weight: 600;
                font-size: ${props => props.theme.titleFont};
                line-height: 4rem;
                margin-bottom: 2rem;
                margin-top: 3rem;
                @media (max-width: 991px){
                    margin-top: 0;
                }
            }
            &--caption{
                font-size: ${props => props.theme.captionFont};
                margin-top: 1rem;
                line-height: 2.5rem;
                margin-bottom: 1rem;
                font-weight: 300;
            }
            &--button{
                margin-top: 2rem;
            }
            &-map{
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                width: 55%;
                min-height: 40rem;
                background-image: url('/static/map.png');
            }
        }
    }
`

export default CommunityStyle