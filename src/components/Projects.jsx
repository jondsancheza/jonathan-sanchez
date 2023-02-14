//import content
import { content } from "../Content" 

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">{projects.title}</h2>
          <h4 className="subtitle" data-aos="fade-down">{projects.subtitle}</h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img 
            src={projects.image} 
            alt="" 
            data-aos="fade-right"
            className="max-w-[40vw] min-w-[18rem]"
          />
          <Swiper 
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs md:max-w-[35rem] drop-shadow-primary self-start"
          >
            {
              projects.project_content.map((content,i) =>(
                <SwiperSlide key={i} className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit ">
                  <img src={content.image} alt="..." className="rounded-2xl" />
                  <div className="flex flex-col gap-1 ,t-2">
                    <h5 className="font-bold font-Poppins pt-2">{content.title}</h5>
                    <button className="font-bold text-gray self-end"><a href={content.url} target="_blank">VIEW PROJECT</a></button>
                  </div>
                </SwiperSlide>
              ))
            }
            
          </Swiper>
        </div>
      </div>

    </section>
  );
};

export default Projects;
