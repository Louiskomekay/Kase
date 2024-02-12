import styled from "styled-components"
import { Hero, FeaturedProducts } from "../components";
import axios from 'axios';

const featuredFitsUrl = 'http://localhost:1337/api/products?filters[FeaturedFits][$eq]=true'
const featuredHypedUrl = 'http://localhost:1337/api/products?filters[FeaturedHyped][$eq]=true'
const featuredHottestUrl = 'http://localhost:1337/api/products?filters[FeaturedHottest][$eq]=true'

export const loader = async () => {
    //Featured Fits
    const featuredFitsResponse = await axios.get(featuredFitsUrl);
    const featuredFitsProducts = featuredFitsResponse.data.data;

    //Featured Hyped
    const featuredHypedResponse = await axios.get(featuredHypedUrl);
    const featuredHypedProducts = featuredHypedResponse.data.data;

    //Featured Hottest
    const featuredHottestResponse = await axios.get(featuredHottestUrl);
    const featuredHottestProducts = featuredHottestResponse.data.data;

    return { featuredFitsProducts, featuredHypedProducts, featuredHottestProducts };
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