import { Link, useLoaderData } from "react-router-dom"
import styled from "styled-components";

const ProductsGrid = () => {
    const { featuredProducts } = useLoaderData();
    console.log(featuredProducts);
    return (
        <Wrapper>
            <div>{featuredProducts.map((product) => {
                const { id, attributes } = product;
                const { Title: title, Price: price, ImageLink: img } = attributes;
                console.log(img);
                return <Link key={id}>
                    <div>
                        <div><img src={img} alt="product image" className="img" /></div>
                        <h3>{title}</h3>
                        <div>
                            <div>
                                <p>price</p>
                                <p>{price}</p>
                            </div>
                            <div>
                                <p>cart icon</p>
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
    .img {
        max-width: 10rem;
        max-height: 10rem;
    }

    @media (max-width:33.75em){
        margin-top: 1.5rem;
    }
`