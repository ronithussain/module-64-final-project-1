import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [disable, setDisable] = useState(true); // captcha
    const [showsPassword, setShowsPassword] = useState(false);
    const { handleLoginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    console.log('in the location login page',location.state)

    useEffect(() => { // captcha character is 6;
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLoginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login Successful.css",
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
                  navigate(from, {replace: true});
            })


        // const from = location.state?.from?.pathname || '/';

        // signInWithEmailAndPassword functionality
        // handleLoginUser(email, password)
        //     .then(result => {
        //         setSuccess(true)
        //         Swal.fire({
        //             icon: 'success',
        //             title: 'Login is Successful!',
        //             text: 'Welcome to our service reviews website.',
        //         });
        //         form.reset();
        //         navigate(from);
        //         // console.log(result.user)
        //     })
        //     .catch(err => {
        //         setError(err.message)
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'Oops...',
        //             text: err.message,
        //         });
        //         // console.log(err.message)
        //     })
    }

    const handleValidateCaptcha = (e) => { // validate captcha
        const user_captcha_value = e.target.value;
        // jodi captcha validate na hoy tahole login button disabled thakbe. validate hole disabled false hoye jabe.
        if (validateCaptcha(user_captcha_value) === true) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro boss || Login Page</title>
            </Helmet>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 ">
                <div className="lg:mt-[205px] mt-[105px] w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    <SocialLogin></SocialLogin>

                    {/* Login Form */}
                    <form
                        onSubmit={handleLogin}
                        className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block font-medium">Email</label>
                            <input
                                type="email"
                                name='email'
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label className="block font-medium">Password</label>
                            <input
                                type={showsPassword ? "text" : "password"}
                                name='password'
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowsPassword(!showsPassword)}
                                className="absolute top-10 right-4 text-gray-500"
                            >
                                {showsPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>

                        {/* Captcha */}
                        <div>
                            <label className="block font-medium"> <LoadCanvasTemplate /></label>
                            
                            <input
                                onBlur={handleValidateCaptcha}
                                type="text"
                                name='captcha'
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="type the text above"
                            />
                            <button className='btn btn-outline btn-xs mt-6 w-full'>VALIDATE</button>
                        </div>

                        {/* Login Button */}
                        {/* TODO: apply disabled for re-captcha */}
                        <input
                            disabled={false}
                            type="submit" value='Login' className='btn btn-primary w-full' />



                        {/* Register Link */}
                        <p className="text-center text-gray-600 mt-4">
                            Don't have an account? <Link className="text-blue-600" to="/register">Register now</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
