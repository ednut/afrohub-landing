import styled from 'styled-components';

const MediaContentStyle = styled.div`
    margin-top: 10rem;
    margin-bottom: 10rem;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 991px){
        flex-direction: column;
        margin-bottom: 2rem;
    }
    .negative-mt-7{
        margin-top: -7rem;
    }
    .media{
        &-image{
            width: 50%;
            @media (max-width: 991px){
                width: 100%;
            }
            img{
                width: 100%;
            }
        }
        &-content{
            width: 40%;
            text-align: left;
            @media (max-width: 991px){
                width: 100%;
            }
            &--subtitle{
                font-weight: 600;
            }
            &--title{
                font-weight: 600;
                font-size: ${props => props.theme.titleFont};
                line-height: 4rem;
                margin-bottom: 2rem;
            }
            &--caption{
                font-size: ${props => props.theme.captionFont};
                margin-top: 1rem;
                line-height: 2.5rem;
                margin-bottom: 1rem;
                font-weight: 300;
            }
            &--button{
                margin-top: 3rem;
            }
        }
    }

`

export default MediaContentStyle