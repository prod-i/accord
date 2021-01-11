import React from 'react';
import './Posts.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import { reduxForm } from 'redux-form';

const Posts = React.memo(props => {
    let postsListItem = [...props.posts.postsData]
        .map(item => <Post key={item.id} id={item.id} name={item.name} content={item.content} like={item.like} comment={item.comment} />).reverse();

    const PostInputForm = reduxForm({ form: 'Post' })(PostForm);
    const add = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <>
            <div className="profile__createPost wrapper">
                <p>New post</p>
                <PostInputForm onSubmit={add} />
            </div>

            <div className="posts__wrapper">
                {postsListItem}
            </div>
        </>
    );
});

export default Posts;