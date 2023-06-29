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
        const response = await auth.login(email, password, true)
        triggerAlert({
            message: "You are now logged in",
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
        triggerAlert({
            message: "Your account has been created",
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

export const getCurrentUser = () => {
    try {
        return auth.currentUser()
    } catch(e){
        return null;
    }
}

export const userLogout = async () => {
    const user = getCurrentUser();
    if(!user) return;
    await user.logout();
}