import styled from "styled-components";

import imageBottom from "./images/bottom-image.svg"
import imageTop from "./images/top-image.svg"

export const Container = styled.div`
    background: url("${imageTop}") no-repeat top,
                url("${imageBottom}") no-repeat bottom;
    background-size: contain;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5%;
    padding: 0 5%;
    h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 54px;
        letter-spacing: 0.105em;
        text-transform: uppercase;
        color: #1396D4;
    }
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
    }
    @media screen and (max-width: 600px) {
        h1{
            font-size: 28px;
            line-height: 48px;
        }
    }
`

export const TimeText = styled.p`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    span{
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        color: #C8C8C8;
    }
`
export const TimeNumber = styled.h2`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #1396D4;
    span{
        font-weight: 400;
        font-size: 72px;
        line-height: 108px;
        color: #1396D4;
    }
    @media screen and (max-width: 500px){
        span{
            font-size: 50px;
        }
    }
`
export const Image = styled.img`
    max-width: 600px;
    width: 50%;
    border-radius: 100px;
    @media screen and (max-width: 1000px){
        max-width: 500px;
        width: 90%;
    }
`