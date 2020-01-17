import React from 'react';
import './info-card.scss';

const InfoCard = ({houseData}) => 
    <div className = "info-card">
        <p className = "info-title">{houseData.infoTitle}</p>
        <InfoLine 
            infoLabel = "Person responsible"
            infoValue = {houseData.personResponsible} />
        <InfoLine 
            infoLabel = "Bill due"
            infoValue = {houseData.paymentDue} />
        <InfoLine 
            infoLabel = "Last bill"
            infoValue = {houseData.lastBill} />
        <InfoLine 
            infoLabel = "Next bill"
            infoValue = {houseData.nextBill} />
        <InfoLine 
            infoLabel = "Split"
            infoValue = {houseData.split[0]}/>
    </div>

const InfoLine = (props) => 
    <div className = "info-line">
        <p className = "info-label">{props.infoLabel}: &nbsp;</p> 
        <p className = "info-value">{props.infoValue}</p>
    </div>

export default InfoCard;