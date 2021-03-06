import React, {FC} from 'react';
import {Author, CardWrapper, Content, HalfStar, Image, Name, Price, Rate, RateContainer, Star} from "./styles";
import {Button} from "../Auth/styles";

interface ICard {
    url: string;
    name: string;
    author: string;
    rate: number;
    price: number;
}

const Card: FC<ICard> = ({url, name, author, rate, price}) => {
    const rateFill = (rate: number) => {
        let stars = [];
        while (rate > 1) {
            stars.push(<Star />);
            rate--;
        }

        if (rate > 0.5) {
            stars.push(<HalfStar />);
        }

        return stars;
    }

    return (
        <CardWrapper>
            <Image src={url} />
            <Content>
                <Name>{name}</Name>
                <Author>{author}</Author>
                <RateContainer>
                    <Rate>{rate}</Rate>
                    <Rate>{rateFill(rate)}</Rate>
                </RateContainer>
                <Price>$ {price}</Price>
                <Button place={'card'} type="submit">Додати в кошик</Button>
            </Content>
        </CardWrapper>
    );
};

export default Card;
