import * as S from "./style"
import { IoCloseOutline } from "react-icons/io5";

export const Dropdown = ({showMenu, setShowMenu}) => {

    const closeDropdown = () => {
        setShowMenu(false);
    };

    return(
        <S.Container showMenu={showMenu}>
            <S.ContainerCloseDropdown>
                <S.Title>CR©</S.Title>
                <S.ButtonClose onClick={closeDropdown}>
                    <IoCloseOutline>

                    </IoCloseOutline>
                </S.ButtonClose>
            </S.ContainerCloseDropdown>
            <S.Line></S.Line>

            <S.ContainerSections>
                <S.Sections>
                    <S.ContentSections>
                        About me
                    </S.ContentSections>
                    <S.LineSections></S.LineSections>
                </S.Sections>

                <S.Sections>
                    <S.ContentSections>
                        Curriculum
                    </S.ContentSections>
                    <S.LineSections></S.LineSections>
                </S.Sections>

                <S.Sections>
                    <S.ContentSections>
                        Projects
                    </S.ContentSections>
                    <S.LineSections></S.LineSections>
                </S.Sections>

                <S.Sections>
                    <S.ContentSections>
                        Contacts
                    </S.ContentSections>
                    <S.LineSections></S.LineSections>
                </S.Sections>
            </S.ContainerSections>

        </S.Container>
    )
}