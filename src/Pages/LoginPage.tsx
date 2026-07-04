import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const user = {
    email: 'john@example.com',
    password: '123456'
  }


function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function validateUser(email: string, password: string) {
  const valid = email === user.email && password === user.password
  if (valid) {
    navigate('/home')
  }
}

  return (
  <>
    <div  className="flex justify-center items-center min-h-screen bg-emerald-900">

      <form onSubmit={(e) => {
          e.preventDefault();
          validateUser(email, password);
        }}>

                    <fieldset className="fieldset bg-stone-200 border-base-300 rounded-box w-xs border p-4 shadow-xl/30 h-3/4">
                  <h6 className="text-2xl text-black/80 font-bold tracking-tight">Content de vous revoir </h6>
                  <p className="text-black/60 mb-12" >Connectez-vous pour retrouver vos comptes.</p>
                <label className="label text-black/80">Email</label>
                <input type="email" 
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                      className="input bg-stone-200 border-base-200/50 rounded-box 
                focus:outline-emerald-900 placeholder-black/60 text-black" placeholder="Email" />

                <label className="label text-black/80">Password</label>
                <input type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      className="input bg-stone-200 border-base-200/50 rounded-box
                focus:outline-emerald-900 placeholder-black/60 text-black" placeholder="Password" />

                <button type="submit" 
                className="btn btn-neutral mt-4 bg-emerald-900">
                  Login
                </button>
          </fieldset>
    </form>
    </div>
    </>
  )
}

export default LoginPage