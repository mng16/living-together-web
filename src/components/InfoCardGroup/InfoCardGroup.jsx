import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './info-card-group.scss';

const CardGroupContents = ({ houseData }) => houseData.map((data) => (
    <InfoCard houseData = {data} />
    )
);

const CardGroup = ({houseData}) => 
    <section className = "card-group">
        <CardGroupContents houseData = {houseData} />
    </section>

export default CardGroup;