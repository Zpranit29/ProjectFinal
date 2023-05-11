import React from 'react'

function card(props) {
  return (
    <div>
    
<div class="max-w-5xl mb-6 md:ml-6  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div class="bg-light-coreco w-12 h-12 rounded-full uppercase
 font-bold flex items-center justify-center text-sm
 text-white">
  {props.id}
 </div>

    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore molestias cum fugiat nam possimus deserunt.</p>
    <a href="#" onClick={props.onclick} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-light-coreco rounded-lg hover:bg-light-light-coreco focus:ring-4 focus:outline-none focus:ring-dark-coreco dark:bg-dark-coreco dark:hover:bg-dark-coreco dark:focus:ring-dark-coreco">
        Book for me
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>

    </div>
  )
}

export default card
