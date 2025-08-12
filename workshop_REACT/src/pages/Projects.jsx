import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'TikiTakaToeRO',
    description: 'Football tic-tac-toe game built with React and Node.',
    tech: ['React', 'Node', 'Vite'],
    link: 'https://github.com/AndreiMuciu/TikiTakaToeRO'
  },
  {
    title: 'AtomC - Compiler',
    description: 'A simple compiler for a C-like language built with C++.',
    tech: ['C', 'memory management'],
    link: 'https://github.com/AndreiMuciu/Compiler-AtomC'
  },
  {
    title: 'Mini ORM',
    description: 'A simple Object-Relational Mapping (ORM) library for Python.',
    tech: ['Python', 'OOP', 'SQL'],
    link: 'https://github.com/AndreiMuciu/Mini-ORM'
  }
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <ProjectCard {...p} />
        ))}
      </div>
    </div>
  );
}
