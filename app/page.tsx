import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-10 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">Your Name</span>
          <div className="flex gap-6">
            <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">About</Link>
            <Link href="#education" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">Education</Link>
            <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">Projects</Link>
            <Link href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">Skills</Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Computer Science Student | Aspiring Software Developer
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="#projects" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View My Projects
            </Link>
            <Link 
              href="#contact" 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a third-year Computer Science student passionate about software development and problem-solving. 
              I'm currently seeking my first professional role where I can apply my academic knowledge and contribute to meaningful projects.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Throughout my studies, I've developed a strong foundation in programming principles, data structures, algorithms, 
              and software engineering practices. I enjoy working on both frontend and backend technologies and am particularly interested in 
              [mention your specific interests like web development, mobile apps, AI, etc.].
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your University Name • Expected Graduation: 2025
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Relevant Coursework:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>Data Structures & Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>Database Systems</li>
              <li>Web Development</li>
              <li>Software Engineering</li>
              <li>Computer Networks</li>
              <li>Operating Systems</li>
              <li>Artificial Intelligence</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              GPA: [Your GPA] / 4.0
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Project Name 1
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A detailed description of your project, including its purpose, features, and your role in developing it.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Project Name 2
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A detailed description of your project, including its purpose, features, and your role in developing it.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Django
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Project Name 3
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A detailed description of your project, including its purpose, features, and your role in developing it.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Java
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Spring Boot
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    MySQL
                  </span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Skills
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Programming Languages */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'HTML', 'CSS'].map((skill) => (
                  <div 
                    key={skill}
                    className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
                  >
                    <p className="text-gray-900 dark:text-white font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Frameworks & Libraries */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {['React', 'Next.js', 'Node.js', 'Express', 'Django', 'Spring Boot', 'TailwindCSS'].map((skill) => (
                  <div 
                    key={skill}
                    className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
                  >
                    <p className="text-gray-900 dark:text-white font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools & Technologies */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {['Git', 'GitHub', 'VS Code', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'MySQL'].map((skill) => (
                  <div 
                    key={skill}
                    className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
                  >
                    <p className="text-gray-900 dark:text-white font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-blue-600 hover:text-blue-700 transition"
                >
                  your.email@example.com
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-700 transition"
                >
                  linkedin.com/in/yourprofile
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-700 transition"
                >
                  github.com/yourusername
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Open to opportunities in [Your Location or Remote]
                </span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-600 dark:text-gray-400">
                Thank you for visiting my portfolio! I'm excited about the opportunity to contribute to your team.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}