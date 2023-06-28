import GoTrue from 'gotrue-js';
import { IUserSignupParams } from "./types";

const auth = new GoTrue({
    APIUrl: `${process.env.NEXT_PUBLIC_GOTRUE_SITE_URL}/.netlify/identity`,
    audience: "",
    setCookie: false
})

export const userLogin = async ({email, password}: IUserSignupParams) => {
    try {
        const response = await auth.signup(email, password, {name})
        console.log("signup successful", response);
        return response;
    } catch(e){
        console.log("Something went wrong", e)
        return e
    }
}

export const userSignup = async ({email, password}: IUserSignupParams) => {
    try {
        const response = await auth.login(email, password)
        console.log("login successful", response);
        return response;
    } catch(e){
        console.log("Something went wrong", e)
        return e
    }
}