import styled from 'styled-components';

const PartnersStyle = styled.div`
    width: 100%;
    min-height: 10rem;
    height: auto;
    ul{
        width: 80%;
        margin: 0 auto;
        border-bottom: 1px solid #0000001c;
        text-align: center;
        padding: 3rem 0;
        li{
            display: inline-block;
            margin-right: 7rem;
            @media (max-width: 991px){
                margin-right: 3rem;
            }
            &:nth-child(3){
                img{
                    width: 11rem;
                }
            }
            img{
                margin-top: 1rem;
            }
        }
    }
`

export default PartnersStyle