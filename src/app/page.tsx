import Link from 'next/link';
import LoginForm from './loginForm/page';
import { signUp } from './api/auth/login/signUp';

 
 function Home() {

  // signUp()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </main>
  )
}

export default Home;
