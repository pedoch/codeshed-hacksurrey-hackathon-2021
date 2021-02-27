import Head from 'next/head';
import { useState } from 'react';
import MainLayout from '../components/MainLayout';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <MainLayout>
      <Head>
        <title>Login | CodeShed Hacksurrey</title>
      </Head>
      <div className="w-full h-full flex justify-center items-center">
        <form
          className="p-10 w-full max-w-xl mt-20 shadow"
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Submited');
          }}
        >
          <p className="text-xl mb-5 text-center">
            Login To <text className="text-blue-900 font-bold">CodeShed</text>
          </p>
          <input
            placeholder="Email or Username"
            className="w-full p-3 mb-2 rounded border border-gray-400"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            className="w-full p-3 mb-3 rounded border border-gray-400"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-900 w-full p-3 mb-2 rounded text-white" type="submit">
            Log In
          </button>
          <p>
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </MainLayout>
  );
}

export default Login;
