const FormLogin = () => {
    return (
        <div className="bg-sky-100 flex justify-center items-center h-screen">
            {/* Left: Image */}
            <div className="w-1/2 h-screen hidden lg:block bg-[#fdc0c6]">
                {/* <img
                    src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
                    alt="Placeholder"
                    className="object-cover w-full h-full"
                /> */}
            </div>

            {/* Right: Form */}
            <div className="lg:p-36 md:p-20 sm:p-10 p-8 w-full lg:w-1/2">
                <h1 className="text-3xl text-center font-bold mb-4 ">Login</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600 font-semibold">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember" name="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-gray-900">
                            Remember Me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormLogin;