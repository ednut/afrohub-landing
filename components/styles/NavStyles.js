import styled from 'styled-components';

const NavStyles = styled.div`
    height: ${props => props.theme.headerHeight};
    line-height: 4.5rem;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 100;
    .header-wrap{
        display: flex;
        flex-direction: row;
        height: 100%;
        border-bottom: 0.1rem solid rgba(255, 255, 255, 0.17);
        &--logo-section{
            width: 20%;
            text-align: left;
            padding-top: 2.2rem;
            img{
                width: 9.9rem;
            }
        }
        &--link-section{
            width: 80%;
            ul{
                text-align: right;
                height: 5rem;
                line-height: 5rem;
                li{
                    display: inline-block;
                    margin-left: 5rem;
                    a{
                        color: #ffffff;
                        text-decoration: none;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 2rem;
                        font-size: 1.5rem;
                        text-transform: uppercase;
                        display: inline-block;
                        border-bottom: 0.2rem solid transparent;
                    }
                    &.current{
                        a{
                            position: relative;
                            &::after{
                                content: "";
                                position: absolute;
                                background: #1FBD97;
                                width: 100%;
                                bottom: -0.8rem;
                                height: 0.4rem;
                                left: 0;
                                border-radius: 2.3rem;
                            }
                        }
                    }
                    &.bugger-menu{
                        width: 3rem;
                        cursor: pointer;
                        .line{
                            display: block;
                            width: 100%;
                            height: 0.5rem;
                            margin-bottom: 0.2rem;
                            background-color: #ffffff;
                            border-radius: 0.5rem;
                            &:first-child{
                                margin-top: 1.5rem;
                            }
                        }
                    }
                }
            }
        }
    }

`

export default NavStyles