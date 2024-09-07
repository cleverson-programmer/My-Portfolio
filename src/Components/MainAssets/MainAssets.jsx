import React from 'react'
import * as S from "./style"
import image1 from "./malha-main.png"


export const MainAssets = () =>{
    return(
        <>
            <S.ContainerImageMain>
                <S.ImageMain src={image1}></S.ImageMain>
            </S.ContainerImageMain>
        </>
    );
}