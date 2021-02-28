import Head from 'next/head';
import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';

const Home = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projStack, setProjStack] = useState([]);
  return (
    <MainLayout>
      <Head>
        <title>CodeShed Hacksurrey</title>
      </Head>

      <div className="w-full pb-10">
        <div className="bg-blue-900 w-full mt-5 py-10 px-2">
          <p className="text-2xl font-lg text-center text-white font-bold">Welcome to CodeShed</p>
        </div>
        <div className="w-full max-w-4xl px-2 mx-auto">
          <p className="text-xl my-10">
            CodeShed is a platform that helps beginners find more experienced developers to
            collabroate with and gain experience. Bringing together people of different or similar
            skillsets to work on projects and ease the development process.
          </p>
          <p className="text-2xl mb-2">Recent Projects</p>
          <div className="grid grid-cols-2 smallTablet:grid-cols-1">
            {[1, 2, 3, 4, 5, 6].map((project) => {
              return (
                <div
                  key={project}
                  className="shadow p-3 flex justify-between mx-2 my-2 hover:shadow-md"
                >
                  <div>
                    <p className="text-lg">Project Name</p>
                    <p className="text-sm text-gray-500">
                      by{' '}
                      <a href={`/user/deltanboi`} className="underline">
                        deltanboi
                      </a>
                    </p>
                    <p className="text-sm">Machine Learning</p>
                  </div>
                  <div className="h-full flex flex-col justify-between">
                    <p>3 Shedders</p>
                    <a href="/projects/1" className="text-blue-600 underline">
                      Veiw Project
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-2xl mb-2 mt-10">Post a project</p>
          <form
            className="p-10 w-full mx-auto shadow"
            onSubmit={(e) => {
              e.preventDefault();
              console.log('Submited');
            }}
          >
            <input
              placeholder="Project Title"
              className="w-full p-3 mb-2 rounded border border-gray-400"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Project Description"
              rows={3}
              className="w-full p-3 rounded border border-gray-400"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <select
              placeholder="Project Stack"
              className="w-full p-3 mb-3 rounded border border-gray-400"
              required
              value={projStack}
              onChange={(e) => {
                let value = Array.from(e.target.selectedOptions, (option) => option.value);
                setProjStack(value);
              }}
              multiple
            >
              <option value="BACKEND DEVELOPMENT">BACKEND DEVELOPMENT</option>
              <option value="FRONTEND DEVELOPMENT">FRONTEND DEVELOPMENT</option>
              <option value="MOBILE DEVELOPMENT">MOBILE DEVELOPMENT</option>
              <option value="DEVOPS">DEVOPS</option>
              <option value="ARTIFICIAL INTELLIGENCE">ARTIFICIAL INTELLIGENCE</option>
            </select>
            <button className="bg-blue-900 w-full p-3 mb-2 rounded text-white" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
