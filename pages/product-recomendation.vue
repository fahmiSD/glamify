<template>
  <div class="py-16 px-32 h-screen">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-4">
        <div class="bg-white h-[245px] w-full rounded-3xl p-5 mb-4">
          <img
            :src="save1"
            @click="changeSave1"
            alt="save"
            class="absolute top-[140px] left-40 cursor-pointer"
          />
          <div class="flex justify-center items-center mb-2">
            <img src="/lighting.svg" alt="lighting" />
            <img src="/brush.svg" alt="brush" />
          </div>
          <p class="text-center mb-5">
            “I have a very formal event tomorrow and need help finding a long
            stay red lipstick! I won’t have time to retouch it for hours and
            don’t want to look messy in the picures. Can anyone help?”
          </p>
          <div class="flex justify-center">
            <button
              class="bg-[#164d4d] text-[#ffffff] rounded-xl text-sm px-2 py-1 font-bold"
            >
              RECOMMEND NOW
            </button>
          </div>
        </div>
        <div class="bg-white w-full h-[72px] rounded-3xl p-3">
          <p class="text-[#164d4d] text-center font-inter font-semibold">
            Category
          </p>
          <p class="text-xs font-poppins text-center text-[#737373]">
            Make up, lips, lipstick, long stay
          </p>
        </div>
      </div>
      <div class="col-span-8">
        <div class="grid grid-cols-2 gap-4 mb-5">
          <div class="bg-[#ebf4fa] h-[245px] w-full rounded-3xl p-8">
            <div class="flex justify-around gap-3 items-center mb-5">
              <p class="text-left text-xs max-w-[154px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud...”
              </p>
              <div class="w-[124px] h-[127px] bg-white rounded-xl">
                <div class="flex justify-center">
                  <img src="/retinol.svg" alt="" />
                </div>
                <p class="font-semibold text-center text-sm text-[#164d4d]">
                  Retinol in squalane 0.2%
                </p>
              </div>
            </div>
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
          <div class="bg-[#ebf4fa] h-[245px] w-full rounded-3xl p-8">
            <div class="flex justify-around gap-3 items-center mb-5">
              <p class="text-left text-xs max-w-[154px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud...”
              </p>
              <div class="w-[124px] h-[127px] bg-white rounded-xl">
                <div class="flex justify-center">
                  <img src="/retinol.svg" alt="" />
                </div>
                <p class="font-semibold text-center text-sm text-[#164d4d]">
                  Retinol in squalane 0.2%
                </p>
              </div>
            </div>
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
          <div class="bg-[#ebf4fa] h-[245px] w-full rounded-3xl p-8">
            <div class="flex justify-around gap-3 items-center mb-5">
              <p class="text-left text-xs max-w-[154px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud...”
              </p>
              <div class="w-[124px] h-[127px] bg-white rounded-xl">
                <div class="flex justify-center">
                  <img src="/retinol.svg" alt="" />
                </div>
                <p class="font-semibold text-center text-sm text-[#164d4d]">
                  Retinol in squalane 0.2%
                </p>
              </div>
            </div>
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
          <div class="bg-[#ebf4fa] h-[245px] w-full rounded-3xl p-8">
            <div class="flex justify-around gap-3 items-center mb-5">
              <p class="text-left text-xs max-w-[154px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud...”
              </p>
              <div class="w-[124px] h-[127px] bg-white rounded-xl">
                <div class="flex justify-center">
                  <img src="/retinol.svg" alt="" />
                </div>
                <p class="font-semibold text-center text-sm text-[#164d4d]">
                  Retinol in squalane 0.2%
                </p>
              </div>
            </div>
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
        <div class="flex justify-center">
          <div class="absolute mt-2">
            <!-- Modal toggle -->
            <button
              data-modal-target="recomendModal"
              data-modal-toggle="recomendModal"
              class="bg-[#fbf5e3] rounded-lg px-6 py-2 text-[#164d4d] font-bold"
              type="button"
            >
              ADD RECOMENDATION
            </button>
            <!-- Main modal -->
            <div
              id="recomendModal"
              tabindex="-1"
              aria-hidden="true"
              class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
              <div class="relative w-full h-full max-w-2xl md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow">
                  <!-- Modal header -->
                  <div class="flex items-start justify-between p-2 rounded-t">
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="recomendModal"
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
                          <p
                            class="font-semibold text-center text-[#164d4d] mb-3 text-lg"
                          >
                            Retinol in squalane 0.2%
                          </p>
                        </div>
                        <p
                          class="font-semibold text-lg text-center text-[#797878] mb-7"
                        >
                          The ordinary
                        </p>
                        <div class="flex justify-center gap-5 mb-3">
                          <img src="/iModal.svg" alt="" />
                          <p class="text-[#618686] font-semibold text-lg">
                            How to review
                          </p>
                        </div>
                        <p class="text-center text-[#618686] mb-3 font-light">
                          1. Rate with stars
                        </p>
                        <p class="text-center text-[#618686] mb-3 font-light">
                          2. Describe your experience using the product and
                          provide tips on how to get the best results 
                        </p>
                        <p class="text-center text-[#618686] mb-3 font-light">
                          3. List the purpose or intent when using the product
                        </p>
                      </div>
                      <div class="col-span-3 p-2">
                        <h2 class="text-center font-bold text-[#164d4d] mb-4">
                          What are you looking for?
                        </h2>
                        <form action="">
                          <textarea
                            name=""
                            v-model="input1"
                            @input="checkFilled"
                            id=""
                            cols="30"
                            rows="10"
                            class="rounded-3xl border-2 border-[#e6e6e6] bg-[#f9f9f9] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:text-center placeholder:font-light text-center p-3"
                            placeholder="Describe your experience with the product... Did you like it? Do you have any tips on how to make the most out of the product?..."
                          ></textarea>
                          <textarea
                            name=""
                            v-model="input2"
                            @input="checkFilled"
                            id=""
                            cols="30"
                            rows="5"
                            class="rounded-3xl border-2 border-[#e6e6e6] bg-[#f9f9f9] focus:outline-none ring-inset focus:ring focus:ring-[#207a7a] focus:border-[#207a7a] placeholder:text-center placeholder:font-light text-center p-3"
                            placeholder="Purpose of using the product: eg. antiaging, spots, imperfections..."
                          ></textarea>
                          <div class="flex justify-center">
                            <button :class="buttonClass">PUBLISH</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      save1: "saveGray.svg",
      input1: "",
      input2: "",
      filled: false,
    };
  },
  methods: {
    checkFilled() {
      if (this.input1 && this.input2) {
        this.filled = true;
      } else {
        this.filled = false;
      }
    },
    changeSave1() {
      if (this.save1 == "saveGray.svg") {
        this.save1 = "saveGold.svg";
      } else {
        this.save1 = "saveGray.svg";
      }
    },
  },
  computed: {
    buttonClass() {
      if (this.filled) {
        return "ml-5 text-white bg-[#164d4d] px-8 py-2 rounded-lg border-white";
      } else {
        return "ml-5 text-white bg-[#e6e6e6] px-8 py-2 rounded-lg";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
