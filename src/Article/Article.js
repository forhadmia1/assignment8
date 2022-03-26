import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <div>
            <div className='top-blog-container'>
                <article className='blog-container'>
                    <h1>1. How React Works?</h1>
                    <p>React is a javascript library, use to create the user interface. React combined the data and when rendering into the browser create a virtual dom copy. When data is changed react compare the previous virtual dom copy and new virtual dom copy and create a new virtual dom copy with updated data and only updates dom where necessary.</p>
                </article>
                <article className='blog-container'>
                    <h1>2. How useState Works?</h1>
                    <p>UseState is a react hook, that contains a variable and a function. At the first time when a component loads usestate set the initial value to its variable. When changing the state then the setState function assign and update the new value to the usestate variable and finally rerender the function.</p>
                </article>
            </div>
            <article className='blog-container'>
                <h1>3. What are the difference between props and state?</h1>
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