<template>
  <div class="py-16 px-32">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-4">
        <div class="bg-white h-[256px] w-full rounded-3xl p-5 mb-8 group">
          <div class="flex justify-end">
            <div class="absolute">
              <div class="w-[43px] h-[33px] border border-[#164d4d] rounded-xl flex items-center justify-center drop-shadow-lg">
                <img src="/like.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="absolute mt-16">
              <!-- Modal toggle -->
              <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="text-[#fbf5e3] font-semibold bg-[#164d4d] border border-[#fbf5e3] rounded-xl px-10 py-3 hidden group-hover:block" type="button">REVIEW</button>
              <!-- Main modal -->
              <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div class="relative w-full h-full max-w-2xl md:h-auto">
                  <!-- Modal content -->
                  <div class="relative bg-white rounded-lg shadow">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-2 rounded-t">
                      <button
                        type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal"
                      >
                        <img src="/xModal.svg" alt="" />
                      </button>
                    </div>
                    <!-- Modal body -->
                    <div class="px-8 pb-8">
                      <div class="grid grid-cols-6 gap-3">
                        <div class="col-span-3">
                          <div class="flex justify-center mb-3">
                            <img src="/retinol.svg" alt="" width="120px" />
                          </div>
                          <div class="flex justify-center">
                            <p class="font-semibold text-center text-[#164d4d] mb-3 text-lg">Retinol in squalane 0.2%</p>
                          </div>
                          <p class="font-semibold text-lg text-center text-[#797878] mb-7">The ordinary</p>
                          <div class="flex justify-center gap-5 mb-3">
                            <img src="/iModal.svg" alt="" />
                            <p class="text-[#618686] font-semibold text-lg">How to review</p>
                          </div>
                          <p class="text-center text-[#618686] mb-3 font-light">1. Rate with stars</p>
                          <p class="text-center text-[#618686] mb-3 font-light">2. Describe your experience using the product and provide tips on how to get the best results </p>
                          <p class="text-center text-[#618686] mb-3 font-light">3. List the purpose or intent when using the product</p>
                        </div>
                        <div class="col-span-3 p-2">
                          <div class="flex gap-3 justify-center mb-5">
                            <img src="/star.svg" alt="" width="27px" />
                            <img src="/star.svg" alt="" width="27px" />
                            <img src="/star.svg" alt="" width="27px" />
                            <img src="/star.svg" alt="" width="27px" />
                            <img src="/star.svg" alt="" width="27px" />
                          </div>
                          <form action="">
                            <textarea
                              name=""
                              id=""
                              cols="30"
                              rows="10"
                              class="rounded-3xl border-2 border-[#e6e6e6] bg-[#f9f9f9] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:text-center placeholder:font-light text-center p-3"
                              placeholder="Describe your experience with the product... Did you like it? Do you have any tips on how to make the most out of the product?..."
                            ></textarea>
                            <textarea
                              name=""
                              id=""
                              cols="30"
                              rows="5"
                              class="rounded-3xl border-2 border-[#e6e6e6] bg-[#f9f9f9] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:text-center placeholder:font-light text-center p-3"
                              placeholder="Purpose of using the product: eg. antiaging, spots, imperfections..."
                            ></textarea>
                            <div class="flex justify-center">
                              <button class="text-white bg-[#e6e6e6] px-8 py-2 rounded-lg">PUBLISH</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <!-- Modal footer -->
                    <!-- <div
                      class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                    >
                      <button
                        data-modal-hide="defaultModal"
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        I accept
                      </button>
                      <button
                        data-modal-hide="defaultModal"
                        type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        Decline
                      </button>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mb-1">
            <img src="/retinol.svg" alt="retinol" width="105px" />
          </div>
          <div class="flex gap-1 justify-center mb-1">
            <img src="/yellowStar.svg" alt="star" width="20px" />
            <img src="/yellowStar.svg" alt="star" width="20px" />
            <img src="/yellowStar.svg" alt="star" width="20px" />
            <img src="/yellowStar.svg" alt="star" width="20px" />
            <img src="/halfYellowStar.svg" alt="star" width="10px" />
            <p class="text-[#797878]">(5)</p>
          </div>
          <p class="font-semibold text-center text-[#164d4d] mb-1">Retinol in squalane 0.2%</p>
          <p class="font-semibold text-center text-[#797878]">The ordinary</p>
        </div>
        <div class="bg-white w-full h-[166px] rounded-2xl mb-8 p-3">
          <p class="text-[#164d4d] text-center font-inter font-semibold">Description</p>
          <p class="text-xs font-poppins text-center text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur... Read more
          </p>
        </div>
        <div class="bg-white w-full h-[105px] rounded-2xl p-3 mb-8">
          <p class="text-[#164d4d] text-center font-inter font-semibold">Ingredients</p>
          <p class="text-xs font-poppins text-center text-[#737373]">Lorem, ipsum dolor, sit amet, consectetur adipiscing elit, sed do eiusmod, tempor incididunt ut labore et dolore. Read more</p>
        </div>
        <div class="bg-white w-full h-[83px] rounded-2xl p-3 mb-8">
          <p class="text-[#164d4d] text-center font-inter font-semibold">Target</p>
          <p class="text-xs font-poppins text-center text-[#737373]">Skin, aging, lines</p>
        </div>
        <div class="bg-white w-full h-[121px] rounded-2xl p-3 mb-8">
          <p class="text-[#164d4d] text-center font-inter font-semibold">Don'tmix with</p>
          <p class="text-xs font-poppins text-center text-[#737373]">Lorem, ipsum dolor, sit amet, consectetur adipiscing elit, sed do eiusmod, tempor incididunt ut labore et dolore. Read more</p>
        </div>
      </div>
      <div class="col-span-8">
        <div class="bg-white w-full h-[143px] rounded-xl mb-8 p-3">
          <p class="text-[#164d4d] text-center font-inter font-semibold">Top review</p>
          <p class="text-xs font-poppins text-center text-[#737373] mb-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...” Read more
          </p>
          <div class="flex justify-between">
            <div class="flex gap-2">
              <img src="/merry.svg" alt="merry" width="31px" />
              <div>
                <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                <p class="text-xs text-[#618686]">+14 upvotes</p>
              </div>
            </div>
            <div class="flex gap-1">
              <img src="/star.svg" alt="star" width="20px" />
              <img src="/star.svg" alt="star" width="20px" />
              <img src="/star.svg" alt="star" width="20px" />
              <img src="/star.svg" alt="star" width="20px" />
              <img src="/star.svg" alt="star" width="20px" />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 mb-5">
          <div class="bg-white w-full h-[153px] rounded-xl p-5">
            <p class="text-xs font-poppins text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
              </div>
              <div class="flex gap-1">
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
              </div>
            </div>
          </div>
          <div class="bg-white w-full h-[153px] rounded-xl p-5">
            <p class="text-xs font-poppins text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
              </div>
              <div class="flex gap-1">
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
              </div>
            </div>
          </div>
          <div class="bg-white w-full h-[153px] rounded-xl p-5">
            <p class="text-xs font-poppins text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
              </div>
              <div class="flex gap-1">
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
              </div>
            </div>
          </div>
          <div class="bg-white w-full h-[153px] rounded-xl p-5">
            <p class="text-xs font-poppins text-center text-[#737373] mb-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...” Read more</p>
            <div class="flex justify-between">
              <div class="flex gap-2">
                <img src="/merry.svg" alt="merry" width="31px" />
                <div>
                  <p class="text-sm font-semibold text-[#164d4d]">Mery</p>
                  <p class="text-xs text-[#618686]">+14 upvotes</p>
                </div>
              </div>
              <div class="flex gap-1">
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
                <img src="/star.svg" alt="star" width="20px" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mb-10">
          <button class="bg-[#fbf5e3] rounded-lg px-6 py-2 text-[#164d4d] font-bold">SHOW ALL REVIEW</button>
        </div>
        <div class="flex justify-center mb-8">
          <p class="text-[#fbf5e3] font-poppins text-xl">Featured in</p>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <div class="bg-white h-[245px] w-full rounded-3xl p-5 mb-4">
            <div class="flex justify-center items-center mb-2">
              <img src="/lighting.svg" alt="lighting" />
              <img src="/brush.svg" alt="brush" />
            </div>
            <p class="text-center mb-5">“I have a very formal event tomorrow and need help finding a long stay red lipstick! I won’t have time to retouch it for hours and don’t want to look messy in the picures. Can anyone help?”</p>
            <div class="flex justify-center">
              <button class="bg-[#164d4d] text-[#ffffff] rounded-xl text-sm px-2 py-1 font-bold">RECOMMEND NOW</button>
            </div>
          </div>
          <div class="bg-white h-[245px] w-full rounded-3xl p-5 mb-4">
            <div class="flex justify-center items-center mb-2">
              <img src="/lighting.svg" alt="lighting" />
              <img src="/brush.svg" alt="brush" />
            </div>
            <p class="text-center mb-5">“I have a very formal event tomorrow and need help finding a long stay red lipstick! I won’t have time to retouch it for hours and don’t want to look messy in the picures. Can anyone help?”</p>
            <div class="flex justify-center">
              <button class="bg-[#164d4d] text-[#ffffff] rounded-xl text-sm px-2 py-1 font-bold">RECOMMEND NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
