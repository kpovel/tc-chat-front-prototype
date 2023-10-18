import LoginForm from './loginForm';
import Link from 'next/link';
import './loginForm.css'

export default function LoginPage() {
    return (
        <div className="login__wrapper">
             <LoginForm />
             <div className="helper__wrapper">
                 <div className="restore__pass">
                     <Link href="/restore">Fogot password?</Link>
                 </div>
                 <div className="create__user">
                     <Link href="/signUp">Create account</Link>
                 </div>
             </div>
        </div>
    )
}