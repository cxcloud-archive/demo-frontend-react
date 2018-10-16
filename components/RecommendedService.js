import React from 'react';

export default ({
    productId,
    productName,
    productCode,
    productHighlight,
    price,
    longDescription,
    productShortDescription,
    image
}) => {
    return (
        <div className="RecommendedService">
            <div>
                <div className="subContainer">
                    <div>
                        <img className="solarEnergy-icon" src={image} alt="blank" />
                    </div>
                    <div className="details">
                        <h2 className="medium bold">{productName}</h2>
                        <h2 className="medium bold">{productCode}</h2>
                    </div>
                </div>
                <p>10 sq. installed on your roof</p>
                <p>Top of the line sun panels</p>
                <p>Installation FREE</p>
                <p className="bold">$ {price}/mo maintenance fee</p>
                <p>{productHighlight}
                </p>
            </div>
            <div className="container-readMore">
                <button className="readMore"><a href={'/Product?id=' + productId}>Read more ></a></button>
            </div>
            <style jsx>
                {`
                    .RecommendedService {
                        padding: 30px;
                        max-width: 20em;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .subContainer {
                        display: flex;
                        align-items: center;
                    }
                    .solarEnergy-icon {
                        height: 64px;
                        width: 64px;
                    }
                    .details {
                        margin-left: 20px;
                    }
                `}
            </style>
        </div>
    );
}