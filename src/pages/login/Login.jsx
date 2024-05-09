import { Link } from 'react-router-dom';
import '../login/login.css'

const Login = () => {
    return (
        <div className='pattern'>
            <div className="flex flex-col items-center py-6 lg:h-[37rem] lg:flex-row mx-10">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">Brand</h2>

                    <h3 className="mt-2 text-2xl font-semibold text-gray-100">
                        Hello <span className="text-yellow-400">Guest</span>
                    </h3>

                    <p className="mt-4 text-gray-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum modi incidunt adipisci quod porro et non exercitationem quasi, maxime culpa ut nemo ab delectus saepe iste nostrum explicabo a?</p>
                </div>

                <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                    <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
                        <div className="px-6 py-8 text-center">
                            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">Sign In</h2>

                            <form action="#">
                                <div className="mt-4">
                                    <input className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="email" placeholder="Email address" aria-label="Email address" />
                                    <input className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password" />
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:underline">Forget Password?</a>

                                    <button className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-yellow-600 rounded-md hover:bg-yellow-400 dark:hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 dark:focus:bg-yellow-300">Sign In</button>
                                </div>
                               <div className=''>
                               <p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account? <Link to='/register'><a  rel="noopener noreferrer"
                href="#"
                className="underline text-gray-900">Register</a></Link></p>
                               </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
