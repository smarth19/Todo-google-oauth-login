import React from 'react'
import { useAppContext } from '../../reducers/app/context'
import enterImg from './enter.jpg'
import styles from './style.module.css'
import { useGoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom'

const Signin = () => {
    const {appActions, api, newAlert} = useAppContext()
    let history = useHistory()

    // const GOOGLE_AUTH_CLIENT_ID = "328332649722-ktfuh1hb7emj1qrv210g75eqm37optm0.apps.googleusercontent.com"

    const responseGoogleSuccess = async response => {
        api.signin(response.tokenId, (err, res) => {
            appActions.loading(false)
            if(err) return newAlert(err)
            appActions.id(res.data._id).name(res.data.name).email(res.data.email).notes(res.data.notes).loggedIn(true)
            history.push("/")
           newAlert(res.success)
        })
    }
    const responseGoogleFailure = response => {
        appActions.loading(false)
        console.log("error", response)
    }
    const { signIn } = useGoogleLogin({clientId: process.env.REACT_APP_GOOGLE_OAUTH, onSuccess: responseGoogleSuccess, onFailure: responseGoogleFailure, accessType: 'offline'})

    
    const onSignInClick = () => {
        appActions.loading(true)
        signIn()
    }

    return (
        <div className={styles.container}>
            <img src={enterImg} alt="Login Using Google to Access App."/>
            <div>
                <header>Your ToDo Notes App</header>
                <div><div onClick={onSignInClick} className={styles.socialLogin}>Signin With Google</div> </div>
            </div>
        </div>
    )
}

export default Signin
