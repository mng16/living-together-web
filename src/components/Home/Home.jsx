import React, { Component } from 'react';
import InfoCard from '../InfoCard/InfoCard';
// import mockHomeData from '../../mocks/mockHomeData';
import InfoCardGroup from '../InfoCardGroup/InfoCardGroup';
import './home.scss';

const mockHomeData = [
    {
        "infoTitle": "Gas",
        "company": "British Gas",
        "personResponsible": "Marie Kondo",
        "paymentlDue": "first of month",
        "lastBill": 80.00,
        "nextBill": 75.00,
        "split": ["equal"]
    },
    {
        "infoTitle": "Gas",
        "company": "British Gas",
        "personResponsible": "Marie Kondo",
        "paymentlDue": "first of month",
        "lastBill": 80.00,
        "nextBill": 75.00,
        "split": ["equal"]
    },
    {
        "infoTitle": "Gas",
        "company": "British Gas",
        "personResponsible": "Marie Kondo",
        "paymentlDue": "first of month",
        "lastBill": 80.00,
        "nextBill": 75.00,
        "split": ["equal"]
    },
    {
        "infoTitle": "Gas",
        "company": "British Gas",
        "personResponsible": "Marie Kondo",
        "paymentlDue": "first of month",
        "lastBill": 80.00,
        "nextBill": 75.00,
        "split": ["equal"]
    },
    {
        "infoTitle": "Gas",
        "company": "British Gas",
        "personResponsible": "Marie Kondo",
        "paymentlDue": "first of month",
        "lastBill": 80.00,
        "nextBill": 75.00,
        "split": ["equal"]
    },
    {
        "infoTitle": "Gas",
        "company": "British Gas",
        "personResponsible": "Marie Kondo",
        "paymentlDue": "first of month",
        "lastBill": 80.00,
        "nextBill": 75.00,
        "split": ["equal"]
    },
    {
        "infoTitle": "Rent",
        "company": "Grantham Lettings",
        "personResponsible": "Antoni Porowski",
        "paymentDue": "3rd of month",
        "lastBill": 2000.00,
        "nextBill": 2000.00,
        "split": ["equal"]
    }
    
];

class Home extends Component {
    constructor(props) {
        super(props);
            this.state = {
                homeInfo: []
            };
    }

    componentDidMount = async () => {
        let componentRef = this;
        componentRef.setState ( {
            homeInfo: mockHomeData
        });
    }

    render() {
        return (
            <main className = "home-main">
                <InfoCardGroup houseData = {mockHomeData} />
            </main>
        );
    }
}

export default Home;