import { Button, Input, Select, SelectItem } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as zod from 'zod';
import { sendLoginData } from '../Services/login';
import { AuthContext } from '../Context/AuthContext';



const schema = zod.object({


  email: zod.string().nonempty('email is required')
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'email is invalid'),

  password: zod.string().nonempty('password is required')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'password is invalid'),

})


export default function LoginPage() {

  const [apierror, setApiError] = useState('');

  const [loading, setLoading] = useState(false);

  const { setisLoggedIn } = useContext(AuthContext)

  // useContext(CounterContext);

  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',


    },
    resolver: zodResolver(schema)
  })



  const navigate = useNavigate()




  async function signIn(values) {
    setLoading(true)
    const response = await sendLoginData(values)

    if (response.error) {
      setApiError(response.error)

    } else {

      localStorage.setItem('token', response.token);
      setisLoggedIn(true)
      navigate('/')


    }
    setLoading(false)
  }






  return <div className='min-h-screen flex justify-center items-center'>
    <div className='min-w-md bg-white py-10 px-6 rounded-2xl shadow-2xl'>

      <h2 className='text-2xl mb-4'>Login page</h2>

      <form onSubmit={handleSubmit(signIn)} className='flex flex-col gap-4'>



        <Input variant='bordered' isInvalid={Boolean(formState.errors.email?.message)} errorMessage={formState.errors.email?.message}
          {...register("email")} label="Email" labelPlacement='outside' type="emial"
          placeholder='user@example.com' />


        <Input variant='bordered' isInvalid={Boolean(formState.errors.password?.message)} errorMessage={formState.errors.password?.message}
          {...register('password')} label="password" labelPlacement='outside' type="password"
          placeholder='example@123' />




        {apierror && <p className='text-red-500'>{apierror}</p>}
        <Button isLoading={loading} type='submit' color='primary'>login</Button>
        <p>If you don't have an account, please <Link to={"/register-page"} className="text-blue-400 cursor-pointer" >Register</Link></p>

      </form>

    </div>


  </div>
}
