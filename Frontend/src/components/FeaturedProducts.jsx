import styled from "styled-components"
import SectionTitle from "./SectionTitle"
import ProductsGrid from "./ProductsGrid"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom"

const FeaturedProducts = () => {
    return (
        <Wrapper>
            <div className="sectionName">
                <SectionTitle text='WEEKLY TRENDING FITS' />
                <Link to='/Products' className="sectionLink">
                    <h3>See all</h3>
                    <FaArrowRight />
                </Link>
            </div>
            <ProductsGrid />
        </Wrapper>
    )
}

export default FeaturedProducts;

const Wrapper = styled.div`
    .sectionName, .sectionLink {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sectionLink {
        gap: .5rem;
        transition: var(--smooth);
    }
    .sectionLink:hover {
        gap: 1rem;
    }
`