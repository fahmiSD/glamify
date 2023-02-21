<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <form>
      <div>
        <p class="font-poppins text-[36px] text-[#FBF5E3] mb-[17px] text-center">Share some facts to provide<br />the best recommendations</p>
      </div>
      <div class="flex justify-center items-center">
        <input
          datepicker
          datepicker-autohide
          datepicker-format="dd-mm-yyyy"
          type="text"
          class="w-[450px] h-[58px] mb-[24px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] text-center text-[#131414] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
          placeholder="Birthdate (dd-mm-yyyy)"
        />
      </div>

      <div class="flex justify-center items-center">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Dropdown button
          <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mb-[47px] flex justify-center">
        <div class="w-[10px] h-[10px] bg-[#FBF5E3] rounded-full mr-[27px]"></div>
        <div class="w-[10px] h-[10px] border-solid border-2 border-[#FBF5E3] rounded-full mr-[27px]"></div>
        <div class="w-[10px] h-[10px] border-solid border-2 border-[#FBF5E3] rounded-full mr-[27px]"></div>
      </div>

      <div class="text-center">
        <!-- <button type="submit" class="bg-[#FBF5E3] rounded-[10px] w-[119px] h-[40px]"><p class="text-[#164D4D] font-inter font-bold">CHECK EMAIL</p></button> -->
        <a href="/" class="bg-[#618686] px-[45px] py-[12px] rounded-[10px] w-[119px] h-[40px] text-[#FBF5E3] font-inter font-bold mr-[36px]">SKIP</a>
        <a href="/survey2" class="bg-[#FBF5E3] px-[45px] py-[12px] rounded-[10px] w-[119px] h-[40px] text-[#164D4D] font-inter font-bold">NEXT</a>
      </div>
    </form>
  </div>
</template>
<script setup></script>

<style scoped></style>
