 import React from 'react';

 function Example({
    header,
    title,
    text = "",
    direction = "verticle"
 }) {
    return (
        <><h1 className={`container-test ${direction}`}>Hello world</h1>
        {header ? <h2>{header}</h2>: null}
        <h3 className={`${text}`}>Name</h3>
        </>
    )
 }
 export default Example
 