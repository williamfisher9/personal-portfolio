import "./Hero.css";

const Hero = () => {
  return (
    <div className="px-32 py-8">
        <div className="hero-section">
      <div className="flex flex-col justify-center">
        <div className="text-zinc-400 mt-4">
          <div className="flex gap-2 items-center my-4">
            <div className="size-3 rounded-full relative">
                <div className="absolute size-full bg-green-500 animate-ping rounded-full opacity-85"></div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto size-2 bg-green-500 rounded-full"></div>
            </div>
            <h1>Avilable for work</h1>
          </div>

          <h1 className="text-xl font-bold my-2">William Fisher</h1>
          <h1>Software Implementation and Support Engineer</h1>
          <h1>10+ Years of Experiece</h1>
          <h1>Software Developer</h1>
        </div>
        <div className="btn-group">
          <button className="btn flex gap-1">Download Resume <span className="material-symbols-rounded">download</span></button>
          <button className="btn flex gap-2">Contact Me <span className="material-symbols-rounded">contact_mail</span></button>
        </div>
      </div>
      <img src="profile.jpg" className='size-96' alt="profile-image" />
    </div>
    </div>
  );
};

export default Hero;
