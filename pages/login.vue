<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <form>
      <div>
        <p class="font-poppins text-[36px] text-[#FBF5E3] mb-[33px] text-center">Log in</p>
      </div>
      <div>
        <input
          class="w-[450px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Email or Username"
          required
        />
      </div>
      <div>
        <input
          type="password"
          class="w-[450px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Password"
          required
        />
      </div>
      <div class="text-center mb-[22px]">
        <a href="#" class="text-[#FBF5E3] font-inter underline underline-offset-4">Forgot password?</a>
      </div>
      <div class="text-center mb-[80px]">
        <button type="submit" class="bg-[#FBF5E3] rounded-[10px] w-[119px] h-[40px]"><p class="text-[#164D4D] font-inter font-bold">SUBMIT</p></button>
      </div>
      <div class="text-center"><a href="/signup" class="text-[#FBF5E3] font-inter underline underline-offset-4">Don't have an account yet? Sign up!</a></div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped></style>
