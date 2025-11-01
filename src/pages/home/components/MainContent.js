import React from 'react';
import TypeIt from 'typeit-react';
import Moment from 'react-moment';
import Edu from "../../edu/EduSingle";
import Porto from "../../portfolio/PortoSingle";
import { SpeedInsights } from "@vercel/speed-insights/react"

// const [index,setIndex] = useState(0);
  let chatAr = [
    {
      send:true,str:"Hi there, I'm Cindy. HR staff from Any Company. Can you introduce yourself?"
    },
    {
      send:false,str:[
        "Hi, I'm Andar. I'm a Fullstack Website Developer experienced in Laravel framework and ReactJS. You can see my Portfolio",
        <i><a className={"link link-hover"} href='#porto'>&nbsp;below</a></i>,
        " or ",
        <i><a className={"link link-hover"} href='/portfolio'>&nbsp;here</a></i>
      ]
    },
    {
      send:true,str:"Nice to meet you Andar. That's awesome! Can i also see your resume?"
    },
    {
      send:false,str:[
        "Yeah, sure. There's also my careers shown",
        <i><a className={"link link-hover"} href='#edu'>&nbsp;below</a></i>,
        " or ",
        <i><a className={"link link-hover"} href='/edu'>&nbsp;here!</a></i>
      ]
    }
  ];

const MainContent = () => {

  function shuffled(){
    // declare the function
    const shuffle = (array) => { 
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array; 
    };
  
    // Usage 
    const arCol = [
      "neutral",
      "accent",
      "secondary",
      "primary",
    ];
  
    let newAr = shuffle(arCol);
    return newAr[0];
  };

  const typeItEle = chatAr.map((chat,idx) => {
    
    let shf = shuffled();

    // var opts={ loop:false, speed:70,startDelay:idx*3800,cursor:false }
    return (
      <div key={idx} className={chat.send ? "chat chat-start" : "chat chat-end"}>
        <div className="chat-image avatar">
          <div className="w-14 rounded-full">
            <img alt="Avatar" src={chat.send ? "https://xsgames.co/randomusers/assets/avatars/female/3.jpg" : "https://avatars.githubusercontent.com/u/50786504?s=400&u=ad78f29349249f290b1e08df04ef2a5ba495975b&v=4"} />
          </div>
        </div>
        <div className="chat-header">
          {chat.send ? "Your HRD" : "Andar"}
        </div>
        <div className={"chat-bubble chat-bubble-"+shf}>
          <TypeIt 
            className={"text-content-"+shf}
            options={{ loop:false, speed:20,startDelay:idx*3160,cursor:false }}>
              {chat.str}
            </TypeIt>
        </div>
        <div className="chat-footer text-accent opacity-50">
          Delivered at <Moment
            add={{ minutes:idx*10 }}
            withTitle
            titleFormat='D MMM YYYY'
            format='hh:mm A' 
            className="text-xs opacity-50" />
        </div>
      </div>
      )
  });
  
  return (
    <div className='container'>
      <div className="flex justify-center">
        <div className="flex-col w-screen lg:px-72 mt-10 md:px-52 px-5">
          {typeItEle}
          <Edu />
          <Porto />
        </div>
      </div>
     <SpeedInsights />
    </div>
  );
}

export default MainContent;