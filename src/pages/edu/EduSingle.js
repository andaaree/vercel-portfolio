import React,{useEffect,useRef} from 'react';
import {easeIn, motion,useAnimation,useInView} from 'framer-motion';
import Skills from './Skills';

const EduSingle = ()=>{
  const ref = useRef();
  const firstref = useRef();
  const inView = useInView(ref);
  const inFirstView = useInView(firstref);

  const item = { 
    hidden: {opacity:0},
    visible: {opacity:1 , transition: { easeIn, duration:0.5, delay:0.5}}
  }
  const first = {
    hidden:{opacity:0},
    visible: { opacity:1 , transition: { duration:0.5, delay:0.2} }
  }

  const firstCtr = useAnimation();
  const ctr = useAnimation();


  useEffect(()=>{
    let res = inView ? item.visible : item.hidden ;
    let firstRes = inFirstView ? first.visible : first.hidden;

    ctr.start(res);
    firstCtr.start(firstRes);

  },[inView, inFirstView]);

  return (
    <>
      {/* Example Tooltip
      <div className="tooltip" data-tip="hello">
        <button className="btn">Hover me</button>
      </div>} */}
      <h1 id='edu' className="text-4xl text-center font-bold mt-5">Careers & Educations</h1>
      <h1 className="text-2xl text-center font-bold my-3">My Careers</h1>      
      {/* AOS maybe(?) */}
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-5">
        <motion.li
          className='bg-neutral'
          initial={{ opacity:0 }}
          animate={{ opacity:1 , transition: { duration:1, delay:0.45} }}
        >
          <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">  
            <time className="font-mono italic">May, 2023 - Now</time>
            <div className="text-lg font-black">Freelance Website Developer</div>
            <article>
              <p className="my-5">
                Deliver various fullstack websites with different views and usages. From the results of this work there are also various features such as multi-level users, a content management system, dynamic data retrieval using API, and permission settings.
              </p>
              <p className="my-5">
                Utilized with Laravel framework, HTML, CSS, and JavaScript to build functional and visually appealing websites. Designed with Bootstrap and several js scripts for alert animations and roullete spinner.
                Capable to work individually and collaborated with clients to achieve goals together and to ensure high-quality and bug-free code.
              </p>
            </article>
          </div>
          <hr />
        </motion.li>
        <motion.li
          ref={firstref}
          variants={first}
          initial='hidden'
          animate={firstCtr}
        >
          <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end md:text-end mb-10">  
            <time className="font-mono italic">November, 2021 - May, 2023</time>
            <div className="text-lg font-black">Fullstack Website Developer, Axioo Group</div>
            <article>
              <p className="my-2">
                Developed various websites for clients, including a digital library with offline wiki included from a local
                server via Wi-Fi, a CMS company profile, and a custom reseller registration system with email
                notification and registration status.
              </p>
              <p className="my-2">
                Utilized Laravel framework, HTML, CSS, and JavaScript to build functional and visually appealing
                websites. Collaborated with cross-functional teams to gather requirements, design and implement
                solutions, and deliver projects on time and within budget. Conducted thorough testing and debugging to
                ensure high-quality and bug-free code. Assisted in website optimization for improved performance and
                user experience.
              </p>
            </article>
          </div>
          <hr />
        </motion.li>
        <motion.li
          className='bg-neutral'
          ref={firstref}
          variants={first}
          initial='hidden'
          animate={firstCtr}
        >
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start mb-10">
            <time className="font-mono italic">January, 2020 - June, 2020</time>
            <div className="text-lg font-black">Fullstack Website Developer, Diskominfo Province E-Government Department</div>
            <article>
              <p className='my-2'>
                Developed and maintained a multilevel user COVID survey website for the government sector.
              </p>
              <p className='my-2'>
                Utilized codeigniter framework, HTML, CSS, and JavaScript to create user-friendly web interfaces.
                Ensuring user comfort is a top priority, which is why the survey website was designed with server-side
                content to create a seamless experience for users. Collaborated with stakeholders to gather requirements,
                implement solutions, and ensure timely project delivery.
              </p>
              <p className='my-2'>
                Conducted testing and debugging to ensure high-quality and error-free code.
                Worked closely with a team to ensure smooth functioning of the website and resolve any issues.
                Successfully completed the project within a tight deadline of 6 months.
              </p>
            </article>
          </div>
          <hr />
        </motion.li>
      </ul>
      <hr/>
      <h1 className="text-2xl text-center font-bold mt-3">My Educations</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-5">
        <motion.li
          ref={ref}
          variants={item}
          initial="hidden"
          animate={ctr}
        >
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end md:text-end mb-10">
            <time className="font-mono italic">September, 2018 - September 2021</time>
            <div className="text-lg font-black">
              Diploma III, Dian Nuswantoro University
            </div>
            <article>
              <p>Entitled as Ahli Madya Komputer or as .A.Md. Kom</p>
              <p>Thesis title : <div class="font-bold">E-COMMERCE INFORMATION SYSTEM `MY JT` AT `PT. JATENG TOP` BASED ON ANDROID MOBILE</div> graded as 3.56 GPA</p>
            </article>
          </div>
          <hr/>
        </motion.li>
        <motion.li
          ref={ref}
          variants={item}
          initial="hidden"
          animate={ctr}
        >
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start mb-10">
            <time className="font-mono italic">June 2018</time>
            <div className="text-lg font-black">
              11 National High School
            </div>
          </div>
        </motion.li>
      </ul>
      <motion.div
        className='flex justify-center'
        ref={ref}
        variants={item}
        initial="hidden"
        animate={ctr}
      >
        <hr />
        <div className="flex-col">
          <Skills />
        </div>
      </motion.div>
    </>
  )
}

export default EduSingle;