import React, {Component} from 'react';

class ManageInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            houseData: [],

            showModal: false
        };
        console.log("in constructor");
    }

    componentDidMount = async () => {
        const componentRef = this;
        console.log("in componentDidMount()");
        axios.get('http://localhost:4000/housedata')
            .then(response => {
                componentRef.setState({
                    houseData: response.data
                });
            })
          .catch(function (error) {
                console.log(error);
            });
    }

    handleInformationUpdate = () => {
        
        axios.get('http://localhost:4000/housedata')
            .then(response => {
                this.setState({
                    houseData: response.data
                });
            })
          .catch(function (error) {
                console.log(error);
            });

        console.log("in handleNewInfo() in ManageInfo");
    }

    render() {
        return (
            <>
                {/* <div className = "add-new-info-button">
                    <FormModal
                        openModalButton = {
                            <button className="basic-styled-button">Add New Information</button>
                        }
                        key = "createNewInfo"
                        formType = 'create'
                        formTitle = "Add New Information"
                        formDescription = "Please fill in the details of the information you want to add below."
                        houseData = {this.state.houseData}
                        handleInformationUpdate = {this.handleInformationUpdate}
                    />
                </div>
         */}
                <InfoTable 
                    houseData= {this.state.houseData}
                    handleInformationUpdate = {this.handleInformationUpdate} />
            </>
        );
    }
}

export default ManageInfo;