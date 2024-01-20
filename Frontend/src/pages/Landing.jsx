import styled from "styled-components"
import { Hero, FeaturedProducts } from "../components";
import axios from 'axios';

const url = 'http://localhost:1337/api/products?filters[FeaturedFits][$eq]=true'

export const loader = async () => {
    const response = await axios.get(url);
    const featuredProducts = response.data.data;
    return { featuredProducts };
}

const Landing = () => {
    return (
        <Wrapper>
            <Hero />
            <FeaturedProducts />
        </Wrapper>
    )
}

export default Landing;

const Wrapper = styled.div`
    padding: var(--page-margin);
    margin: 3.5rem auto;
`