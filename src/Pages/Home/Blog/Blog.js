import React from 'react';
import imgOne from '../../../images/img4.jpg';
import imgTwo from '../../../images/img1.jpg';
import imgThree from '../../../images/img2.jpg';
import imgFour from '../../../images/img5.jpg';
import './Blog.css';

const Blog = () => {
    return (
        <div className="row g-0">
            <div className="col-6 imgContainer">
                <img src={imgOne} alt="" className="blogHero pe-md-1 pe-1" />
            </div>
            <div className="col-6">
                <div className="row g-0">
                    <div className="col-6 imgContainer">
                        <img src={imgTwo} alt="" className="blogImage ps-1 pb-1 pb-md-2" />
                    </div>
                    <div className="col-6 imgContainer">
                        <img src={imgThree} alt="" className="blogImage ps-2 pb-1 pb-md-2" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 imgContainer">
                        <img src={imgFour} alt="" className="blogImage ps-1" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;
