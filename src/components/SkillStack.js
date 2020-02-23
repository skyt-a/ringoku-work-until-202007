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
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const SkillItem = styled.li`
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

const SkillName = styled.p`
    text-align: center;
    font-weight: 700;
`;

const SkillImage = styled.img`
    height: 200px;
    object-fit: cover;
`;

export default SkillStack;