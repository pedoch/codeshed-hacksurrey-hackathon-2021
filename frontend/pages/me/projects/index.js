import Head from 'next/head';
import MainLayout from '../../../components/MainLayout';

function Projects({ userProjects }) {
  return (
    <MainLayout>
      <Head>
        <title>My Projects | CodeShed Hacksurrey</title>
      </Head>
      <div className="w-full max-w-5xl mx-auto px-3 pb-10">
        <p className="text-xl font-semibold mt-10">CodeShed Projects</p>
        <div className="grid grid-cols-2 mb-5 smallTablet:grid-cols-1">
          {userProjects.map((project) => {
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
                  <a href={`/me/projects/${project.id}`} className="text-blue-600 underline">
                    Veiw Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const projects = (await import('../../../data/posts.json')).default;
  const users = (await import('../../../data/users.json')).default;
  const user = users[0];

  const userProjects = projects.filter((proj) => {
    if (proj.owner_id === user.id) return proj;
  });

  return {
    props: {
      userProjects,
    }, // will be passed to the page component as props
  };
}

export default Projects;
