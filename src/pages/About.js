import React from 'react';

const packagesJson = require('../../package.json');
const dependencies = packagesJson.dependencies;

function About() { 
  // Loop through dependencies and add to table
  const pkgEle = Object.keys(dependencies).map((key) => {
    return(
      <p className='m-3'>
       {key} : {dependencies[key]}
      </p>
    );
  });
  
  return (
    <div className='container p-3'>
      <h3 className='text-2xl'>This Website was built with : </h3>
      <div className='flex flex-col mt-3'>
        {pkgEle}
      </div>
    </div>
  );
}

export default About;