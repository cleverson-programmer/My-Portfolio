
import styled from 'styled-components'

export const StyledHeader = styled.header`
    height: ${({ height }) => height}px;
    display: flex;
    min-height: 100dvh;
`

export const divLogo = styled.div`
    display: flex;
    margin-left: 8px;
    margin-top: 20px;
`

export const spanLogo1 = styled.span`
    color:#02FF04;
    font-size: 20px;
    font-family:Poppins;
    font-weight: 700;
    word-wrap: break-word;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        font-size: 40px;
    }
`

export const spanLogo2 = styled.span`
    color: #02FF04;
    font-size: 12px;
    font-family: Poppins;
    font-weight: 700;
    word-wrap: break-word;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        font-size: 24px;
    }

`

export const divHeaderLeft = styled.div`
    min-height: 100dvh;
    width: 50%;
    background: #2B1125;

`

export const divHeaderRight = styled.div`
    width: 50%;
    min-height: 100dvh;
    background: #111A1B;

`

export const divMenuDropdown = styled.div`
    width: 100%;
    height: 32px;
    padding-left: 4px;
    padding-right: 8px;
    margin-top: 20px;
    justify-content: right;
    align-items: center;
    display: inline-flex;
    color: #D9D9D9;
    font-size: 30px;
    cursor: pointer;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        height: 40px;
        font-size: 40px;
    }
`

export const SocialMedia = styled.div`
    width: min-content;
    display: flex;
    position: absolute;
    top: 35dvh;
    right: 1dvh;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        width: min-content;
        position: absolute;
        top: 30dvh;
        right: 3dvh;
    }
`

export const SocialMediaIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    color: white;
    font-size: 32px;
    gap: 30px;
    width: 50px;
    cursor: pointer;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        font-size: 42px;
    }
    
`

export const ContainerWhatsapp = styled.a`
    display: flex;
    position: absolute;
    top: 70vh;
    right: 10%;
    color: #02FF04;
    font-size: 100px;
    cursor: pointer;
    animation: pulse 1.5s infinite;

    @keyframes pulse {
    0% {
        transform: scale(0.4);
        opacity: 1;
    }
    50% {
        transform: scale(0.6);
        opacity: 0.8;
    }
    100% {
        transform: scale(0.4);
        opacity: 1;
    }
}

@media screen and (min-width: 760px) and (max-width: 3024px){
        font-size: 120px;
        right: 0;
    }

`

export const divArrowDown = styled.div`
    display: flex;
    color: white;
    font-size: 1.2rem;
    width: 100%;
    margin-top: 88dvh;
    margin-left: -10px;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        font-size: 2rem;
        margin-top: 85vh;
        margin-left: -16px;
    }
`

export const ContainerSkills = styled.div`
    width: 160px;
    height: 40px;
    display: flex;
`

export const HardSkills = styled.div`
    width: 80px;
    height: 40px;
    background-color: #111A1B;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    cursor: pointer;
    position: absolute;
    overflow: hidden;
    rotate: calc(-90deg);
    right: 0;
    top: 15dvh;
    border-bottom: 2px solid white;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #04E706;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 350ms ease-in;
        z-index: 0;
    }

    &:hover::before {
        transform: scaleX(1);
    }

    & > * {
        position: relative;
        z-index: 1;
        color: #fff;
    }

    @media screen and (min-width: 760px) and (max-width: 3024px){
        width: 100px;
        height: 40px;
    }

`

export const TextHardSkills = styled.p`
    text-align: center;
    color: white;
    font-size: 0.8rem;
    font-family: Poppins;
    font-weight: 500;
    word-wrap: break-word;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        font-size: 1rem;
    }
`

export const SoftSkills = styled.div`
    width: 80px;
    height: 40px;
    background-color: #2B1125;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    cursor: pointer;
    position: absolute;
    overflow: hidden;
    left: 0;
    bottom: 15dvh;
    rotate: calc(-90deg);
    border-top: 2px solid white;
    margin-left: -10px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 350ms ease-in;
        z-index: 0;
    }

    &:hover::before {
        transform: scaleX(1);
        transform-origin: left;
    }

    & > * {
        position: relative;
        z-index: 1;
        color: #fff;
    }

    @media screen and (min-width: 760px) and (max-width: 3024px){
        width: 100px;
        height: 40px;
    }
`

export const TextSoftSkills = styled.p`
    text-align: center;
    color: white;
    font-size: 0.8rem;
    font-family: Poppins;
    font-weight: 500;
    word-wrap: break-word;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        font-size: 1rem;
    }
`

export const LineSkilks = styled.div`
    width: 70px; 
    height: 10px; 
    transform: rotate(90deg); 
    transform-origin: 0 0; 
    border: 1px white solid;
    position: absolute;
    top: 0;
    left: 0;
`