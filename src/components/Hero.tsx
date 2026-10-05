function Hero() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-700">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="font-mono text-sm text-accent dark:text-blue-400">
          AI Operations Specialist
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Ricardo Español Rowe
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
          Ayudo a equipos de operaciones y atención al cliente a eliminar
          trabajo manual con IA.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="rounded-md bg-accent px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Ver proyectos
          </a>
          <a
            href="/cv/ricardo-espanol-rowe-es.pdf"
            download
            className="rounded-md border border-slate-300 px-5 py-3 font-semibold hover:border-accent hover:text-accent dark:border-slate-700 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
