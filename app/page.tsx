import Image from 'next/image';
import Link from 'next/link';
import bridge_preview from '../public/images/bridge_preview.png';
import ml_screenshot from '../public/images/ml_screenshot.png';
import netcat_screenshot from '../public/images/netcat_screenshot.png';

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
              className="
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white font-semibold
              px-6 py-3
              rounded-lg
              shadow
              hover:shadow-lg
              transform transition-all duration-200
              hover:-translate-y-1
            "
            >
              My Projects
            </Link>
            <Link
              href="#resume"
              className="
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white font-semibold
              px-6 py-3
              rounded-lg
              shadow
              hover:shadow-lg
              transform transition-all duration-200
              hover:-translate-y-1
            "
            >
              Resume
            </Link>
            <Link
              href="#contact"
              className="
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white font-semibold
              px-6 py-3
              rounded-lg
              shadow
              hover:shadow-lg
              transform transition-all duration-200
              hover:-translate-y-1
            "
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Motivated Computer Science student with a solid foundation in object-oriented programming, algorithms, and software development. Experienced in full-stack development. Available for full-time work.            </p>
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
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <Image
                  src={bridge_preview}
                  alt="Israel Bridge Federation Website"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Israel Bridge Federation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Building a brand-new web application for the IBF from scratch, using Next.js, TypeScript, Tailwind CSS, and Prisma. Replacing their outdated system, the project emphasizes accessibility, user-friendliness, secure payments, membership management, and an advanced rating system.                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Prisma
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-600 italic">Currently in progress</span>
                </div>
              </div>
            </div>
            {/* Project 3 - With Architecture Diagram */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 230" className="h-full">
                  {/* Simple architecture diagram */}
                  <rect x="50" y="20" width="120" height="50" rx="5" fill="#4B5563" stroke="#60A5FA" strokeWidth="2" />
                  <text x="110" y="50" fontSize="14" textAnchor="middle" fill="white">Client</text>

                  <rect x="190" y="90" width="120" height="50" rx="5" fill="#4B5563" stroke="#60A5FA" strokeWidth="2" />
                  <text x="250" y="120" fontSize="14" textAnchor="middle" fill="white">Leader Thread</text>

                  <rect x="50" y="160" width="120" height="50" rx="5" fill="#4B5563" stroke="#60A5FA" strokeWidth="2" />
                  <text x="110" y="190" fontSize="14" textAnchor="middle" fill="white">Follower 1</text>

                  <rect x="190" y="160" width="120" height="50" rx="5" fill="#4B5563" stroke="#60A5FA" strokeWidth="2" />
                  <text x="250" y="190" fontSize="14" textAnchor="middle" fill="white">Follower 2</text>

                  <rect x="330" y="160" width="120" height="50" rx="5" fill="#4B5563" stroke="#60A5FA" strokeWidth="2" />
                  <text x="390" y="190" fontSize="14" textAnchor="middle" fill="white">Follower 3</text>

                  <line x1="110" y1="70" x2="200" y2="90" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="250" y1="140" x2="110" y2="160" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="250" y1="140" x2="250" y2="160" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="250" y1="140" x2="380" y2="160" stroke="#60A5FA" strokeWidth="2" />
                </svg>
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
                    Linux
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
                    href="https://github.com/benami171/Pipeline_Leader-follower"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* Project 3 Netcat clone */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <Image
                  src={netcat_screenshot}
                  alt="Netcat Clone"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Netcat Clone
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A custom netcat-like tool that opens clients and servers over TCP, UDP, and UNIX domain sockets.
                  It reroutes standard input/output based on flags and even includes a Tic-Tac-Toe game you can play against the computer, showcasing how versatile network communication can be across different protocols.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    C++
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Linux
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    TCP
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    UDP
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    UNIX-Sockets
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/benami171/os_exe2/tree/master"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* Project 2 - ML - Text Classification */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <Image
                  src={ml_screenshot}
                  alt="ML - Text Classification"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  ML - Text Classification
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Using the 20 Newsgroups dataset, investigating the performance of various machine learning algorithms for text classification, and how does different dimensionality reduction techniques affect the results.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Sklearn
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Matplotlib
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Pandas
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/benami171/ML_FinalProject/tree/main"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* Project 4 - With Code Snippet */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="h-48 bg-gray-800 overflow-hidden">
                <div className="p-3 h-full overflow-hidden">
                  <pre className="text-xs text-green-400 h-full overflow-hidden">
                    <code>
                      {`async def receive_data(self) -> List[bytes] | None:
        """
        1. receive data from the socket and divide it into packet and frames
        2. if the packet is not SYN/ACK/SYN_ACK/FIN start measuring time
        3. if the stream_id is not in the streams stats dictionary,add it
        """
        frames_received_counter = 0
        while True:
            received_data, address = self.sock.recvfrom(QUIC_PACKET.Max_size)
            received_packet, received_frames = QUIC_PACKET.deserialize_data(received_data)

            if received_packet.packet_flag not in (FLAGS.SYN, FLAGS.ACK,
                                                   FLAGS.SYN_ACK, FLAGS.FIN):

                frames_received_counter += len(received_frames)
                # GOT THE FIRST PACKET OF THE SPECIFIC STREAM, START MEASURING TIME

                if received_packet.packet_flag == FLAGS.FIRST_PACKET:
                    if received_frames[0].stream_id not in self.streams_stats:
                        self.streams_stats[received_frames[0].stream_id] = Stats(received_frames[0].stream_id, 0, 0, 0,
                                                                                 time.time())
                    if OVERALL_DATA not in self.connection_stats:
                        self.connection_stats[OVERALL_DATA] = Stats(0, 0, 0, 0, time.time())

                if len(received_frames) != 0:
                    self.streams_stats[received_frames[0].stream_id].frames_amount += len(received_frames)
                    self.connection_stats[OVERALL_DATA].frames_amount += len(received_frames)
                # GOT THE LAST PACKET OF THE SPECIFIC STREAM, MEASURING END TIME
                if received_packet.packet_flag == FLAGS.LAST_PACKET:
                    self.streams_stats[received_frames[0].stream_id].time = time.time() - self.streams_stats[
                        received_frames[0].stream_id].time`}
                    </code>
                  </pre>
                </div>
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
                    href="https://github.com/benami171/QUIC_Multi_Streams"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section with Colorful Items */}
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
                {[
                  { name: 'C/C++', color: 'bg-blue-100 text-blue-700 border-blue-300' },
                  { name: 'Java', color: 'bg-blue-100 text-blue-700 border-blue-300' },
                  { name: 'Python', color: 'bg-blue-100 text-blue-700 border-blue-300' },
                  { name: 'TypeScript', color: 'bg-blue-100 text-blue-700 border-blue-300' },
                  { name: 'JavaScript', color: 'bg-blue-100 text-blue-700 border-blue-300' },
                  { name: 'HTML', color: 'bg-blue-100 text-blue-700 border-blue-300' },
                  { name: 'CSS', color: 'bg-blue-100 text-blue-700 border-blue-300' },
                  { name: 'SQL', color: 'bg-blue-100 text-blue-700 border-blue-300' },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-4 rounded-lg text-center shadow-sm border hover:shadow-md transition ${skill.color}`}
                  >
                    <p className="font-medium">{skill.name}</p>
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
                {[
                  { name: 'React', color: 'bg-blue-200 text-blue-800 border-blue-400' },
                  { name: 'Next.js', color: 'bg-blue-200 text-blue-800 border-blue-400' },
                  { name: 'Node.js', color: 'bg-blue-200 text-blue-800 border-blue-400' },
                  { name: 'Symfony', color: 'bg-blue-200 text-blue-800 border-blue-400' },
                  { name: 'Tailwind CSS', color: 'bg-blue-200 text-blue-800 border-blue-400' },
                  { name: 'Prisma ORM', color: 'bg-blue-200 text-blue-800 border-blue-400' },
                  { name: 'Doctrine ORM', color: 'bg-blue-200 text-blue-800 border-blue-400' },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-4 rounded-lg text-center shadow-sm border hover:shadow-md transition ${skill.color}`}
                  >
                    <p className="font-medium">{skill.name}</p>
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
                {[
                  { name: 'Git', color: 'bg-blue-300 text-blue-900 border-blue-500' },
                  { name: 'MongoDB', color: 'bg-blue-300 text-blue-900 border-blue-500' },
                  { name: 'MySQL', color: 'bg-blue-300 text-blue-900 border-blue-500' },
                  { name: 'Windows', color: 'bg-blue-300 text-blue-900 border-blue-500' },
                  { name: 'Linux', color: 'bg-blue-300 text-blue-900 border-blue-500' },
                  { name: 'TCP/IP', color: 'bg-blue-300 text-blue-900 border-blue-500' },
                  { name: 'Multi-threading', color: 'bg-blue-300 text-blue-900 border-blue-500' }
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-4 rounded-lg text-center shadow-sm border hover:shadow-md transition ${skill.color}`}
                  >
                    <p className="font-medium">{skill.name}</p>
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
              Motivated Computer Science student with a solid foundation in object-oriented programming, algorithms, and software development. Experienced in full-stack development. Available for full-time work.
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
                Developing IBF’s brand-new website (frontend & backend) using Next.js, Prisma, Tailwind CSS, and TypeScript. 
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
                href="/api/download-resume"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
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
                  href="https://www.linkedin.com/in/gal1-ben7-ami1/"
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
                  href="https://github.com/benami171"
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