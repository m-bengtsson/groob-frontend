import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { LargeButton } from "../styles/Button.styled";
import { StyledLoginSignupWrapper } from "../styles/Container.styled";
import { StyledInput, StyledInputLabel } from "../styles/Input.styled";

export const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const signupToken = searchParams.get("token_key");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password, rePassword } = e.target;

    const body = {
      name: name.value,
      password: password.value,
      repeatPassword: rePassword.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/identity/register",
        body,
        {
          headers: { Authorization: signupToken },
        }
      );
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage("Oops! something went wrong with the signup");
    }
  };

  return (
    <StyledLoginSignupWrapper>
      <h1>Sign up</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <StyledInputLabel>
          <p>Name</p>
          <StyledInput name="name" type="text" placeholder="Name" />
        </StyledInputLabel>

        <StyledInputLabel>
          <p>Password</p>
          <StyledInput name="password" type="password" placeholder="Password" />
        </StyledInputLabel>

        <StyledInputLabel>
          <p>Repeat Password</p>
          <StyledInput
            name="rePassword"
            type="password"
            placeholder="Password"
          />
        </StyledInputLabel>
        <p>
          Already have an account?{" "}
          <Link to="/">
            <b>Log in here.</b>
          </Link>
        </p>

        <LargeButton type="submit">Sign up</LargeButton>
      </form>
    </StyledLoginSignupWrapper>
  );
};
