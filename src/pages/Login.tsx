import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import userData from '../api/user.json'
import { useForm } from 'react-hook-form';

import { login } from '../store/actions/login-action.js';

const Login = () => {

  const [errorCounter, setErrorCounter] = useState(0)

  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  //Verificar si el usuario existe
  const onSubmit = data => {

    if(data.username === userData.username && data.password === userData.password){
      dispatch(login(data));
    }
    else{
      setErrorCounter(errorCounter + 1)
    }
    
  }

  //Mostrar console.log cuando sean 3 errores
  useEffect(() => {

    errorCounter >= 3 && console.log("Contraseña incorrecta")
    
  }, [errorCounter])
  
  
  return (
    <div className="h-screen flex items-center justify-center bg-blue-200">
      <div className="w-full max-w-xs">
        <form className="bg-blue-100 shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <img className='animate-bounce' src='https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png'></img>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-xl">
              Usuario:
            </label>
            <input defaultValue="" name="username" ref={register({ required: "Usuario requerido." })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Escriba el usuario"/>
            {errors.username && <span className='text-red-500'>{errors.username.message}</span>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2 text-xl">
              Contraseña:
            </label>
            <input
            type="password"
            placeholder="Escriba su contraseña"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="" name="password" ref={register({ required: "Contraseña requerida." })}
          />
            {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            {errorCounter >= 1 && errorCounter < 3 && <span className='text-red-500'>{`Número maximo de intentos ${3 - errorCounter}.`}</span>}
            {errorCounter >= 3 && <span className='text-red-500'>Contraseña incorrecta.</span>}
          </div>
          <div className="flex justify-center">
            <button disabled={errorCounter >= 3} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-slate-500">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default Login