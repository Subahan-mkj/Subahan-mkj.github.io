export default function Portfolio() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'SQL', 'Bootstrap', 'React', 'Figma', 'UI/UX'
  ];

  const projects = [
    {
      title: 'Hospital Outpatient Management System',
      image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop',
      description:
        'Hospital management platform with appointment scheduling, patient history, and AI-based summarization.',
      tech: 'HTML • CSS • JavaScript • Python • AI'
    },
    {
      title: 'Smart Print AI Intelligence',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      description:
        'AI-powered print request and delivery management system with workflow automation.',
      tech: 'Frontend • Automation • AI'
    }
  ];

  const mediaWorks = [
    {
      title: 'Branding Design',
      image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'UI/UX Work',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 text-lg mb-4 tracking-widest uppercase">
              Frontend Developer & UI Designer
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              SUBAHAN
            </h1>

            <h2 className="mt-4 text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              J
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
              Passionate IT student focused on building modern, responsive, and interactive digital experiences with frontend technologies, AI-powered systems, and creative visual storytelling.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
              alt="Profile"
              className="relative z-10 w-[380px] h-[500px] object-cover rounded-[40px] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[30px] border border-white/10"
            />
          </div>

          <div>
            <p className="text-cyan-400 uppercase tracking-widest mb-4">About Me</p>

            <h2 className="text-5xl font-bold leading-tight">
              Building Digital Experiences With Creative Design
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-relaxed">
              I specialize in frontend development, UI/UX design, responsive websites, and AI-powered systems.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-cyan-400 hover:text-black transition duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-widest mb-4">Creative Works</p>
            <h2 className="text-5xl font-bold">Media & Branding Projects</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mediaWorks.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-black/40"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest mb-4">Portfolio</p>
          <h2 className="text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[320px] object-cover hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                  {project.description}
                </p>

                <div className="text-cyan-400 font-semibold">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <p className="text-cyan-400 uppercase tracking-widest mb-4">Get In Touch</p>

        <h2 className="text-5xl font-bold leading-tight">
          Let's Build Something Amazing Together
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="mailto:mkj.subahan66@gmail.com"
            className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Subahan-mkj"
            target="_blank"
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 SUBAHAN J • Designed & Developed By Subahan
      </footer>
    </div>
  );
}
