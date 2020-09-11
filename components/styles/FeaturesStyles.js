import styled from 'styled-components';

const FeaturesStyles = styled.div`
    margin-top: 5rem;
    width: 100%;
    text-align: center;
    .features{
        &-subtitle{
            font-weight: 600;
        }
        &-title{
            font-weight: 600;
            font-size: ${props => props.theme.titleFont};
            line-height: 4rem;
            width: 70%;
            margin: 0 auto;
            margin-bottom: 2rem;
            @media (max-width: 991px){
                margin-bottom: 2rem;
                width: 100%;
            }
        }
        &-caption{
            font-size: ${props => props.theme.captionFont};
            margin-top: 1rem;
            line-height: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 300;
            width: 60%;
            margin: 0 auto;
            @media (max-width: 991px){
                width: 100%;
                font-size: 1.8rem;
            }
        }
        &-content{
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
    }
`

export default FeaturesStyles