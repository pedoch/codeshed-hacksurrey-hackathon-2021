import Head from 'next/head';
import MainLayout from '../../components/MainLayout';

function Project({ project }) {
  return (
    <MainLayout>
      <Head>
        <title>{project.title} | CodeShed Hacksurrey</title>
      </Head>
      <div className="w-full max-w-5xl flex mx-auto px-3 pb-10 smallLaptop:flex-wrap">
        <div className="w-full">
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
          <p className="font-semibold mt-10">Collaborators ({project.num_collaborators})</p>
          <div className="mb-5 text-gray-500 space-x-2 text-xl">
            {['Tele'].map((collab, index, arr) => {
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
        </div>
        <div className="mt-10">
          <button className="p-2 rounded bg-blue-900 text-white whitespace-nowrap">
            Request to collaborate
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const pages = (await import(`../../data/posts.json`)).default;

  const ids = pages.map((page) => page.id);

  const paths = ids.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const projects = (await import('../../data/posts.json')).default;

  const project = projects.find((x) => x.id === id);

  return {
    props: {
      project,
    },
  };
}

export default Project;
