import Head from 'next/head';
import { useState } from 'react';
import MainLayout from '../components/MainLayout';

function Signup() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [github, setGithub] = useState('');
  const [username, setUserName] = useState('');
  return (
    <MainLayout>
      <Head>
        <title>Sign Up | CodeShed Hacksurrey</title>
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
            Sign Up For <text className="text-blue-900 font-bold">CodeShed</text>
          </p>
          <input
            placeholder="First Name"
            className="w-full p-3 mb-2 rounded border border-gray-400"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            className="w-full p-3 mb-2 rounded border border-gray-400"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="Email"
            className="w-full p-3 mb-2 rounded border border-gray-400"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Username"
            className="w-full p-3 mb-2 rounded border border-gray-400"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="GitHub Profile Username"
            className="w-full p-3 mb-2 rounded border border-gray-400"
            required
            value={github}
            onChange={(e) => setGithub(e.target.value)}
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
            Sign Up
          </button>
          <p>
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </MainLayout>
  );
}

export default Signup;
