import { Link, useLoaderData } from "react-router-dom"
import styled from "styled-components";
import { CartIcon } from "../utils";


const ProductsGrid = () => {
    const { featuredProducts } = useLoaderData();

    return (
        <Wrapper>
            <div className="productContainer">{featuredProducts.map((product) => {
                const { id, attributes } = product;
                const { Title: title, Price: price, ImageLink: img } = attributes;

                return <Link key={id} className="productCard">
                    <div>
                        <div className="imgContainer"><img src={img} alt="product image" className="img" /></div>
                        <div className="productDetails">
                            <h2>{title}</h2>
                            <div className="pricePoint">
                                <div>
                                    <p>Price:</p>
                                    <h2>{price}</h2>
                                </div>
                                <div className="cart">
                                    <CartIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            })}</div>
        </Wrapper>
    )
}

export default ProductsGrid;

const Wrapper = styled.div`
    margin-top: 2rem;
    .productContainer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    .imgContainer {
        overflow: hidden;
        margin: 0 auto;
        padding: 1.5rem;
        height: 25rem;
    }
    .img {
        width: 28rem;
    }
    .productCard {
        display: grid;
        place-items: center;
        border-radius: 1rem;
        overflow: hidden;
    }
    .productDetails{
        /* padding: 2.5rem; */
        outline: 1px solid red;
    }
    .productDetails .pricePoint{
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .pricePoint .cart{
        background: linear-gradient(142deg, rgba(37,99,235,1) 0%, rgba(95,148,250,1) 100%);
        padding: .7rem 1.5rem;
        border-radius: var(--border-radius2);
    }

    @media (max-width:33.75em){
        margin-top: 1.5rem;
    }
`