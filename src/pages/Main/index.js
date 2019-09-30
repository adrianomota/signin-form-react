import React from 'react';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { Form, Check } from '@rocketseat/unform';
import {
  Section,
  Overlay,
  Wrapper,
  Logo,
  FormSocial,
  FormHead,
  FormFor,
  LoginSocial,
  FacebookButton,
  GoogleButton,
  Or,
  SigninInput,
  SignInButton,
  Signup,
  Remember,
} from './styles';

export default function Main() {
  return (
    <Section>
      <Overlay>
        <Wrapper>
          <Logo />
          <FormSocial>
            <FormHead>Sign in now</FormHead>
            <FormFor>
              Sign in using social media to get access
              <LoginSocial>
                <FacebookButton>
                  <FaFacebookF size={25} />
                  facebook
                </FacebookButton>
                <GoogleButton>
                  <FaGooglePlusG size={25} />
                  google
                </GoogleButton>
              </LoginSocial>
              <Or>
                <span className="pros">
                  <span>or</span>
                </span>
              </Or>
            </FormFor>

            <Form onSubmit={() => {}}>
              <p className="text-head">Email</p>
              <SigninInput name="email" />

              <p className="text-head">Password</p>
              <SigninInput name="password" type="password" />

              <Remember>
                <Check name="remember" />
                <span className="checkmark" />
                Remember me
              </Remember>
              <SignInButton type="submit">Sign in</SignInButton>
              <Signup>
                Have not an account yet?
                <a href="#signup.html" className="signuplink">
                  Sign up
                </a>
              </Signup>
            </Form>
          </FormSocial>
        </Wrapper>
      </Overlay>
    </Section>
  );
}
