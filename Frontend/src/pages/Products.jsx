import axios from "axios"
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import styled from "styled-components";

const url = 'http://localhost:1337/api/products'

export const loader = async ({ request }) => {
    const response = await axios(url);
    const allProducts = response.data.data;
    const meta = response.data.meta;

    return { allProducts, meta };
}

const Products = () => {
    return (
        <Wrapper>
            <Filters />
            <ProductsContainer />
            <PaginationContainer />
        </Wrapper>
    )
}

export default Products;

const Wrapper = styled.div`
    padding: var(--page-margin);
    margin: 3.5rem auto;
`