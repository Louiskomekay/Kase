import styled from "styled-components"
import SectionTitle from "./SectionTitle"
import ProductsGrid from "./ProductsGrid"

const FeaturedProducts = () => {
    return (
        <div>
            <SectionTitle text='WEEKLY TRENDING FITS' />
            <ProductsGrid />
        </div>
    )
}

export default FeaturedProducts;