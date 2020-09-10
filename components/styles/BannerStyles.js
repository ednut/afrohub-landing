import styled from 'styled-components';

const BannerStyles = styled.div`
    background: ${props => props.backgroundColor || '#3188DD' };
    height: 58rem;
    color: ${props => props.theme.white};
    padding-top: ${props => props.theme.headerHeight};
    .banner{
        &-wrap{
            display: flex;
            flex-direction: row;
        }
        &-text{
            width: 60%;
            z-index: 2;
            @media (max-width: 991px){
                width: 100%;
            }
            &--title{
                letter-spacing: 0px;
                text-transform: capitalize;
                font-weight: 600;
                font-size: 5rem;
                line-height: 5.5rem;
                margin-top: 9rem;
                @media (max-width: 991px){
                    margin-top: 5rem;
                    font-size: 4.5rem;
                }
            }
            &--caption{
                font-size: 1.6rem;
                margin-top: 3rem;
                line-height: 2.5rem;
                margin-bottom: 3rem;
                font-weight: 300;
                width: 90%;
                @media (max-width: 991px){
                    width: 100%;
                    font-size: 1.8rem;
                }
            }
        }
        &-image{
            width: 40%;
            position: relative;
            height: 50rem;
            @media (max-width: 991px){
                display: none;
            }
            img{
                width: 72rem;
                position: absolute;
                bottom: 0;
                left: -25rem;
                z-index: 1;
            }
        }
    }
`

export default BannerStyles