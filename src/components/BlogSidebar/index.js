import React from 'react'
import {Link} from 'react-router-dom'
import Search from '../../components/search'

import post1 from '../../images/recent-posts/img-1.jpg'
import post2 from '../../images/recent-posts/img-2.jpg'
import post3 from '../../images/recent-posts/img-3.jpg'

class BlogSidebar extends React.Component {
    render() {
        return (
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search</h3>
                    <Search/>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link to='/Blog-details'>Wedding Party</Link></li>
                        <li><Link to='/Blog-details'>Event</Link></li>
                        <li><Link to='/Blog-details'>Our Story</Link></li>
                        <li><Link to='/Blog-details'>Our gallery</Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Recent post</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={post1} alt="post" />
                            </div>
                            <div className="details">
                                <h4><Link to='/Blog-details'>Actual teachings of the great explorer of the truth.</Link></h4>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={post2} alt="post" />
                            </div>
                            <div className="details">
                                <h4><Link to='/Blog-details'>The truth, the master-builder of human happiness</Link></h4>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={post3} alt="post" />
                            </div>
                            <div className="details">
                                <h4><Link to='/Blog-details'>Explorer of the truth, the master-builder of human happiness</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link to='/Blog-details'>Wedding</Link></li>
                        <li><Link to='/Blog-details'>Wedding Event</Link></li>
                        <li><Link to='/Blog-details'>Party</Link></li>
                        <li><Link to='/Blog-details'>Gift</Link></li>
                        <li><Link to='/Blog-details'>Story</Link></li>
                        <li><Link to='/Blog-details'>First Metting</Link></li>
                        <li><Link to='/Blog-details'>Love</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BlogSidebar;