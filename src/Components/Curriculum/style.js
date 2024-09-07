import styled from "styled-components"

export const ContainerCurriculum = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    background-color: #111A1B;
`

export const Curriculum = styled.h2`
    height: min-content;
    color: white;
    font-size: 24px;
    font-family: Poppins;
    font-weight: 400;
    word-wrap: break-word;
    margin-bottom: 40px;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        font-size: 32px;
    }

`

export const ContainerTitle = styled.div`
    min-width: 150px;
    width: 50%;
    height: 18px;
`

export const TextTitle = styled.p`
    color: white;
    font-size: 14px;
    font-family: Poppins;
    font-weight: 500;
    word-wrap: break-word;

    @media screen and (min-width: 760px) and (max-width: 1024px){
        font-size: 24px;
    }
`

export const MyData =styled.div`
    width: 50%;
    height: auto;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: flex-end;
    display: inline-flex;
`

export const Text = styled.p`
    align-self: stretch;
    color: white;
    font-size: 12px;
    font-family: Poppins;
    font-weight: 400;
    word-wrap: break-word;

    @media screen and (min-width: 760px) and (max-width: 1024px){
        font-size: 16px;
    }
`

export const ContainerTitleData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const ContainerExperience = styled.div`
    max-width: 230px;
    height: auto;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    display:flex;

    @media screen and (min-width: 760px) and (max-width: 1024px){
        margin-top: 20px;
    }
`

export const ContainerSkills = styled.div`
        width: 95%;
        height: auto;
        flex-direction: column;
        justify-content: flex-start; 
        align-items: flex-start;
        gap: 12px;
        display: inline-flex;
        margin-top: 10px;

        @media screen and (min-width: 760px) and (max-width: 1024px){
            margin-top: 40px;
        }
`

export const Subtitle = styled.p`
    align-self: stretch;
    color: white;
    font-size: 12px;
    font-family: Poppins;
    font-weight: 700;
    word-wrap: break-word;
    margin-bottom: 5px;

    @media screen and (min-width: 760px) and (max-width: 1024px){
        font-size: 16px;
    }
`

export const ContainerCoursers = styled.div`
    width: 50%;
    height: auto;
    margin-top: 20px;
`

export const LinksCoursers = styled.a`
    align-self: stretch;
    color: white;
    font-size: 12px;
    font-family: Poppins;
    font-weight: 400;
    word-wrap: break-word;
    margin-top: 5px;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 760px) and (max-width: 1024px){
        font-size: 16px;
        margin-top: 20px;
    }

`

export const Year = styled.span`
    color: white;
    font-size: 12px;
    font-family: Poppins;
    font-weight: 700;
    word-wrap: break-word;
    display: flex;
    justify-content: center;
`
