import styled from 'styled-components';

const AboutusStyle = styled.div`
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
            &__sub-title{
                font-weight: 600;
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
            padding-top: 3rem;
            @media (max-width: 991px){
                width: 100%;
            }
        }
        &--content{
            width: 90%;
            margin: auto;
            margin-top: 5rem;
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
        &:nth-child(2){
            margin-top: 8rem;
        }
    }
    .images-wrap{
        margin-top: 8rem;
        display: flex;
        margin-bottom: 4rem;
        justify-content: space-between;
        @media (max-width: 991px){
            flex-direction: column; 
        }
        .img{
            width: 45%;
            height: 30rem;
            margin-bottom: 2rem;
            text-align: center;
            background-repeat: no-repeat;
            background-size: 102% auto;
            border-radius: 4rem;
            background-position: center;
            @media (max-width: 991px){
                width: 100%;
            }
            &.left{
                background-image: url('/static/About-us.png');
            }
            &.right{
                background-image: url('/static/About-us-1.png');
            }
        }
    }
`

export default AboutusStyle