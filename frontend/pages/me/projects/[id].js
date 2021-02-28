import Head from 'next/head';
import MainLayout from '../../../components/MainLayout';

function Project({ project }) {
  return (
    <MainLayout>
      <Head>
        <title>{project.title} | CodeShed Hacksurrey</title>
      </Head>
      <div className="w-full max-w-4xl mx-auto px-3 pb-10">
        <p className="font-semibold mt-10">Title</p>
        <p className="mb-5 text-xl">{project.title}</p>
        <p className="font-semibold mt-10">Description</p>
        <p className="mb-5 text-xl">{project.description}</p>
        <p className="font-semibold mt-10">Stack</p>
        <div className="mb-5 text-gray-500 space-x-2 text-xl">
          {project.stack.map((stck, index, arr) => {
            return (
              <>
                <p key={stck}>{stck}</p>
                {index != arr.length - 1 && ','}
              </>
            );
          })}
        </div>
        <p className="font-semibold mt-10">Collaborators</p>
        <div className="mb-5 text-gray-500 space-x-2 text-xl">
          {['Tele', 'Kayode', 'Rodney'].map((collab, index, arr) => {
            return (
              <span>
                <a href={`/user/deltanboi`} key={collab} className="text-blue-500 underline">
                  {collab}
                </a>
                {index != arr.length - 1 && ','}
              </span>
            );
          })}
        </div>
        <p className="font-semibold mt-10">Requests</p>
        <div className="mb-5 text-gray-500 grid grid-cols-3">
          {['Ayomide', 'Tayo', 'Renny', 'Ochuko'].map((requester) => {
            return (
              <div key={requester} className="flex shadow p-3 justify-between m-1">
                <a href={`/user/deltanboi`} className="text-xl text-blue-500 underline mr-5">
                  {requester}
                </a>
                <div className="flex space-x-1 text-sm">
                  <button className="p-1 text-green-500">Approve</button>
                  <button className="p-1 text-red-500">Reject</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const pages = (await import(`../../../data/posts.json`)).default;

  const ids = pages.map((page) => page.id);

  const paths = ids.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  // const pages = (await import(`../../data/users.json`)).default;
  const projects = (await import('../../../data/posts.json')).default;

  const project = projects.find((x) => x.id === id);

  return {
    props: {
      project,
    },
  };
}

export default Project;
