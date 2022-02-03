import React, { FC } from 'react';
import { Author, CardWrapper, Content, HalfStar, Image, Name, Price, Rate, RateContainer, Star } from "./styles";
import { Button } from "../Auth/styles";

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

        /* Продумать логику */

        while (parseInt(rate.toFixed(0)) > 1) {
            stars.push(<Star />);
            rate--;
        }

        if (parseInt(rate.toString().split('.')[1]) > 5) {
            stars.push(<HalfStar />);
        }

        return stars;
    }

    return (
        <CardWrapper>
            <Image src={url} />
            <Content>
                <Name>{name.slice(0, 60)}</Name>
                <Author>{author}</Author>
                <RateContainer>
                    <Rate>{rate}</Rate>
                    <Rate>{rateFill(rate)}</Rate>
                </RateContainer>
                <Price>{price.toString().split('.').join(',')} $</Price>
                <Button place={'card'} type="submit">Додати в кошик</Button>
            </Content>
        </CardWrapper>
    );
};

export default Card;
