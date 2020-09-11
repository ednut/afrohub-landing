import styled from 'styled-components';

const ServicesStyle = styled.div`
    margin-top: 8rem;
    .statement{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        @media (max-width: 991px){
            flex-direction: column; 
        }
        &--heading{
            width: 30%;
            @media (max-width: 991px){
                width: 100%;
            }
            &__title{
                font-weight: 600;
                font-size: ${props => props.theme.titleFont};
                line-height: 4rem;
                margin-bottom: 2rem;

            }
        }
        &--caption{
            width: 60%;
            font-size: ${props => props.theme.captionFont};
            line-height: 3.5rem;
            font-weight: 300;
            @media (max-width: 991px){
                width: 100%;
            }
        }
    }
    .image-sec{
        width: 100%;
        height: 40rem;
        background-image: url('/static/Services.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin-top: 5rem;
        margin-bottom: 4rem;
    }
    .features-content{
            margin-top: 8rem;
            margin-bottom: 4rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            @media (max-width: 991px){
                flex-direction: column;
            }
            &--wrapper{
                width: 30%;
                display: flex;
                flex-direction: row;
                margin-bottom: 4rem;
                @media (max-width: 991px){
                    width: 100%;
                }
            }
            &--icon{
                width: 20%;
                img{

                }
            }
            &--info{
                width: 80%;
                padding-left: 1rem;
                &_title{
                    text-align: left;
                    font-weight: 600;
                    font-size: ${props => props.theme.captionFont};
                }
                &_caption{
                    text-align: left;
                }
            }
        }
`

export default ServicesStyle