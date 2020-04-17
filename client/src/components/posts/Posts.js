import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../layout/spinner';
import {getPosts} from '../../actions/post';

const Posts = ({getPosts, posts: {posts, loading}}) => {

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <div>
            
        </div>
    )
}

Posts.propTypes = {

    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    posts: state.post
})

export default connect(mapStateToProps, {getPosts})(Posts);
