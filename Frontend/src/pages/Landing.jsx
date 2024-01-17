import styled from "styled-components"
import { Hero } from "../components";

export const loader = () => {
    return null;
}

const Landing = () => {
    return (
        <Wrapper>
            <Hero />
            <h2>Landing</h2>
        </Wrapper>
    )
}

export default Landing;

const Wrapper = styled.div`
    padding: var(--page-margin);
    margin: 3.5rem auto;
`