import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className='login'>
      <button className='authbtn' onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      <div>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LogInForm setUser={setUser} />
        }
        </div>
    </main>
  );
}