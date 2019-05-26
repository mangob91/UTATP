import React from 'react';
import UTATPHeader from "../components/UTATPHeader";

export class UTATPContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clickedNotice: true,
            clickedAttendance: false,
            clickedLogIn: false,
            clickedBoard: false,
        }
    }

    handleClickedNotice = () => {
        this.setState({
            clickedNotice: true,
            clickedAttendance: false,
            clickedLogin: false,
            clickedBoard: false,
        });
    };

    handleClickedAttendance = () => {
        this.setState({
            clickedAttendance: true,
            clickedNotice: false,
            clickedLogin: false,
            clickedBoard: false,
        });
    };

    handleClickedLogin = () => {
        this.setState({
            clickedLogin: true,
            clickedNotice: false,
            clickedAttendance: false,
            clickedBoard: false,
        });
    };

    handleClickedBoard = () => {
        this.setState({
            clickedBoard: true,
            clickedNotice: false,
            clickedAttendance: false,
            clickedLogin: false,
        })
    };

    render(){
        return(
            <div>
                <UTATPHeader/>
            </div>
        );
    }
}
