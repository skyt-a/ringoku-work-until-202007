import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const historyData = [
    {  time: '1993.1.8', desc: '岐阜県に生まれる'},
    {  time: '2011.4', desc: '横浜国立大経営学部経営システム科学科入学'},
    {  time: '2015.3', desc: '横浜国立大経営学部経営システム科学科卒業'},
    {  time: '2015.4', desc: 'SIerに入社、プログラミングに出会う'},
    {  time: '2019.8', desc: 'フリーランスとして独立'},
];

const HistorySection = ({ time, desc}) => (
    <Section>
        <Time>{time}</Time>
        <Content>{desc}</Content>
    </Section>
)

const History = () => {
    const [wrapperRef, isIntersectedWrapper] = useIntersectionObserver();
    const histories = historyData.map((history, index) => {
        return <HistorySection key={index} time={history.time} desc={history.desc} className={`history-section`} />
    });
    console.log(isIntersectedWrapper);
    return (
        <Wrapper ref={wrapperRef} isIntersected={isIntersectedWrapper}>
            {histories}
        </Wrapper>
    );
}

const build = keyframes`
    from {
        height: 0;
    }
    to {
        height: 100%;
    }
`;

const scaleUp = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const Section = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 0 24px 24px;

    &::before {
        position: absolute;
        left: -8px;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        margin: auto;
        background-color: ${props => props.theme.secondary};
        content: '';
        will-change: transform;
        transform: scale(0);
    }

    &:nth-child(even) {
        &::before {
            background-color: ${props => props.theme.primary};
        }
    }
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    padding-left: 5px;
    ${({ isIntersected }) => 
        isIntersected && css`
            &::before {
                animation: ${build} 1s forwards;
            }
            & > ${Section} {
                &::before {
                    animation: ${scaleUp} 1s forwards;
                }
            }
            `
    }

    &::before {
        position: absolute;
        left: 0;
        width: 4px;
        height: 0;
        background: linear-gradient(to bottom, ${props => props.theme.primary}, ${props => props.theme.secondary});
        content: '';
        will-change: transform;
    }
    
`;

const Time = styled.div`
    flex-shrink: 0;
    width: 80px;
    font-size: 1.8rem;
`;

const Content = styled.p`
    margin: 0;
`;

export default History;