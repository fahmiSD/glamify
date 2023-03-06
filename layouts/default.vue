<template>
  <div>
    <header
      class="shadow-sm bg-[#0C3434] sticky top-0 z-50 md:px-20 p-5 md:p-0"
    >
      <nav
        class="container mx-auto h-[79px] md:flex items-center justify-around hidden"
      >
        <a href="/"
          ><p class="text-white font-bold text-xl">glamify beauty</p></a
        >
        <form>
          <div class="flex">
            <div class="relative w-[471px] h-[55px]">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 pl-[26px] w-full h-[55px] z-20 text-sm text-gray-900 bg-gray-50 rounded-2xl border border-[#E6E6E6] focus:outline-none focus:border-[#164D4D] ring-inset focus:ring focus:ring-[#164D4D]"
                placeholder="Search for your product..."
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
            <NuxtLink to="/product-recomendation"
              ><p class="text-white text-center">
                Recomendation <br />Request
              </p></NuxtLink
            >
          </li>
          <li>
            <a href="/detail-product"
              ><p class="text-white text-center">
                Review <br />
                Product
              </p></a
            >
          </li>
          <li>
            <NuxtLink to="/login" class=""
              ><p class="text-white text-center">
                Login / <br />Sign up
              </p></NuxtLink
            >
          </li>
        </ul>
      </nav>
      <nav class="md:hidden">
        <div class="flex justify-between">
          <div>
            <a href="/"
              ><p class="text-white font-bold text-xl">glamify beauty</p></a
            >
          </div>
          <div>
            <!-- The button to open modal -->
            <label for="modalNavbar" class="">
              <svg
                class="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
                />
              </svg>
            </label>

            <!-- Put this part before </body> tag -->
            <input type="checkbox" id="modalNavbar" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative bg-white h-screen">
                <label for="modalNavbar" class="absolute right-4 top-4"
                  ><img src="/xModal.svg" alt=""
                /></label>
                <div class="flex flex-col">
                  <form>
                    <div class="flex pt-10">
                      <div class="relative w-[471px] h-[55px]">
                        <input
                          type="search"
                          id="search-dropdown"
                          class="block p-2.5 pl-[26px] w-full h-[55px] z-20 text-sm text-gray-900 bg-gray-50 rounded-2xl border border-[#E6E6E6] focus:outline-none focus:border-[#164D4D] ring-inset focus:ring focus:ring-[#164D4D]"
                          placeholder="Search for your product..."
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
                  <label for="modalNavbar">
                    <ul class="flex flex-col gap-10 pt-10">
                      <li>
                        <NuxtLink to="/product-recomendation"
                          ><p
                            class="text-center text-[#164d4d] font-semibold text-xl"
                          >
                            Recomendation <br />
                            Request
                          </p></NuxtLink
                        >
                      </li>
                      <li>
                        <a href="/detail-product"
                          ><p
                            class="text-center text-[#164d4d] font-semibold text-xl"
                          >
                            Review <br />
                            Product
                          </p></a
                        >
                      </li>
                      <li>
                        <NuxtLink to="/login" class=""
                          ><p
                            class="text-center text-[#164d4d] font-semibold text-xl"
                          >
                            Login / <br />
                            Sign up
                          </p></NuxtLink
                        >
                      </li>
                    </ul>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
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
