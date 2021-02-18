import React from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../Preloader/Preloader";

class ProfileInfoContainer extends React.Component{

    render(){
        return ( <>{ this.props.allInfo ? <ProfileInfo
                name={this.props.allInfo.name}
                surname={this.props.allInfo.surname}
                nickname={this.props.allInfo.nickname}
                img={this.props.allInfo.img}
                sex={this.props.allInfo.sex}
                city={this.props.allInfo.description.location.city}
                website={this.props.allInfo.description.website}
            /> : <Preloader/>}</>

        );
    }
}

let mapStateToProps = (state) => {return {allInfo: state.AuthPage.user}}


export default connect(mapStateToProps, {})(ProfileInfoContainer);