import styled from "styled-components"

const SectionTitle = ({ text }) => {
    return (
        <Wrapper>
            <h2 className="sectionTitle">{text}</h2>
        </Wrapper>
    )
}

export default SectionTitle

const Wrapper = styled.div`
    margin-top: 5rem;
    .sectionTitle{
        margin-bottom: 2rem;
        text-transform: capitalize;
        color: var(--Blue1);
    }
    @media (max-width:33.75em){
        margin-top: 3rem;
        .sectionTitle{
            margin-bottom: 1.5rem;
        }
    }
`