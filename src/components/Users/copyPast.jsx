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