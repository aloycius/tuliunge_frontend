import React from 'react';

const Register = () => {
    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-cover bg-center flex flex-col justify-center items-center text-white text-center p-5"  style={{ backgroundImage: "url('https://via.placeholder.com/500')" }}>
                <h1 className="text-5xl font-bold">Tuliunge App</h1>
                <p className="mt-4 text-lg">Fast Ride, Save time</p>
            </div>
            <div className="flex-1 bg-gray-800 text-white flex flex-col justify-center items-center p-10">
                <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
                <p className="text-sm mb-6">Already have an account<a href="#" className="text-purple-500">Login</a></p>
                <form className="w-full max-w-md">
                    <div className="flex gap-4 mb-4">
                        <input type="text" id="name" name="name" placeholder="Firstname" className="w-1/2 p-3 bg-gray-700 rounded-md text-white placeholder-gray-400"/>
                        <input type="text" id="name" name="name" placeholder="Lastname" className="w-1/2 p-3 bg-gray-700 rounded-md text-white placeholder-gray-400"/>
                    </div>
                    <input type="email" id="email" name="email" placeholder="Email" className="w-full p-3 mb-4 bg-gray-700 rounded-md text-white placeholder-gray-400"/>
                    <input type="password" id="password" name="password" placeholder="Password" className="w-full p-3 mb-4 bg-gray-700 rounded-md text-white placeholder-gray-400"/>
                    <div className="flex items-center mb-6">
                        <input type="checkbox" id="terms" name="terms" className="mr-2" />
                        <label for="terms" className="text-sm">I agree to the <a href="#" className="text-purple-500">Terms and Conditions</a></label>
                    </div>
                    <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-md font-medium">Create account</button>         
                </form>
                <div className="flex gap-4 mt-6">
                    <button className="flex-1 bg-white text-gray-800 p-3 rounded-md font-medium">Facebook</button>
                    <button className="flex-1 bg-white text-gray-800 p-3 rounded-md font-medium">Google</button>     
                </div>
            </div>
        </div>
    );
        
};

export default Register;