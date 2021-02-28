import Head from 'next/head';
import { useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import users from '../../data/users.json';

function Me() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [github, setGithub] = useState('');
  const [username, setUserName] = useState('');

  useEffect(() => {
    const user = users[0];
    setEmail(user.email);
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setGithub(user.github_url);
    setUserName(user.username);
  }, []);
  return (
    <MainLayout>
      <Head>
        <title>Me | CodeShed Hacksurrey</title>
      </Head>
      <div className="w-full h-full ">
        <form
          className="p-10 w-full max-w-xl mt-20 shadow mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Submited');
          }}
        >
          <p className="text-xl mb-5 text-center">
            <text className="text-blue-900 font-bold">CodeShed</text> Profile
          </p>
          <input
            placeholder="First Name"
            className="w-full p-3 mb-2 rounded border border-gray-400"
            required
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            className="w-full p-3 mb-2 rounded border border-gray-400"
            required
            value={lastname}
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
            placeholder="GitHub Profile URL"
            className="w-full p-3 mb-2 rounded border border-gray-400"
            required
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <button className="bg-blue-900 w-full p-3 mb-5 rounded text-white" type="submit">
            Save
          </button>
          <a href="/me/projects" className="text-blue-500 underline">
            View your posted projects
          </a>
        </form>
      </div>
    </MainLayout>
  );
}

export default Me;
