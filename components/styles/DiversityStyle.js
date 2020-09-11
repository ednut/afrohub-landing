import styled from 'styled-components';

const DiversityStyle = styled.div`
    margin-top: 5rem;
    width: 100%;
    text-align: center;
    color: ${props => props.theme.black};
    @media (max-width: 991px){
        margin-top: 2rem;
    }
    .diversity{
        &-title{
            font-weight: 600;
            font-size: ${props => props.theme.titleFont};
            line-height: 4rem;
            margin-bottom: 2rem;
            @media (max-width: 991px){
                margin-bottom: 2rem;
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
        &-images{
            display: flex;
            flex-direction: row;
            margin-bottom: 0;
            justify-content: space-between;
            @media (max-width: 991px){
                flex-direction: column;
                margin-bottom: 1.5rem;
            }
            div{
                width: 30%;
                height: 23rem;
                margin-top: 5rem;
                border-radius: 3rem;
                /* box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); */
                background-repeat: no-repeat;
                background-size: 120% auto;
                background-position: center;
                @media (max-width: 991px){
                    width: 100%;
                }
            }
            .image1{
                background-image: url('/static/hands.png');
            }
            .image2{
                background-image: url('/static/laptop.png');
            }
            .image3{
                background-image: url('/static/boss.png');
            }
        }
    }
`

export default DiversityStyle