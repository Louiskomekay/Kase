import { useNavigate, useLoaderData, useLocation } from "react-router-dom";
import styled from "styled-components";

const PaginationContainer = () => {
    const { meta, searchParams } = useLoaderData();
    const { page, pageCount } = meta.pagination;
    let allProductsUrl = import.meta.env.VITE_APP_API_URL + "/products?";

    const pages = Array.from({ length: pageCount }, (_, index) => {
        return index + 1;
    });
    const { search, pathname } = useLocation();
    const navigate = useNavigate();

    // const handlePageChange = (pageNumber) => {
    //     const searchParams = new URLSearchParams(search);
    //     searchParams.set('pagination[page]', pageNumber);
    //     navigate(`${pathname}?${searchParams.toString()}`);
    // }
    const handlePageChange = (pageNumber) => {
        for (const [key, value] of Object.entries(searchParams)) {
            if (value === "" || value == "All") continue;

            if (key === "pagination")
                allProductsUrl += `pagination[page]=${pageNumber}`;
        }
    }

    if (pageCount < 2) return null;

    return (
        <Wrapper>
            <div className="paginationContainer ">
                <button className="paginationBtn prevBtn" onClick={() => { handlePageChange('prev') }}>
                    PREV
                </button>
                {pages.map((pageNumber) => {
                    return (
                        <button
                            className={` ${pageNumber === page ? 'paginationBtn activePaginationBtn' : 'paginationBtn'}`}
                            onClick={() => { handlePageChange(pageNumber) }}
                            key={pageNumber}
                        >
                            {pageNumber}
                        </button>)
                })}
                <button className="paginationBtn nextBtn" onClick={() => { handlePageChange('next') }}>
                    NEXT
                </button>
            </div>
        </Wrapper>
    )
}

export default PaginationContainer;

const Wrapper = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
    .paginationBtn {
        padding: 1rem;
        cursor: pointer;
    }
    .paginationBtn.prevBtn {
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
    }
    .paginationBtn.nextBtn {
        border-top-right-radius: .5rem;
        border-bottom-right-radius: .5rem;
    }
    .paginationBtn.activePaginationBtn {
        background-color: var(--Blue1);
        border: 2px solid #2563EB;
        color: var(--lm-white1);
    }
    .activePaginationBtn:hover {
        border: 2px solid #2563EB;
    }
`