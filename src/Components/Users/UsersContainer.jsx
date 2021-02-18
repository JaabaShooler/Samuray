import React from "react";
import {connect} from "react-redux";
import Users from "./Users"
import {
    followThunk,
    unfollowThunk,
    getUsersThunkCreator
} from "../../Redux/UserReducer";
class UsersContainer extends React.Component{
    componentDidMount() {
        if(this.props.users.length == 0){
            this.props.getUsers();
        }
    }

    render() {
        return <>{this.props.isAuth
            ?
            <Users
                currentUser={this.props.currentUser}
                showMore={this.showMore}
                isFeaching={this.props.isFeaching}
                totalCount={this.props.totalCount}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                following={this.props.following}
        />
        :
            <></>
        }
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.UserPage.users,
        isFeaching: state.UserPage.isFeaching,
        totalCount: state.UserPage.totalCount,
        following: state.UserPage.following,
        currentUser: state.AuthPage.user,
        isAuth: state.AuthPage.isAuth
    }
}

export default connect(mapStateToProps, {follow: followThunk, unfollow: unfollowThunk, getUsers: getUsersThunkCreator})(UsersContainer)