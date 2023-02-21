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
          type="text"
          class="w-[450px] h-[58px] mb-[24px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] text-center text-[#131414] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
          placeholder="Birthdate (dd-mm-yyyy)"
        />
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
