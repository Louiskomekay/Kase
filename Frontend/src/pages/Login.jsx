import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from 'react-router-dom'
import styled from 'styled-components'
import KaseLogoImg from '../images/KaseLogoImg.webp'

const Login = () => {
    return (
        <Wrapper>
            <div className="form-container">
                {/* forminput */}
                <div className="form">
                    <Form method="POST">
                        <div className="form-copy">
                            <h2>Welcome</h2>
                            <p>Welcome back. Please login with your details.</p>
                        </div>

                        <FormInput type='email' label='email' name='email' defaultValue='test@test.com' />
                        <FormInput type='password' label='password' name='password' defaultValue='secret' />

                        <div className="buttons">
                            <SubmitBtn text='login' className='btn submitBtn' />
                        </div>

                        <button className="strokeBtn strokeButton">Guest user</button>

                        <div className="crumbMessage">
                            <p>Don’t have an account? <Link to='/Register'> <span className="crumbRegister">Register Here</span> </Link></p>
                        </div>
                    </Form>
                </div>
                {/* image */}
                <div className="kaseImg pseudoBackgroundColor"><img src={KaseLogoImg} alt="image" /></div>
            </div>
        </Wrapper>
    )
}

export default Login;

// STYLING
const Wrapper = styled.section`
    height: 100vh;
    .form-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .kaseImg {
        overflow: hidden;
        height: 100vh;
    }
    .kaseImg img {
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
    .form {
        display: grid;
        place-content: center;
    }
    .form h2 {
        font-size: var(--fs-600);
        color: var(--Blue1);
    }
    .form-copy {
        margin-bottom: 1.4rem;
    }
    .form-copy p{
        font-size: var(--fs-400);
    }
    .submitBtn {
        width: 33rem;
        margin-bottom: 1rem;
    }
    .buttons {
        margin-top: 2rem;
    }
    .strokeButton {
        width: 33rem;
        padding: 1.3rem;
    }
    .crumbMessage {
        margin-top: 1rem;
    }
    .crumbRegister {
        color: var(--Blue1);
        transition: var(--smooth);
    }
    .crumbRegister:hover {
        color: var(--Blue2);
    }

    /* Tablet */
    @media (max-width:74em) {
        .form-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        }
        .strokeButton, .submitBtn {
        width: 33rem;
        }
        .kaseImg {
        overflow: hidden;
        height: 20rem;
        grid-row-start: 0;
        grid-row-end: 1;
        }
    }

    /* Mobile */
    @media (max-width:33.75em) {
        .form-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        }
        .strokeButton, .submitBtn {
        width: 23rem;
        }
        .kaseImg {
        overflow: hidden;
        height: 20rem;
        grid-row-start: 0;
        grid-row-end: 1;
        }
    }
`