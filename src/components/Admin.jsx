import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import CorecoLogo from "../assets/coreco logo.png";

const admin = () =>{
    return(
      <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900 md:mx-28 ">
  <div class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center">
        <img src={CorecoLogo} class="h-10 mr-3" alt="light-coreco-logo" />
        
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-light-coreco md:p-0 dark:text-white md:dark:hover:text-light-coreco dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-light-coreco md:p-0 dark:text-white md:dark:hover:text-light-coreco dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-light-coreco md:p-0 dark:text-white md:dark:hover:text-light-coreco dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-light-coreco md:p-0 dark:text-white md:dark:hover:text-light-coreco dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-light-coreco md:p-0 dark:text-white md:dark:hover:text-light-coreco dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<hr className='mb-6'/>
        <div class='flex flex-col items-center h-screen mt-20'>
            <h1 className='text-2xl font-semibold mb-10'>Admin Operations</h1>
             <div class='w-1/4 flex justify-center justify-around'>
              <div>
            <Table.HeaderCell>Create</Table.HeaderCell>
            <Link to='/create'>
              <Table.Cell> 
                <button className='bg-light-coreco rounded px-2  py-1 mt-2 text-white font-semibold'>Create</button>
              </Table.Cell>
            </Link>
            </div>
            <div>
            <Table.HeaderCell>Read</Table.HeaderCell>
            <Link to='/read'>
              <Table.Cell> 
              <button className='bg-light-coreco rounded px-2  py-1 mt-2 text-white font-semibold'>Read</button>

              </Table.Cell>
            </Link>
            </div>
            </div>
        </div>
      </div>
    )
}

export default admin;