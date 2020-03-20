import React from 'react';
import styled from 'styled-components';

const SkillStack = (props) => (
    <SkillItems>
        {props.skills.map((skill) => (
            <SkillItem>
                <SkillImage src={skill.img} alt="" />
                <SkillName>{skill.name}</SkillName>
            </SkillItem>
            )
        )}
    </SkillItems>
);

const SkillItems = styled.ul`
    display: grid;
    row-gap: 8px;
    column-gap: 12px;
    grid-template-columns: repeat(4, 1fr);
    margin: 0;
    list-style: none;

    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const SkillItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 8px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    cursor: pointer;

    &:hover {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
`

const SkillName = styled.p`
    position: absolute;
    bottom: -8px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
`;

const SkillImage = styled.img`
    width: 80%;
    object-fit: contain;
`;

export default SkillStack;