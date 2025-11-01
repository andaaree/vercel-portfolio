import React,{useEffect,useRef,useState} from 'react';
import {easeIn, motion,useAnimation,useInView} from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ModalImg from 'react-modal-image';
// Icons
import CoronavirusIcon from '@mui/icons-material/CoronavirusRounded';
import SanitizerIcon from '@mui/icons-material/SanitizerRounded';
import CleanHandsIcon from '@mui/icons-material/CleanHandsRounded'; 
import ArrowDownIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpIcon from '@mui/icons-material/ArrowUpwardRounded';


ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = [
  // invected
  16,
  //healthy
  64
];
const chartSetup = {
  labels: ["Invected","Healthy"],
  datasets: [
    {
      id:1,
      label:"COVID-19 Impact",
      data: chartData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
      options: {
        maintainAspectRatio : false
      }
    },
  ],
};
const Stats = ()=>{
  return (
    <div className="m-4 p-4 stats md:inline-grid block shadow"> 
      <div className="stat">
        <div className="stat-figure text-primary">
        <CoronavirusIcon />
        </div>
        <div className="stat-title">Province</div>
        <div className="stat-value text-primary">64</div>
        <div className="stat-desc">Total infected</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-primary">
          <SanitizerIcon />
        </div>
        <div className="stat-title">City</div>
        <div className="stat-value text-primary">14</div>
        <div className="stat-desc">Total infected</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-primary">
          <CleanHandsIcon />
        </div>
        <div className="stat-title">Subdistrict</div>
        <div className="stat-value text-primary">10</div>
        <div className="stat-desc">Total infected</div>
        
      </div>
    </div>
  );
}
const CarouselMyJT = ()=>{
  return(
    <div className="h-96 carousel carousel-vertical rounded-box">
      <div className="carousel-item h-full">
        <ModalImg alt='cart' hideDownload small="/images/projects/myjt/6.png" large="/images/projects/myjt/6.png" />
      </div>
      <div className="carousel-item h-full">
        <ModalImg alt='order detail' hideDownload small="/images/projects/myjt/7.png" large="/images/projects/myjt/7.png" />
      </div>
      <div className="carousel-item h-full">
        <ModalImg alt='products' hideDownload small="/images/projects/myjt/8.png" large="/images/projects/myjt/8.png" />
      </div>
      <div className="carousel-item h-full">
        <ModalImg alt='product detail' hideDownload small="/images/projects/myjt/9.png" large="/images/projects/myjt/9.png" />
      </div>
    </div>
  )
}

const varian = {
  hidden: {opacity:0},
  visible: {opacity:1 , transition: { easeIn, duration:0.5, delay:0.5}}
}

const Porto = ()=>{
  const ref = useRef();
  const inView = useInView(ref);
  const anim = useAnimation();
  const roles = [
    { label: "Super Admin", username: "supadmin", password: "supadmin123"},
    { label: "Doctor", username: "dokter", password:"dokter123" },
    { label: "Front Office", username: "adminfo", password:"admin123" },
  ];
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  useEffect(
    ()=>{
      let detect = inView ? varian.visible : varian.hidden;
      anim.start(detect);
    }
    ,[inView]
  );

  function handleSelect(e) { 
    const selectVal = e.target.value;
    setSelectedRole(selectVal);
   }

  return (
    <motion.div 
      ref={ref}
      variants={varian}
      initial='hidden'
      animate={anim}
      className='p-12'
    >
      <h1 id='porto' className='text-4xl my-10 text-center'>Projects Portfolio</h1>
      <div className="join join-vertical w-full">
        {/* Chart JogoTonggo */}
        <div className="collapse collapse-plus  join-item border border-base-300">
          <input type="checkbox"
          // defaultChecked
          className='peer'
          name="my-accordion-4" /> 
          <div className="collapse-title overflow-hidden md:text-xl text-md font-medium peer-checked:bg-neutral peer-checked:text-neutral-content">
          JogoTonggo
          </div>
          <div className="collapse-content md:overflow-hidden overflow-scroll scroll-smooth p-3 peer-checked:bg-neutral peer-checked:text-neutral-content">
            <div className="flex flex-col md:w-full w-72 justify-center">
              JogoTonggo is a Multilevel User COVID-19 Survey Website for E-Government Diskominfo Province
            </div>
            <div className="flex flex-col md:w-full w-72 justify-center">
              <h3 className="text-2xl p-4">Province Health Dashboard</h3>
              <Stats />
              <div className="flex flex-col md:w-full w-72 relative m-auto">
                <h3 className="text-xl">Civilians COVID-19 Invected</h3>
                <div className="my-6 mx-auto">
                <Pie data={chartSetup} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MyJT */}
        <div className="collapse collapse-plus join-item border border-base-300">
          <input type="checkbox" name="my-accordion-4" className='peer' /> 
          <div className="collapse-title md:text-xl text-md font-medium peer-checked:bg-neutral peer-checked:text-neutral-content">
            MyJT App
          </div>
          <div className="collapse-content peer-checked:bg-neutral peer-checked:text-neutral-content">
            <div class="flex flex-col">
              <h3>MyJT is a Province scope B2B Tire & Motorcycle Spare parts E-Commerce Website & Mobile App</h3>
            </div>
            <div className="flex justify-center">
              <CarouselMyJT />
            </div>
            <div className="flex justify-center">
                <h2>Hover inside image then Scroll <ArrowDownIcon /> for more</h2>
            </div>
          </div>
        </div>
        {/* Company Profile */}
        <div className="collapse collapse-plus join-item border border-base-300">
          <input type="checkbox" name="my-accordion-4" className='peer' /> 
          <div className="collapse-title md:text-xl text-md font-medium peer-checked:bg-neutral peer-checked:text-neutral-content">
            Company Profiles
          </div>
          <div className="collapse-content peer-checked:bg-neutral peer-checked:text-neutral-content"> 
            <div className="flex justify-center">
              <div className="lg:w-96 my-5 w-auto carousel rounded-box">
                <div className="carousel-item w-full">
                  <ModalImg className="w-full" alt='Product Showcase Detail' hideDownload small="/images/projects/showcase/10.png" large="/images/projects/showcase/detail_showcase.png" />
                </div> 
                <div className="carousel-item w-full">
                  <ModalImg className="w-full" alt='Showcase Homepage' hideDownload small="/images/projects/showcase/11.png" large="/images/projects/showcase/home_showcase.png" />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center">
              <p className='my-5'>Scroll : <kbd className="kbd kbd-sm">Shift</kbd> + ( <ArrowUpIcon /> / <ArrowDownIcon />)</p>
              <h3 className="text-lg md:text-2xl">URL : <a target='_blank' href="https://rainerserver.net/" className='link link-hover' rel="noreferrer">Rainer Server</a></h3>
            </div>
          </div>
        </div>
        {/* Perpus */}
        <div className="collapse collapse-plus join-item border border-base-300">
          <input type="checkbox" name="my-accordion-4" className='peer' /> 
          <div className="collapse-title md:text-xl text-md font-medium peer-checked:bg-neutral peer-checked:text-neutral-content">
            Digital Library
          </div>
          <div className="collapse-content peer-checked:bg-neutral peer-checked:text-neutral-content"> 
            <div className="flex justify-center">
              <div className="lg:w-96 my-5 w-auto carousel rounded-box">
                <div className="carousel-item w-full">
                  <ModalImg className="w-full" alt='Library Catalogue' hideDownload small="/images/projects/lib/1.png" large="/images/projects/lib/library_list.png" />
                </div> 
                <div className="carousel-item w-full">
                  <ModalImg className="w-full" alt='Library Media Stream Player' hideDownload small="/images/projects/lib/2.png" large="/images/projects/lib/library_player.png" />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center">
              <p className='my-5'>Scroll : <kbd className="kbd kbd-sm">Shift</kbd> + ( <ArrowUpIcon /> / <ArrowDownIcon />)</p>
              <h3 className='text-xl'>Demo URL : <a className='link link-hover' href="https://perpus.imv.co.id" target='_blank' rel='noreferrer'>Digital Library</a></h3>
              <h3 className="text-xl">Demo username : 12345678910</h3>
              <h3 className="text-xl">Demo password : 123456</h3>
            </div>
          </div>
        </div>
        {/* Roullete Event */}
        <div className="collapse collapse-plus join-item border border-base-300">
          <input type="checkbox" name="my-accordion-4" className='peer' /> 
          <div className="collapse-title md:text-xl text-md font-medium peer-checked:bg-neutral peer-checked:text-neutral-content">
            Dynamic Fullstack NU-SKIN Roullete Event Website
          </div>
          <div className="collapse-content peer-checked:bg-neutral peer-checked:text-neutral-content">
                <div className="flex flex-col items-center my-5">
                  <h3 className="text-lg">Client : <img src="/images/projects/roullete/logo.png" alt="nuskin_logo" className="inline w-24 md:w-40" /> </h3>
                </div>
                <div className="flex justify-center">
                  <div className="lg:w-96 my-5 w-auto carousel rounded-box">
                    <div className="carousel-item w-full">
                      <ModalImg className="w-full" alt='Roullete Client' hideDownload small="/images/projects/roullete/12.png" large="/images/projects/roullete/rlt.png" />
                    </div> 
                    <div className="carousel-item w-full">
                      <ModalImg className="w-full" alt='Admin Page Roullete' hideDownload small="/images/projects/roullete/13.png" large="/images/projects/roullete/roullete_admin.png" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className='my-5 text-center'>Scroll : <kbd className="kbd kbd-sm">Shift</kbd> + ( <ArrowUpIcon /> / <ArrowDownIcon />)</p>
                  <ul className="mx-auto">
                    <li className='my-5'>
                      <p className='md:text-2xl text-lg'>FrontEnd</p>
                      <ul>
                        <li><h3 className='md:text-xl text-lg'>URL FrontEnd : <a className='link link-hover' href="https://draxansh.my.id/ns_demo" target='_blank' rel='noreferrer'>Roullete Event</a></h3></li>
                      </ul>
                    </li>
                    <hr/>
                    <li className='my-5'>
                      <p className='md:text-2xl text-lg'>Admin Panel</p>
                      <ul>
                        <li><h3 className='md:text-xl text-lg'>URL BackEnd : <a className='link link-hover' href="https://api.draxansh.my.id/ns_demo" target='_blank' rel='noreferrer'>Digital Library</a></h3></li>
                        <li><h3 className="md:text-xl text-lg">Demo username : demo</h3></li>
                        <li><h3 className="md:text-xl text-lg">Demo password : demo1234</h3></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
        </div>
        {/* RSCM Information System */}
        <div className="collapse collapse-plus join-item border border-base-300">
          <input type="checkbox" name="my-accordion-4" className='peer' /> 
          <div className="collapse-title md:text-xl text-md font-medium peer-checked:bg-neutral peer-checked:text-neutral-content">
            Hospital Information System
          </div>
          <div className="collapse-content peer-checked:bg-neutral peer-checked:text-neutral-content">
            <div className="flex flex-col items-center my-5">
              <h3 className="text-lg">Client : <img src="/images/projects/rscm/rscm.png" alt="rscm_logo" className="inline md:w-40 w-auto" /> </h3>
            </div>
            <div className="flex justify-center">
              <div className="lg:w-96 my-5 w-auto carousel rounded-box">
                <div className="carousel-item w-full">
                  <ModalImg className="w-full" alt='RSCM Admin Panel' hideDownload small="/images/projects/rscm/rscm_admin.png" large="/images/projects/rscm/rscm_admin.png" />
                </div> 
                <div className="carousel-item w-full">
                  <ModalImg className="w-full" alt='RSCM Dashboard' hideDownload small="/images/projects/rscm/rscm_home.png" large="/images/projects/rscm/rscm_home.png" />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center">
              <p className='my-5'>Scroll : <kbd className="kbd kbd-sm">Shift</kbd> + ( <ArrowUpIcon /> / <ArrowDownIcon />)</p>
              <h3 className="text-2xl">URL : <a target='_blank' href="https://demo.draxansh.my.id/" className='link link-hover' rel="noreferrer">Demo RSCM</a></h3>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Porto;