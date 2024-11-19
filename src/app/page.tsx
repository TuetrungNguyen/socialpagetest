export default function Home() {
  return (
    <main className="h-screen bg-gray900 flex items-center justify-center px-6">
      <div className="card bg-gray800 max-w-[24rem] w-full items-center p-[clamp(1.5rem,_4vw,_2.4rem)] rounded-md">
        <img src="/images/avatar-jessica.jpeg" alt="Avatar" className="w-20 h-20 rounded-full mr-2" />
        <h1 className="text-white font-inter font-bold text-2xl pt-5 text-center">Jessica Randall</h1>
        <h1 className="text-cgreen font-inter font-semibold text-sm pt-2 text-center">London, United Kingdom</h1>
        <p className="text-white font-inter font-normal text-sm pt-5 text-center">&quot;Front-end developer and avid reader&quot;</p>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
          className="w-full bg-gray700 text-white text-sm font-bold mt-5 py-3 rounded-md hover:bg-cgreen hover:text-gray900 transition text-center block"
        >
          Github
        </a>

        <a href="https://www.frontendmentor.io" target="_blank" rel="noopener noreferrer"
          className="w-full bg-gray700 text-white text-sm font-bold mt-5 py-3 rounded-md hover:bg-cgreen hover:text-gray900 transition text-center block"
        >
          Frontend Mentor
        </a>

        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
          className="w-full bg-gray700 text-white text-sm font-bold mt-5 py-3 rounded-md hover:bg-cgreen hover:text-gray900 transition text-center block"
        >
          Linkedin
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
          className="w-full bg-gray700 text-white text-sm font-bold mt-5 py-3 rounded-md hover:bg-cgreen hover:text-gray900 transition text-center block"
        >
          Twitter
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
          className="w-full bg-gray700 text-white text-sm font-bold mt-5 py-3 rounded-md hover:bg-cgreen hover:text-gray900 transition text-center block"
        >
          Instagram
        </a>
      </div>
    </main>
  );
}
