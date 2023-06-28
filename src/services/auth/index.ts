import GoTrue from 'gotrue-js';
import { IUserLoginParams, IUserSignupParams } from "@/services/auth/types";
import { triggerAlert } from '@/utils';

const auth = new GoTrue({
    APIUrl: `https://ai-text-generator-challenge.netlify.app/.netlify/identity`,
    audience: "",
    setCookie: false
})

export const userLogin = async ({email, password}: IUserLoginParams) => {
    try {
        const response = await auth.login(email, password)
        triggerAlert({
            message: "Login successful",
            type: "success"
        })
        return response;
    } catch(e: unknown){
        triggerAlert({
            message: (e as {message: string})?.message || "Login failed, please try again",
            type: "error"
        })
        return null
    }
}

export const userSignup = async ({email, password, name}: IUserSignupParams) => {
    try {
        const response = await auth.signup(email, password, {name})
        console.log("Signup successful", response);
        triggerAlert({
            message: "Signup successful",
            type: "success"
        })
        return response;
    } catch(e: unknown){
        triggerAlert({
            message: (e as {message: string})?.message || "Signup failed, please try again",
            type: "error"
        })
        return null
    }
}