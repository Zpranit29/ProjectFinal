import React from 'react'
import Card from './card'
import CorecoLogo from "../assets/coreco logo.png";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link} from "react-router-dom";

function Customer() {

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
         
  }, [])
  useEffect(() => {
      axios.get(`https://643d248c6afd66da6aedfe86.mockapi.io/useradmin`)
          .then((response) => {
              setAPIData(response.data);
          })
  }, [])
  
  const setData = (data) => {
      let { id, firstName, lastName, checkbox } = data;
      localStorage.setItem('ID', id);
      localStorage.setItem('First Name', firstName);
      localStorage.setItem('Last Name', lastName);
      localStorage.setItem('Checkbox Value', checkbox);
  
      // update the target JSON file
      axios.post('https://643d248c6afd66da6aedfe86.mockapi.io/companypractice', {
          id: id,
          firstName: firstName,
          lastName: lastName,
          checkbox: checkbox
      })
      .then((response) => {
          console.log(response.data);
      })
      .catch((error) => {
          console.log(error);
      });
  }
  
  
  const setDataLog = (data) => {
      let { id, firstName, lastName, checkbox } = data;
      localStorage.setItem('ID', id);
      localStorage.setItem('First Name', firstName);
      localStorage.setItem('Last Name', lastName);
      localStorage.setItem('Checkbox Value', checkbox);
  
      // update the target JSON file
      axios.post('https://64547f96f803f345762a2b69.mockapi.io/copractice', {
          id: id,
          firstName: firstName,
          lastName: lastName,
          checkbox: checkbox
      })
      .then((response) => {
          console.log(response.data);
      })
      .catch((error) => {
          console.log(error);
      });
  }
  
  //////////////////////////////////////////////////
  
  
  const onDelete = (id) => {
      axios.delete(`https://643d248c6afd66da6aedfe86.mockapi.io/useradmin/${id}`)
   .then(() => {
      getData();
  })
  }
  
    const getData = () => {
      axios.get(`https://643d248c6afd66da6aedfe86.mockapi.io/useradmin`)
          .then((getData) => {
               setAPIData(getData.data);
           })
  }
 
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredData = APIData.filter((data) =>
  selectedCategory ?( selectedCategory==='Choose' ||  data.lastName === selectedCategory ): true
);

  return (
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
        <li>
          <a href="log" class="py-1 bg-dark-coreco px-2 rounded text-white font-semibold hover:bg-light-coreco">Log Book</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<hr className='mb-6'/>
    <div className=' flex flex-col lg:flex-row md:justify-evenly m-6 lg:m-0 '>
       <div>
                <div className='mb-6 lg:mb-0 '>
              <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available by Category</label>
              <select id="countries" class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-light-coreco focus:border-light-coreco block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-light-coreco dark:focus:border-light-coreco" onChange={(e) => setSelectedCategory(e.target.value)}>
                <option selected value='Choose'>Choose a Resource</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Seating Space">Seating Space</option>
                <option value="Product License">Product License</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Software Tester">Software Tester</option>
              </select>
              <div><Link to='/booked'> <button className="bg-black hover:bg-light-coreco text-white font-bold py-2 px-4 mt-4 rounded">Booked Resources</button></Link></div>
              

              </div>
             
        </div>
        <div>
       {
       filteredData.map((data) => (
        <Card
          id={data.firstName}
          name={data.lastName}
          onclick={() => {
            setData(data);
            setDataLog(data);
            onDelete(data.id);
          }}
        />
      ))
          
       }
       </div>

       </div>
    </div>


      
  )
}

export default Customer

