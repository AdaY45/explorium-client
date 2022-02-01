import { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import Search from "./Search/Search";
import { HeaderNav, HeaderWrapper, LinkElem, Category, ImageLogo, Logo, Container, ShopCart } from "./styles";

const Header = () => {
    const [isVisible, setVisible] = useState(false);

    return (
        <HeaderWrapper>
            <HeaderNav>
                <Container>
                    <LinkElem to="/"><Logo>expl<ImageLogo src={require('../../assets/images/Vector.png')} />rium</Logo></LinkElem>
                    <Category to="/category" onMouseEnter={() => { setVisible(prev => !prev) }}>Категории</Category>
                </Container>
                <Container>
                    <Search />
                    <LinkElem to="/shop-cart"><ShopCart /></LinkElem>
                    <LinkElem to="/login">sing in</LinkElem>
                </Container>
            </HeaderNav>
        </HeaderWrapper>
    );
};

export default Header;
