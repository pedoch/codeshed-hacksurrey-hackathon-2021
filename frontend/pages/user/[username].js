import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout';

export default function User({ user, projects, gitHubRepos }) {
  const [repos, setRepos] = useState([]);
  const [currentRepoNum, setCurrentRepoNum] = useState(0);
  useEffect(() => {
    setRepos(gitHubRepos.slice(0, 5));
    setCurrentRepoNum(5);
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>{user.username} | CodeShed Hacksurrey</title>
      </Head>
      <div className="w-full max-w-5xl mx-auto px-3 pb-10">
        <div
          className="w-20 h-20 rounded-full border border-gray-500 bg-cover bg-center bg-no-repeat mb-3 mt-10"
          style={{ backgroundImage: `url('${user.avatar_url}')` }}
        ></div>
        <p className="mb-3 text-2xl font-bold">{user.firstname + ' ' + user.lastname}</p>
        <p className="mb-2">
          GitHub:{' '}
          <a
            href={user.github_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            {user.github_url.split('/')[3]}
          </a>
        </p>
        <p className="mb-2">
          Email: <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
        <p className="mb-1">Stack</p>
        <div className="flex space-x-2 flex-wrap mb-5">
          {user.stack.map((st) => (
            <p className="text-sm text-gray-500" key={st}>
              {st}
            </p>
          ))}
        </div>
        <p className="text-xl font-semibold">CodeShed Projects</p>
        <div className="grid grid-cols-2 mb-5 smallTablet:grid-cols-1">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="shadow p-3 flex justify-between mx-2 my-2 hover:shadow-md"
              >
                <div>
                  <p className="text-lg mb-3">{project.title}</p>
                  <div className="text-sm">
                    {project.stack.map((stck) => (
                      <p>{stck}</p>
                    ))}
                  </div>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <p>
                    {project.num_collaborators}{' '}
                    {project.num_collaborators > 1 ? 'Shedders' : 'Shedder'}
                  </p>
                  <a href={`/projects/${project.id}`} className="text-blue-600 underline">
                    Veiw Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xl font-semibold">GitHub Repos</p>
        <div className="grid grid-cols-2 smallTablet:grid-cols-1">
          {repos.map((project) => {
            return (
              <div
                key={project.name}
                className="shadow p-3 flex justify-between mx-2 my-2 hover:shadow-md"
              >
                <div>
                  <p className="text-lg mb-3">{project.name}</p>
                  <div className="text-sm">{project.language}</div>
                </div>
                <a
                  href={project.svn_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Veiw Repo
                </a>
              </div>
            );
          })}
        </div>
        {currentRepoNum < gitHubRepos.length && (
          <button
            className="p-1 border border-gray-400 rounded mx-auto mt-5"
            // disabled={currentRepoNum >= gitHubRepos.length}
            onClick={() => {
              setRepos(gitHubRepos.slice(0, currentRepoNum + 5));
              setCurrentRepoNum(currentRepoNum + 5);
            }}
          >
            Load more
          </button>
        )}
      </div>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const pages = (await import(`../../data/users.json`)).default;

  const id = pages.map((page) => page.username);

  const paths = id.map((username) => ({ params: { username } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { username } }) {
  const pages = (await import(`../../data/users.json`)).default;
  const projects = (await import('../../data/posts.json')).default;

  const user = pages.find((x) => x.username === username);

  const { data } = await axios.get(
    `https://api.github.com/users/${user.github_url.split('/')[3]}/repos`,
  );

  // console.log(gitHubRepos);

  const userProjects = projects.filter((proj) => proj.owner_id === user.id);

  return {
    props: {
      user,
      projects: userProjects,
      gitHubRepos: data,
    },
  };
}
