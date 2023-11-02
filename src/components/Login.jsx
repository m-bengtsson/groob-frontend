import { Link } from "react-router-dom";
import { LargeButton } from "../styles/Button.styled";
import { StyledLoginSignupWrapper } from "../styles/Container.styled";
import { StyledInput, StyledInputLabel } from "../styles/Input.styled";
import axios from "axios";
import { CurrentUserContext } from "../context/currentUser";
import { useContext } from "react";

export const Login = () => {
  const { addCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    try {
      const requestBody = { email: email.value, password: password.value };

      const resp = await axios.post(
        "http://localhost:8080/api/identity/login",
        requestBody,
        { withCredentials: true }
      );

      if (resp.status === 200) {
        const accesstoken = resp.headers.authorization;

        localStorage.setItem("accesstoken", accesstoken);

        const respUser = await axios({
          method: "get",
          url: "http://localhost:8080/api/users/currentUser",
          headers: { Authorization: accesstoken },
        });

        const user = await respUser.data;
        await addCurrentUser(user);
      }
    } catch (error) {
      console.log(error);
      console.log("ÅH NEJ", error.response?.data);
    }
  };

  return (
    <StyledLoginSignupWrapper>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <StyledInputLabel>
          <p>Email</p>
          <StyledInput name="email" type="email" placeholder="Email" />
        </StyledInputLabel>

        <StyledInputLabel>
          <p>Password</p>
          <StyledInput name="password" type="password" placeholder="Password" />
        </StyledInputLabel>
        <p>
          Don`t have an account?
          <Link to="/Signup">
            <b>Sign up here.</b>
          </Link>
        </p>

        <LargeButton type="submit">Log in</LargeButton>
      </form>
    </StyledLoginSignupWrapper>
  );
};
