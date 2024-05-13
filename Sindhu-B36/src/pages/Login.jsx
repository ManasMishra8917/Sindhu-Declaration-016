import React from 'react'
import SimpleCard from '../Authentication/LoginCard'
// import { unstable_HistoryRouter } from 'react-router-dom';


export const Login = ({onSignIn}) => {
    // const history = useHistory(); // Initialize useHistory

    // const handleSignIn = () => {
    //   // Handle sign-in logic here
    //   // For now, let's just navigate to the home page
    //   history.push('/home'); // Navigate to the home page
    // };
  
    return (
      <SimpleCard onSignIn={onSignIn} />
    );
}
