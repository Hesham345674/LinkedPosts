import { Button, Input, Select, SelectItem } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as zod from 'zod';
import { sendRegisteredData } from '../Services/register';


const schema = zod.object({

    name: zod.string().nonempty('name is required').min(3, 'Name must be 3 characters at least').max(15, 'Name must be maximum 15 characters'),


    email: zod.string().nonempty('email is required')
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'email is invalid'),

    password: zod.string().nonempty('password is required')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'password is invalid'),

    rePassword: zod.string().nonempty('repassword is required'),

    dateOfBirth: zod.coerce.date('dateOfBirth is required').refine((value) => {
        const now = new Date().getFullYear();
        const birth = value.getFullYear();
        const diff = now - birth;

        return diff >= 18;
    }, 'Your younger than 18'),
    gender: zod.string().nonempty('gender is required'),
}

).refine((data) => data.password === data.rePassword, {
    path: ['rePassword'],
    message: "password and repassword don't match"
})





export default function RegisterPage() {

    const [apierror, setApiError] = useState('');

    const [loading, setLoading] = useState(false);



    const { handleSubmit, register, formState } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            dateOfBirth: '',
            gender: '',

        },
        resolver: zodResolver(schema)
    })



    const navigate = useNavigate()




    async function signUp(values) {
        setLoading(true)
        const response = await sendRegisteredData(values)

        if (response.error) {
            setApiError(response.error)

        } else {
            navigate('/login')

        }
        setLoading(false)
    }






    return <div className='min-h-screen flex justify-center items-center'>
        <div className='min-w-md bg-white py-10 px-6 rounded-2xl shadow-2xl'>

            <h2 className='text-2xl mb-4'>Register page</h2>

            <form onSubmit={handleSubmit(signUp)} className='flex flex-col gap-4'>

                <Input variant='bordered' isInvalid={Boolean(formState.errors.name?.message)} errorMessage={formState.errors.name?.message} {...register('name')} label="Name" labelPlacement='outside' type="Text"
                    placeholder='example' />


                <Input variant='bordered' isInvalid={Boolean(formState.errors.email?.message)} errorMessage={formState.errors.email?.message}
                    {...register("email")} label="Email" labelPlacement='outside' type="emial"
                    placeholder='user@example.com' />


                <Input variant='bordered' isInvalid={Boolean(formState.errors.password?.message)} errorMessage={formState.errors.password?.message}
                    {...register('password')} label="password" labelPlacement='outside' type="password"
                    placeholder='example@123' />


                <Input variant='bordered' isInvalid={Boolean(formState.errors.rePassword?.message)} errorMessage={formState.errors.rePassword?.message}
                    {...register('rePassword')} label="rePassword" labelPlacement='outside' type="password"
                    placeholder='example' />

                <div className='flex gap-3'>

                    <Input variant='bordered' isInvalid={Boolean(formState.errors.dateOfBirth?.message)} errorMessage={formState.errors.dateOfBirth?.message}
                        {...register('dateOfBirth')} label="Date of birth" labelPlacement='outside' type="date"
                        placeholder='example' />

                    <Select variant='bordered' isInvalid={Boolean(formState.errors.gender?.message)} errorMessage={formState.errors.gender?.message}
                        {...register('gender')} className="max-w-xs" labelPlacement='outside' placeholder='select your gender' label="Select Your gender">

                        <SelectItem key={"male"}>male</SelectItem>
                        <SelectItem key={"female"}>female</SelectItem>

                    </Select>
                </div>
                {apierror && <p className='text-red-500'>{apierror}</p>}
                <Button isLoading={loading} type='submit' color='primary'>Register</Button>
                <p>If you already have an account, please <Link to={"/login"} className="text-blue-400 cursor-pointer" >SignIn</Link></p>
            </form>

        </div>



    </div>
}
