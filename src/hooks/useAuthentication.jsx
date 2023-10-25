import {db} from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    updatePassword
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // lidando com o memory leak

    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCanceled() {
        if(cancelled){
            return
        }
    }

    // registra o usuario
    const createUser = async (data) => {

        checkIfIsCanceled()
        setCancelled(true);
        setError(null);
        setLoading(true);


        try {
            
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            return user 

        } catch (error) {
            
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("weak-password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            } else if (error.message.includes("email-already-in-use")){
                systemErrorMessage = "E-mail já cadastrado."
            } else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }

    }

    // logout
    const logout = () => {

        checkIfIsCanceled()

        signOut(auth)

    }

    // login
    const login = async(data) => {
         
        checkIfIsCanceled()
        
        setLoading(true)

        setError(null)


        try {

            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)

        } catch (error) {
            
            let systemErrorMessage

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não foi encontrado."
            } else if (error.message.includes("wrong-password")){
                systemErrorMessage = "Senha Incorreta"
            } else {
                systemErrorMessage = "Ocorreu um erro por favor tente mais tarde."
            }

            setError(systemErrorMessage)
            setLoading(false)
        }

    }



    useEffect (() => {
        return () => setCancelled(true)
    }, [])

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }
        
}