import styled from 'styled-components';

const NetworkStyle = styled.div`
    margin-top: 5rem;
    width: 100%;
    text-align: center;
    position: relative;
    display: flex;
    height: 40rem;
  
    .network{
        &-rightImage{
            width: 50%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-image: url('/static/network1.png');
            height: 100%;
        }
        &-leftImage{
            width: 50%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-image: url('/static/network2.png');
            height: 100%;
        }
        &-banner{
            &--overlay{
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background-color: rgba(0,0,0,0.6);
                width: 100%;
                color: ${props => props.theme.white};
                &__title{
                    font-weight: 600;
                    font-size: 3rem;
                    line-height: 4rem;
                    width: 70%;
                    margin: 10rem auto 2rem auto;
                    @media (max-width: 991px){
                        width: 100%;
                    }
                }
                &__caption{
                    font-size: 1.6rem;
                    margin-top: 1rem;
                    line-height: 2.5rem;
                    margin-bottom: 1rem;
                    font-weight: 300;
                    width: 60%;
                    margin: 0 auto 3rem auto;
                    @media (max-width: 991px){
                        width: 100%;
                    }
                }
                &__button{
                    
                }
            }
        }
    }
`

export default NetworkStyle