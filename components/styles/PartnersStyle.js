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
        @media (max-width: 991px){
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            overflow: hidden;
            justify-content: center;
        }
        li{
            display: inline-block;
            margin-right: 7rem;
            @media (max-width: 991px){
                margin-right: 3rem;
            }
            &:nth-child(3){
                img{
                    width: 8rem;
                }
            }
            img{
                margin-top: 1rem;
                width: 9rem;
            }
        }
    }
`

export default PartnersStyle