import { useState } from 'react';
import { useForm } from 'react-hook-form';

import usersData from '../api/users.json';

const UserForm = () => {
    
    const { register, watch, setValue} = useForm();

    const [userExist, setUserExist] = useState(false)

//Funcionalidad de buscar el ID 
  const handleChange = () => { 
    const userId = watch("userId")
    const foundUser = usersData.find(user => user.userId === userId);
    if (foundUser) {
        setUserExist(true)
        setValue("name", foundUser.name)
        setValue("f last name", foundUser.fLastName)
        setValue("m last name", foundUser.mLastName)
    } else {
        setUserExist(false)
        setValue("name", "");
        setValue("f last name", "");
        setValue("m last name", "");
    }
   }

//Cerrar sesión
   const hangleLogout = () => { 
    location.reload()
    }

  return (
    <div className="h-screen flex items-center justify-center bg-blue-200">
      <div className="w-full max-w-xs">
        <form className="bg-blue-50 shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="flex justify-center">
              {userExist ? <img className='w-[50px]' src='https://cdn-icons-png.freepik.com/256/5610/5610944.png'></img> :
              <img className='w-[50px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1024px-Flat_cross_icon.svg.png'></img>
              }
            </div>
            <label className="block text-gray-700 text-xl font-bold mb-2">
              ID Usuario
            </label>
            <input onChange={handleChange} defaultValue="" name="userId" ref={register()}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ID del usuario"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Nombre
            </label>
            <input
            disabled
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="" name="name" ref={register()}
          />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-xl font-bold mb-2">
                Apellido Paterno
            </label>
            <input
            disabled
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="" name="f last name" ref={register()}
          />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-xl font-bold mb-2">
                Apellido Materno
            </label>
            <input
            disabled
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue="" name="m last name" ref={register()}
          />
          </div>
          <div className="flex justify-center">
            <button onClick={hangleLogout} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-slate-500">
              Cerrar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserForm