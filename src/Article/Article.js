import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <div>
            <article className='blog-container'>
                <h1>1. How React Works?</h1>
                <p>React is a javascript libries, use to create user interface. React combined the data and wehen rendering into browser create a virtual dom copy. When a data is changed react compare the previous virtual dom copy and new virtual dom copy and create a new virtual dom copy with updated data and only updates dom where nessesary.</p>
            </article>
            <article className='blog-container'>
                <h1>1. How React Works</h1>
                <div className='blog'>
                    <div>
                        <h3>Props</h3>
                        <p>1. Passed data from one component to another.</p>
                        <p>2. Props are read only.</p>
                        <p>3. Props is immutable.</p>
                    </div>
                    <div>
                        <h3>State</h3>
                        <p>1. Passed data within the component only.</p>
                        <p>2. State is read and write both.</p>
                        <p>3. State is mutable.</p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Article;