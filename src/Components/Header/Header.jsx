
import React, { useState, useEffect } from 'react'
import * as S from "./style"
import { RiMenuFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";
import { Dropdown } from '../Dropdown/Dropdown';

export const Header = () =>{

    const [showMenu, setShowMenu] = useState(false);

    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToNextSection = () => {
        window.scrollTo({
          top: window.innerHeight, // 100% do viewport
          behavior: 'smooth', // Rolagem suave
        });
    };

    return(
        <div>
            <S.StyledHeader height={height} >
                <S.divHeaderLeft>
                    <S.divLogo>
                        <S.spanLogo1 data-testId="logo">
                            CR
                        </S.spanLogo1>
                        <S.spanLogo2>
                            @
                        </S.spanLogo2>
                    </S.divLogo>

                        <S.ContainerSkills>
                            <S.HardSkills>
                                <S.TextHardSkills>
                                    Hard-Skills
                                </S.TextHardSkills>
                                
                            </S.HardSkills>
                        </S.ContainerSkills>

                        <S.ContainerSkills>
                            <S.SoftSkills>
                                <S.TextSoftSkills>
                                    Soft-Skills
                                </S.TextSoftSkills>
                            </S.SoftSkills>
                        </S.ContainerSkills>
                </S.divHeaderLeft>
                <S.divHeaderRight>
                    <S.divMenuDropdown onClick={() => setShowMenu(!showMenu)}>
                       <RiMenuFill></RiMenuFill>
                        
                    </S.divMenuDropdown>

                    <S.SocialMedia>
                        <S.SocialMediaIcons>
                            <MdOutlineMailOutline></MdOutlineMailOutline>
                            <FiGithub></FiGithub>
                            <FaLinkedinIn></FaLinkedinIn>
                        </S.SocialMediaIcons>
                    </S.SocialMedia>

                    <S.ContainerWhatsapp href='https://wa.me/553399373400' target='_blank'>
                        <RiWhatsappFill></RiWhatsappFill> 
                    </S.ContainerWhatsapp>

                    <S.divArrowDown onClick={scrollToNextSection}>
                        <FaArrowDown></FaArrowDown>
                    </S.divArrowDown>

                    <Dropdown showMenu={showMenu} setShowMenu={setShowMenu} />
                </S.divHeaderRight>
            </S.StyledHeader>
        </div>
    )
}