import ProfilePic from '../assets/eu.png'; // placeholder, replace with your own image in assets
import ThemeToggle from './ThemeToggle';
import { Link, NavLink } from 'react-router-dom';

const navLinkClasses = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-brand-500 text-white dark:bg-brand-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`;

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-5xl mx-auto flex items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={ProfilePic} alt="Profile" className="w-12 h-12 p-1 bg-white dark:bg-gray-800 rounded-full shadow" />
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">Mucioniu Constantin-Andrei</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 -mt-0.5">Full-Stack Web Developer & Enthusiast</p>
          </div>
        </Link>
        <nav className="flex-1 flex items-center gap-2 ml-6">
          <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
