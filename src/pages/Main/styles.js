import styled from 'styled-components';
import { Input } from '@rocketseat/unform';
import bg from '../../assets/bg.jpg';

export const Section = styled.section`
  background: url(${bg}) no-repeat 0px 0px;
  background-size: cover;

  .fullscreen-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
  }

  .fullscreen-bg__video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Overlay = styled.div`
  background: linear-gradient(
    to right,
    rgb(29, 75, 174),
    rgba(219, 71, 53, 0.85)
  );
  padding: 11rem 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Logo = styled.div`
  text-align: center;

  > a {
    color: #fff;
    font-weight: bold;
    font-size: 38px;
    text-transform: uppercase;
  }
`;

export const FormSocial = styled.div`
  margin: 0 auto;
  max-width: 430px;
  border: 1px solid #eee;
  background: #fff;
  padding: 2rem;

  .text-head {
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #666;
  }
`;

export const FormHead = styled.h4`
  font-size: 35px;
  color: #666;
  line-height: 40px;
`;

export const FormFor = styled.p`
  font-style: normal;
  font-weight: normal;
  margin-bottom: 20px;
  color: #666;
  font-size: 18px;
  line-height: 34px;
`;

export const LoginSocial = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 0 27px 5px;

  button {
    width: 170px;
    height: 40px;
  }
`;

export const FacebookButton = styled.button`
  box-sizing: border-box;
  padding: 2px;
  margin-bottom: 27px;
  color: #fff;
  background: #3a5898;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 18px;

  svg {
    margin-right: 10px;
  }
`;

export const GoogleButton = styled.button`
  box-sizing: border-box;
  padding: 2px;
  margin-bottom: 27px;
  color: #fff;
  background: #dd4b39;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 18px;

  svg {
    margin-right: 10px;
  }
`;

export const Or = styled.div`
  text-align: center;
  border-bottom: 1px solid #d4d4d4;

  .pros {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: -8.4px;
    display: inherit;

    > span {
      background: #fff;
      padding: 0 8px;
      display: inline-block;
      color: #d4d4d4;
      text-transform: uppercase;
    }
  }
`;

export const SigninInput = styled(Input)`
  margin-bottom: 10px;
  margin-top: 5px;
  outline: none;
  width: 100%;
  height: 45px;
  background: var(--white-color);
  color: #000000;
  border: 1px solid #d4d4d4;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 45px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const SignInButton = styled.button`
  background: #333333;
  color: #fff;
  font-size: 16px;
  text-transform: capitalize;
  margin-top: 30px;
  padding: 15px 25px;
  border: none;
  display: block;
  width: 100%;
  transition: 0.3s ease-in;

  &:hover {
    transition: 0.3s ease-in;
    background: #067ae6;
  }
`;

export const Signup = styled.p`
  margin-top: 33px;
  color: var(--text-color);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;

  a {
    margin-left: 5px;
    color: #067ae6;
    font-size: 17px;
    line-height: 25px;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Remember = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  margin: 16px 0;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #666;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;

    ::after {
      content: '';
      position: absolute;
      display: none;

      left: 8px;
      top: 3px;
      width: 3px;
      height: 9px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background: #067ae6;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }
`;
