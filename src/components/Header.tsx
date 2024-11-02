export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-800 p-4">
      <h1 className="font-bold text-2xl">André Filipe de Moraes Goulart</h1>
      <nav className="space-x-4">
        <a href="#home" className="text-white hover:text-blue-400">
          Home
        </a>
        <a href="#about" className="text-white hover:text-blue-400">
          About
        </a>
        <a href="#experience" className="text-white hover:text-blue-400">
          Experience
        </a>
        <a href="#skills" className="text-white hover:text-blue-400">
          Skills
        </a>
        <a href="#projects" className="text-white hover:text-blue-400">
          Projects
        </a>
        <a href="#contact" className="text-white hover:text-blue-400">
          Contact
        </a>
      </nav>
    </header>
  );
}
