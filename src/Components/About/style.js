import styled from "styled-components";

export const ContainerAbout = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    background: #111A1B;
    padding-bottom: 20px;
    @media screen and (min-width: 760px) and (max-width: 1024px){
        width: 100%;
    }
`

export const BallonAbout = styled.div`
    width: 98px;
    height: 99px;
    background: #2B1125;
    border-radius: 9999px;
    margin-left: -30px;
    margin-top: -20px;
`

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`

export const LineAbout = styled.div`
    display: flex;
    width: 128px;
    height: 0px;
    border: 3px #2B1125 solid;
    justify-content: right;
    margin-left: -40px;
`

export const Title = styled.h2`
    height: min-content;
    color: white;
    font-size: 24px;
    font-family: Poppins;
    font-weight: 400;
    word-wrap: break-word;
    margin-top: 20px;
    margin-left: -50px;

    @media screen and (min-width: 760px) and (max-width: 1024px){
        font-size: 32px;
    }
`

export const ContentText = styled.div`
    margin-left: -50px;
    margin-top: 10px;
    width: 100%;
    height: auto;
    color: white;
    font-size: 14px;
    font-family: Poppins;
    font-weight: 300;
    line-height: 15px;
    word-wrap: break-word;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        display: flex;
        width: 80%;
        font-size: 18px;
        line-height: 25px;
        height: auto;
    }
`