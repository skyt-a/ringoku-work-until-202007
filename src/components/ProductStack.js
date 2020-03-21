import React from 'react';
import styled from 'styled-components';

const ProductStack = (props) => (
    <ProductItems>
        {props.products.map((skill) => (
            <ProductItem>
                <ProduckLink href={skill.url} rel="noopener noreferrer" target="_blank">
                    <ProductImage src={skill.img} alt="" />
                    <ProductName>{skill.name}</ProductName>
                </ProduckLink>
            </ProductItem>
            )
        )}
    </ProductItems>
);

const ProductItems = styled.ul`
    display: grid;
    row-gap: 8px;
    column-gap: 12px;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 100%);
    }
`;

const ProductItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    cursor: pointer;

    &:hover {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
`

const ProduckLink = styled.a`
    width: 100%;
    text-align: center;
    text-decoration: none;
    border-bottom: none;
    color: gray;
`;

const ProductName = styled.p`
    text-align: center;
    font-weight: 700;
`;

const ProductImage = styled.img`
    width: 80%;
    object-fit: cover;
`;

export default ProductStack;