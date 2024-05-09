import banner from '../../assets/banner1.jpg'
import banner1 from '../../assets/banner2.jpg'
import banner2 from '../../assets/banner3.jpg'

const Hero = () => {
    return (
        <div>
            {/* <!-- Slider --> */}
<div class="px-4 lg:px-6 lg:px-8 py-10">
  <div data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }' class="relative">
    <div class="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)]  bg-gray-100 rounded-2xl dark:bg-neutral-800">
      <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
        {/* <!-- Item --> */}
        <div class="hs-carousel-slide">
          {/* <div class="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url( `url(${banner})`)] bg-cover bg-center bg-no-repeat"> */}
          <div
            className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${banner})` }} // Use inline style to set the background image
        >
            <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10 ">
              <span class="block text-black font-extrabold text-2xl">Tasty Food</span>
              <span class="block text-black text-xl md:text-3xl">Rewriting sport's playbook for billions of athletes</span>
              <div class="mt-5">
                <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-yellow-400 border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  Read Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Item --> */}

        {/* <!-- Item --> */}
        <div class="hs-carousel-slide">
        <div
            className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${banner1})` }} // Use inline style to set the background image
        >
            <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
              <span class="block text-black font-extrabold text-2xl">CoolApps</span>
              <span class="block text-black text-xl md:text-3xl">From mobile apps to gaming consoles</span>
              <div class="mt-5">
                <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-yellow-400 border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  Read Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Item --> */}

        {/* <!-- Item --> */}
        <div class="hs-carousel-slide">
        <div
            className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-fixed bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${banner2})` }} // Use inline style to set the background image
        >
            <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
              <span class="block text-black font-extrabold text-2xl">Grumpy</span>
              <span class="block text-black text-xl md:text-3xl">Bringing Art to everything</span>
              <div class="mt-5">
                <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-yellow-400  border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  Read Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Item --> */}
      </div>
    </div>

    {/* <!-- Arrows --> */}
    <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20">
      <span class="text-2xl" aria-hidden="true">
        <svg class="flex-shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
        </svg>
      </span>
      <span class="sr-only">Previous</span>
    </button>

    <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20">
      <span class="sr-only">Next</span>
      <span class="text-2xl" aria-hidden="true">
        <svg class="flex-shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
        </svg>
      </span>
    </button>
    {/* <!-- End Arrows --> */}
  </div>
</div>
{/* <!-- End Slider --> */}
        </div>
    );
};

export default Hero;