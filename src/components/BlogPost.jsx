import React, { Component } from 'react'
import BlogImage from '../images/asset.blog.jpg'

class BlogPost extends Component {

    render() {
        return (
            <div className="blog-post">
                <div class="blog-post__content">
                    <div className="blog-post__content__title">
                        <h2 class="heading heading--big">Blog post 1</h2>
                    </div>
                    <div className="blog-post__content__copy">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam</p>
                    </div>
                </div>
                <div className="blog-post__image">
                    <img src={BlogImage} alt="Blog Post"></img>
                </div>
            </div>
        )
    }
}

export default BlogPost
