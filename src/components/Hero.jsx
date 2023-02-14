//Import content
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;
  return (
    <section id="home">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div 
          data-aos = "slide-left" 
          data-aos-delay = "800"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[20%] right-[-30%] text-[#EAF2FA] md:top-[35%] sm:right-[-20%]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn"><a href={hero.hireMe} target="_blank">{hero.btnText}</a></button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {
              hero.hero_content.map((content, i) => (
                <div key={i} data-aos="fade-down" data-aos-delay={i*1000} className={`flex items-center w-80 gap-5 ${i === 1 && "flex-row-reverse text-right"}`}>
                  <h3>{content.count}</h3>
                  <p>{content.text}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div className="md:h-[20rem] h-50 my-20 mr-20 md:my-5 md:mr-0">
          <img src={hero.image} data-aos="slide-up" alt="" className="h-full object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
