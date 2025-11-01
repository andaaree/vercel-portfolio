import React from 'react';

const sks = [
  {
    val:75,
    desc:"HTML"
  },
  {
    val:80,
    desc:"Bootstrap"
  },
  {
    val:50,
    desc:"ReactJS"
  },
  {
    val:60,
    desc:"Database Management"
  },
  {
    val:85,
    desc:"Laravel"
  },
  {
    val:75,
    desc:"SEO Optimization"
  },
]

const skillEle = sks.map((s)=>{
  return(
    <div className="flex-row px-4">
      <progress className="progress progress-accent w-24 h-2 lg:w-52 lg:h-3" value={s.val} max="100"></progress>
      <label className='text-sm text-gray-700 lg:text-lg justify-self-center mx-8 lg:mx-10'>{s.desc}</label>
    </div>
  );
});

const Skills = ()=>{
  return(
    <>
      <h2 className="text-2xl text-center my-4">Skills</h2>
      <div className="bg-primary rounded p-3">
        {skillEle}
      </div>
    </>
  );
}

export default Skills;