<template>
  <div class="pt-10">
    <div class="flex justify-center">
      <p
        class="text-[#fbf5e3] font-bold text-6xl text-center tracking-wide leading-tight font-poppins"
      >
        Rate your favorite beauty <br />products
      </p>
    </div>

    <div id="controls-carousel" class="relative" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 2 -->
        <div
          class="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

    <div class="flex justify-center items-center">
      <p class="text-[#fbf5e3] text-4xl font-poppins">
        Explore new products recommended by similar users
      </p>
    </div>

    <div id="controls-carousel" class="relative" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 2 -->
        <div
          class="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

    <div class="flex justify-center items-center">
      <p class="text-[#fbf5e3] text-4xl font-poppins">Will you help out?</p>
    </div>

    <div id="controls-carousel" class="relative" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 2 -->
        <div
          class="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

    <div class="flex justify-center items-center mb-5">
      <button
        class="bg-[#fbf5e3] rounded-lg px-6 py-2 text-[#164d4d] font-bold"
      >
        REQUEST RECOMENDATION
      </button>
    </div>
    <div class="flex justify-center items-center mb-16">
      <p class="text-[#fbf5e3] text-4xl font-poppins">
        Explore products based on the problem to solve
      </p>
    </div>

    <div class="flex justify-center items-center mb-16">
      <div class="grid grid-cols-4 gap-10">
        <div class="flex justify-center items-center">
          <p class="absolute text-[#fbf5e3]">Psoriasis</p>
          <img src="psoriasis.svg" alt="" />
        </div>
        <div class="flex justify-center items-center">
          <p class="absolute text-[#fbf5e3]">Hyperpigmentation</p>
          <img src="hyperpigmentation.svg" alt="" />
        </div>
        <div class="flex justify-center items-center">
          <p class="absolute text-[#fbf5e3]">Rejuvenation</p>
          <img src="rejuvenation.svg" alt="" />
        </div>
        <div class="flex justify-center items-center">
          <p class="absolute text-[#fbf5e3]">Acne</p>
          <img src="acne.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="bg-[#0C3434] h-[406px] py-5">
      <div class="flex justify-center mb-6">
        <p class="text-[#fbf5e3] font-bold text-xl font-poppins">
          glamy beauty
        </p>
      </div>
      <div class="flex justify-center items-center mb-8">
        <p class="text-[#fbf5e3] text-4xl font-poppins">
          Receive updates on the latest products!
        </p>
      </div>

      <div class="flex justify-center">
        <form>
          <div class="flex gap-8">
            <input
              class="w-[210px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
              placeholder="Name..."
              required
            /><input
              class="w-[210px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
              placeholder="Last Name..."
              required
            />
          </div>
          <div>
            <input
              class="w-[450px] h-[58px] mb-[24px] rounded-[20px] bg-[#164D4D] border border-[#E6E6E6] focus:outline-none focus:ring focus:ring-[#FBF5E3] text-center text-[#FBF5E3] placeholder:font-inter placeholder:text-center placeholder:text-[#FBF5E3]"
              placeholder="email..."
              required
            />
          </div>
          <div class="flex justify-center">
            <button
              type="submit"
              class="bg-[#FBF5E3] rounded-[10px] w-[119px] h-[40px]"
            >
              <p class="text-[#164D4D] font-inter font-bold">SUBMIT</p>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="bg-[#0C3434] h-[246px] py-5">
      <div class="flex justify-center">
        <div class="max-w-[450px] flex gap-12">
          <p class="text-white font-poppins">About us</p>
          <p class="text-white font-poppins">The plaform</p>
          <p class="text-white font-poppins">Contact</p>
          <p class="text-white font-poppins">Imprint</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
</style>
