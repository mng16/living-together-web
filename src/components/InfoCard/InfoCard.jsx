import React from 'react';
import './info-card.scss';

const InfoCard = () => 
    <div className = "info-card">
        <p className = "info-title">Gas</p>
        <InfoLine 
            infoLabel = "Person responsible"
            infoValue = "Marie Kondo" />
        <InfoLine 
            infoLabel = "Bill due"
            infoValue = "1st of the month" />
        <InfoLine 
            infoLabel = "Last bill"
            infoValue = "£80.00"/>
        <InfoLine 
            infoLabel = "Next bill"
            infoValue = "£75.00"/>
        <InfoLine 
            infoLabel = "Bill status"
            infoValue = "PAID"/>
    </div>

const InfoLine = (props) => 
    <div className = "info-line">
        <p className = "info-label">{props.infoLabel}: &nbsp;</p> 
        <p className = "info-value">{props.infoValue}</p>
    </div>

export default InfoCard;