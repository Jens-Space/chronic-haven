import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-400 to-blue-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-teal-100 transition-colors flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          Fibro Support Hub
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-teal-100 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-teal-100 transition-colors">About</Link></li>
          <li><Link href="/symptoms" className="hover:text-teal-100 transition-colors">Symptoms</Link></li>
          <li><Link href="/treatments" className="hover:text-teal-100 transition-colors">Treatments</Link></li>
          <li><Link href="/resources" className="hover:text-teal-100 transition-colors">Resources</Link></li>
          <li><Link href="/chatbot" className="hover:text-teal-100 transition-colors">AI Chat</Link></li>
        </ul>
        {/* Mobile menu button - simplified for now */}
        <div className="md:hidden">
          <span className="text-white">Menu</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;