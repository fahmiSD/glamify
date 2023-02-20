<template>
  <div>
    <header class="shadow-sm bg-[#0C3434] sticky top-0 z-50">
      <nav class="container mx-auto h-[79px] flex items-center justify-around">
        <NuxtLink to="/"
          ><p class="text-white font-bold text-xl">glamy beauty</p></NuxtLink
        >
        <form>
          <div class="flex">
            <div class="relative w-[471px] h-[55px]">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full h-[55px] z-20 text-sm text-gray-900 bg-gray-50 rounded-2xl border-gray-50 border"
                placeholder="Search for your product"
                required
              />
              <button
                type="submit"
                class="absolute top-0 right-0 bottom-0 p-2.5 w-[60px] text-sm font-medium text-white bg-[#164D4D] rounded-r-2xl border border-white hover:bg-[#164D4D]"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <ul class="flex gap-24">
          <li>
            <NuxtLink to="/"
              ><p class="text-white text-center">
                Recomendation <br />Request
              </p></NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about"
              ><p class="text-white text-center">
                Review <br />
                Product
              </p></NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/login" class="btn"
              ><p class="text-white text-center">
                Login / <br />Sign up
              </p></NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="bg-green h-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}

body {
  background-color: #164d4d;
  margin: 0px;
}
</style>
