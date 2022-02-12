import React, { useEffect, useState } from "react"
import SignUpForm from "../components/SignUpForm";
import logo from '../../../logo-420-x-108.png';
import { ISignUpParams } from '../../../models/auth';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';

const SignUpPage = () => {
    const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [locations, setLocations] = useState([]);

    const getLocation = React.useCallback(async () => {
        
    },[])

    useEffect(() => {

    },[getLocation]);

    const onSignUp = React.useCallback(async () => {

    },[]);
    return (
        <div
            className="container"
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
            >
            <img src={logo} alt="" style={{ maxWidth: '250px', margin: '32px' }} />
            <SignUpForm onSignUp={onSignUp} loading={loading} errorMessage={errorMessage} locations={locations} />
      </div>
    )
}

export default SignUpPage