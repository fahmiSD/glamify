<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <form>
      <div>
        <p class="font-poppins text-[36px] text-[#FBF5E3] mb-[33px] text-center">Sign up</p>
      </div>
      <div class="flex justify-center items-center">
        <input
          class="w-[450px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Name"
          required
        />
      </div>
      <div class="flex justify-center items-center">
        <input
          type="email"
          class="w-[450px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Email"
          required
        />
      </div>
      <div class="flex justify-center items-center">
        <input
          class="w-[450px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Username"
          required
        />
      </div>
      <div class="flex justify-center items-center">
        <input
          type="password"
          class="w-[450px] h-[58px] mb-[46px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Password"
          required
        />
      </div>

      <div class="mb-[46px] flex justify-center">
        <div class="w-[10px] h-[10px] bg-[#FBF5E3] rounded-full mr-[27px]"></div>
        <div class="w-[10px] h-[10px] border-solid border-2 border-[#FBF5E3] rounded-full"></div>
      </div>

      <div class="text-center">
        <!-- <button type="submit" class="bg-[#FBF5E3] rounded-[10px] w-[119px] h-[40px]"><p class="text-[#164D4D] font-inter font-bold">NEXT</p></button> -->
        <a href="/confirmEmail" class="bg-[#FBF5E3] px-[45px] py-[12px] rounded-[10px] w-[119px] h-[40px] text-[#164D4D] font-inter font-bold">NEXT</a>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped></style>
