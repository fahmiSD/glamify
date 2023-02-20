<template>
  <div>
    <header class="shadow-sm bg-[#0C3434]">
      <nav class="container mx-auto h-[79px] flex items-center justify-around">
        <NuxtLink to="/">glamy beauty</NuxtLink>
        <form>
          <div class="flex">
            <div class="relative w-[350px] h-[50px]">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full h-[50px] z-20 text-sm text-gray-900 bg-gray-50 rounded-2xl border-gray-50 border-2"
                placeholder="Search for your product"
                required
              />
              <button
                type="submit"
                class="absolute top-0 right-0 bottom-0 p-2.5 text-sm font-medium text-white bg-[#164D4D] rounded-r-2xl border border-white hover:bg-[#164D4D]"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
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
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Recomendation Request</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">Review Product</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Login / Sign up</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
