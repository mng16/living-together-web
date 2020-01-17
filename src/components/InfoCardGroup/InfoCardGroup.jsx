import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const CardGroup = ({ houseData }) => houseData.map((data) => (
    <InfoCard houseData = {data} />
    )
);

export default CardGroup;