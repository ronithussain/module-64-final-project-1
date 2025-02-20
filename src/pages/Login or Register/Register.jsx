import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// react hook form starts here
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';




const Register = () => {
    const [showsPassword, setShowsPassword] = useState(false);

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { handleRegister, handleUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data);
        handleRegister(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                handleUpdateProfile(data.name, data.photoURL)
                    .then(result => {
                        console.log('User profile updated successful!')
                        reset();
                        Swal.fire({
                            title: "User updated successfully",
                            showclassName: {
                                popup: `
                                        animate__animated
                                        animate__fadeInUp
                                        animate__faster
                                      `
                            },
                            hideclassName: {
                                popup: `
                                        animate__animated
                                        animate__fadeOutDown
                                        animate__faster
                                      `
                            }
                        });
                        navigate('/');
                    })
                    .catch(error => {
                        console.log('User updated failed!!!', error.message)
                    })
            })
    };

    return (
        <>
            <Helmet>
                <title>Bistro boss || Register</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse lg:mt-[105px] mt-[105px]">
                    {/* Registration Card */}
                    <div
                        className="relative card-body w-full max-w-lg shadow-2xl p-6 rounded-lg overflow-hidden"
                    >
                        {/* Blur Overlay */}
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>

                        {/* Form Content */}
                        <div className="relative z-10">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                // onSubmit={handleCreateUser}
                                className="fieldset space-y-4">
                                {/* Name */}
                                <label className="fieldset-label">Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    {...register("name", { required: true })}
                                    className="input w-full"
                                    placeholder="Enter your name" />
                                {errors.name && <span className='text-red-500 text-xs'>Name is required</span>}

                                {/* Photo URL */}
                                <label className="fieldset-label">Photo Url</label>
                                <input
                                    type="text"
                                    name='photoURL'
                                    {...register("photoURL", { required: true })}
                                    className="input w-full"
                                    placeholder="Enter your photoURL" />
                                {errors.photoURL && <span className='text-red-500 text-xs'>PhotoURL is required</span>}

                                {/* Email */}
                                <label className="fieldset-label">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    {...register("email", { required: true })}
                                    className="input w-full"
                                    placeholder="Enter your email" />
                                {errors.email && <span className='text-red-500 text-xs'>Email is required</span>}

                                {/* Password */}
                                <div className='relative'>
                                    <label className="fieldset-label">Password</label>
                                    <input
                                        // type="password" 
                                        type={showsPassword ? "text" : "password"}
                                        name='password'
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                        className="input w-full"
                                        placeholder="Enter your password" />
                                    <button
                                        type='button'
                                        onClick={() => setShowsPassword(!showsPassword)}
                                        className='btn-sm absolute top-8 right-4 text-base'>
                                        {showsPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                    {errors.password?.type === 'required' && <p className='text-red-500 text-xs'>Password is required</p>}
                                    {errors.password?.type === 'maxLength' && <p className='text-red-500 text-xs'>Password must be less then 20 characters</p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-500 text-xs'>Password must be at least 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className='text-red-500 text-xs'>Password must include one uppercase letter, one lowercase letter, one number, and one special character</p>}

                                </div>



                                {/* Register Button */}
                                <input className="btn w-full mt-4" type="submit" value="Register" />

                                {/* Login Link */}
                                <p className="text-xs sm:text-xl text-center">
                                    Already have an account? <Link className="text-red-600" to="/login">Please Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Register;