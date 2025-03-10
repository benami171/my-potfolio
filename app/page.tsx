import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-10 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">Gal Ben Ami</span>
          <div className="flex gap-6">
            <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">About</Link>
            <Link href="#education" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">Education</Link>
            <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">Projects</Link>
            <Link href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">Skills</Link>
            <Link href="#resume" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">Resume</Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600">Gal Ben Ami</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Computer Science Student | Full-Stack Developer
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
              Motivated Computer Science student with a solid foundation in object-oriented programming, algorithms, and software development. Experienced in backend and frontend development. Available for full-time work.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm passionate about building efficient, scalable applications and continuously expanding my knowledge in various programming languages and frameworks. I enjoy tackling complex problems and creating elegant solutions.
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
              Ariel University • 2022 - 2026
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
              <li>Operating Systems</li>
              <li>System Design</li>
              <li>Network Programming</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              GPA: 85 / 100
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
                <span className="text-gray-500 dark:text-gray-400">Website Project</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Israel Bridge Federation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developing a brand-new website (frontend & backend) using Next.js, Tailwind CSS, and TypeScript. <span className="text-blue-600 italic">Currently in progress</span>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Tailwind CSS
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
                <span className="text-gray-500 dark:text-gray-400">Python Project</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  QUIC Multi Streams
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Asynchronous multi-stream QUIC functionality with dynamic frame management, leveraging asyncio for concurrent operations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Asyncio
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    QUIC
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
                <span className="text-gray-500 dark:text-gray-400">C++ Project</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  System Design Patterns
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A multi-threaded server using Pipeline and Leader-Follower concurrency patterns to efficiently handle operations over TCP. Optimized performance and scalability with thread synchronization and resource management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    C++
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Multi-threading
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    TCP
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
                {['C/C++', 'Java', 'Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Shell'].map((skill) => (
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
                {['React', 'Next.js', 'Node.js', 'Symfony', 'Tailwind CSS', 'Prisma ORM', 'Doctrine ORM'].map((skill) => (
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
                {['Git', 'MongoDB', 'MySQL', 'Windows', 'Linux', 'TCP/IP', 'Multi-threading'].map((skill) => (
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

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Resume
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Gal Ben Ami</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">Computer Science Student</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Profile</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Motivated Computer Science student with a solid foundations in object-oriented programming, algorithms, and software development. Experienced in backend and frontend development. Available for full-time work.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Education</h4>
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h5>
                    <p className="text-gray-700 dark:text-gray-300">Ariel University</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">2022 - 2026</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-2">GPA: 85/100</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Projects</h4>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h5 className="text-lg font-medium text-gray-900 dark:text-white">Israel Bridge Federation</h5>
                  <p className="text-blue-600 italic">Currently in progress</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Developing a brand-new website (frontend & backend) using Next.js, Tailwind CSS, and TypeScript.
                </p>
              </div>
              
              <div className="mb-4">
                <h5 className="text-lg font-medium text-gray-900 dark:text-white">QUIC multi streams (Python)</h5>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Asynchronous multi-stream QUIC functionality with dynamic frame management, leveraging asyncio for concurrent operations.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-medium text-gray-900 dark:text-white">System Design Patterns (C++)</h5>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  A multi-threaded server using Pipeline and Leader-Follower concurrency patterns to efficiently handle operations over TCP. Optimized performance and scalability with thread synchronization and resource management.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Technical Skills</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>C/C++, Java, Python, Shell, TypeScript, CSS, HTML, SQL</li>
                <li>MongoDB, MySQL</li>
                <li>React, Next.js, Node.js, Symfony</li>
                <li>Windows, Linux</li>
                <li>Git, Prisma ORM, Doctrine ORM</li>
              </ul>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="#" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Full Resume
              </a>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:050-958-4324" 
                  className="text-blue-600 hover:text-blue-700 transition"
                >
                  050-958-4324
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:benami171@gmail.com" 
                  className="text-blue-600 hover:text-blue-700 transition"
                >
                  benami171@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Petah Tikva, Israel
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <a 
                  href="https://linkedin.com/in/LinkedIn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-700 transition"
                >
                  LinkedIn
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <a 
                  href="https://github.com/Github" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-700 transition"
                >
                  Github
                </a>
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
            © {new Date().getFullYear()} Gal Ben Ami. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}