import React from 'react';

const ImageHelper = ({product}) => {
    const imageurl = product ? product.image 
    : `https://unsplash.com/photos/7vQz3JSfEe4`
    return (
        <div className="rounded border border-primary p-2">
            <img 
            src={imageurl}
            style={{ maxHeight: "100%", maxWidth: "100%"}}
            className="mb-3 rounded"
            alt=""
            />

            
        </div>
    );
};

export default ImageHelper;
