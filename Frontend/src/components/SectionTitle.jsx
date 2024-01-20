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
        text-transform: capitalize;
    }
    @media (max-width:33.75em){
        margin-top: 3rem;
    }
`