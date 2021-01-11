import React, { useState } from 'react';
import './UsersC.css';
import Users from './Users'
import { compose } from 'redux';
import { connect } from "react-redux"
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import { setCurrentPage, getUsersTC, followTC, unfollowTC } from '../../redux/usersReducer';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgres, getSetMyFollows } from '../../redux/usersSelector';


class UsersAPI extends React.Component {
    componentDidMount() {
        const {currentPage, pageUsersSize} = this.props;
        this.props.getUsersTC(currentPage, pageUsersSize);
    }
    onPageChanged = (currentPage) => {
        const {pageUsersSize} = this.props;
        this.props.getUsersTC(currentPage, pageUsersSize);
    }
    render() {
        const {totalUsersCount, pageUsersSize} = this.props;
        let pagesUsersCount = Math.ceil(totalUsersCount / pageUsersSize);
        let pages = [];
        for (let i = 1; i <= pagesUsersCount; i++) {
            pages.push(i);
        }
        return (
            <div className="Users">
                <div className="container">
                    <div className="users__wrapper wrapper">
                        <div className="users_inner">
                            <div className='users_UsersSide'>
                                <div className="users__selectedPage_wrapper">
                                    {<Paginator
                                        totalItemsCount={this.props.totalUsersCount}
                                        pageUsersSize={this.props.pageUsersSize}
                                        currentPage={this.props.currentPage}
                                        onPageChanged={this.onPageChanged}
                                    />}
                                </div>
                            {this.props.isFetching
                                ? <Preloader />
                                : <Users
                                    usersData={this.props.usersData}
                                    followTC={this.props.followTC}
                                    unfollowTC={this.props.unfollowTC}
                                    followingProgres={this.props.followingProgres}
                                />}
                            </div>
                            <div className='users_OptionSide'>
                                <span className='users_options__item'>All Users</span>
                                <span className='users_options__item'>My follows</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        usersData: getUsers(state),
        pageUsersSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgres: getFollowingProgres(state),
    }
}

export default compose
    (
        connect(mapStateToProps, { followTC, unfollowTC, setCurrentPage, getUsersTC, }),
    )(UsersAPI);