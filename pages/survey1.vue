<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <form>
      <div>
        <p class="font-poppins text-[36px] text-[#FBF5E3] mb-[17px] text-center">External factors<br />affecting your skin</p>
      </div>
      <div>
        <input
          class="w-[450px] h-[58px] mb-[24px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none focus:ring focus:ring-[#207a7a] text-center text-[#131414] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
          placeholder="City (sun exposure, pollution)"
          required
        />
      </div>
      <div>
        <input
          class="w-[450px] h-[58px] mb-[24px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none focus:ring focus:ring-[#207a7a] text-center text-[#131414] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
          placeholder="What type of activity do you develop?"
          required
        />
      </div>
      <div>
        <input
          class="w-[450px] h-[58px] mb-[31px] rounded-[20px] bg-[##F9F9F9] border border-[#E6E6E6] focus:outline-none focus:ring focus:ring-[#207a7a] text-center text-[#131414] placeholder:font-inter placeholder:text-center placeholder:text-[#737373]"
          placeholder="Do you hydrate frequently?"
          required
        />
      </div>

      <div class="mb-[60px] grid grid-cols-2 gap-y-[27px] gap-x-[76px]">
        <div><p class="text-[#FFFFFF]">Smoke?</p></div>
        <div><p class="text-[#FFFFFF]">Drink alcohol?</p></div>
        <div><p class="text-[#FFFFFF]">Exercise often?</p></div>
        <div><p class="text-[#FFFFFF]">Sleep well?</p></div>
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
