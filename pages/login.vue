<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <form>
      <div>
        <p
          class="font-poppins font-bold md:font-normal text-2xl md:text-[36px] text-[#FBF5E3] md:mb-[33px] mb-4 text-center"
        >
          Log in
        </p>
      </div>
      <div class="flex justify-center items-center">
        <input
          class="md:w-[450px] w-[350px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:border-[#FBF5E3] focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Email or Username"
          required
        />
      </div>
      <div class="flex justify-center items-center">
        <input
          type="password"
          class="md:w-[450px] w-[350px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none ring-inset focus:border-[#FBF5E3] focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
          placeholder="Password"
          required
        />
      </div>
      <div class="text-center md:mb-[22px] mb-7">
        <a
          href="#"
          class="text-[#FBF5E3] font-inter underline underline-offset-4"
          >Forgot password?</a
        >
      </div>
      <div class="text-center md:mb-[80px] mb-7">
        <button
          @click="onSubmit"
          type="submit"
          class="bg-[#FBF5E3] rounded-[10px] md:w-[119px] md:h-[40px] px-8 py-2 md:px-0 md:py-0"
        >
          <p class="text-[#164D4D] font-inter font-bold">SUBMIT</p>
        </button>
      </div>
      <div class="text-center">
        <a
          href="/signup"
          class="text-[#FBF5E3] font-inter underline underline-offset-4 font-semibold"
          >Don't have an account yet? <br class="md:hidden" />
          Sign up!</a
        >
      </div>
    </form>
  </div>
</template>

<script setup>
function onSubmit() {
  const auth = useAuth();
  auth.value.isAuthenticated = true;
  console.log(auth.value.isAuthenticated);
  navigateTo("/");
}
</script>

<style scoped></style>
