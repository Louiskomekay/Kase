import { useRouteError, Link } from "react-router-dom"
import styled from 'styled-components'
import errorImage1 from './images/404.webp'
import errorImage2 from './images/error.webp'

const Error = () => {
    const error = useRouteError();
    console.log(error);

    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={errorImage1} alt="image" id="errorImg" />
                    <p>The page you’re looking for does not exist. <br />
                        Kindly click the button below to return to the homepage.</p>
                    <Link className="btn" to='/'>Go back home</Link>
                </div>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <div>
                <img src={errorImage2} alt="image" id="errorImg" />
                <p className="errorMessage">There was an error...</p>
            </div>
        </Wrapper>
    )
}

export default Error

const Wrapper = styled.main`
    display: grid;
    place-items: center;
    height: 100vh;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div p {
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 3rem;
    }
    .btn {
        background-color: var(--Blue1);
        background-image: linear-gradient(90deg, var(--Blue1) 100%, var(--Blue2) 100%);
        outline: none;
        border: none;
        padding: 1.4rem 8rem;
        color: var(--lm-white2);
        border-radius: 0.5rem;
        cursor: pointer;
        transition: var(--smooth);
    }
    .btn:hover {
        box-shadow: .8rem .8rem 0px var(--lm-btnHover);  
    }
    #errorImg {
        width: 16rem;
        height: 16rem;
        margin-bottom: 2rem;
    }

    .errorMessage {
        font-size: 2rem;
    }

    @media (max-width:33.75em) {
        #errorImg {
            width: 12rem;
            height: 12rem;
            margin-bottom: 1rem;
        }

    .errorMessage {
        font-size: 1.5rem;
    }
        div p {
            font-size: 1rem;
                    margin-bottom: 2rem;
        }
            .btn {
        padding: 1.4rem 5.5rem;
    }

    }
`