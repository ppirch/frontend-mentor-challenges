const NFTPreviewCard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#14253d] shadow-md rounded-xl p-2 max-w-xs">
        <div className="relative group">
          <img src="./images/nft-preview-card/image-equilibrium.jpg" alt="NFT" className="rounded-xl " />
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end text-xl bg-gray-200 text-black font-semibold">
            Dwayne
          </div>
        </div>

        <div className="py-4 divide-y divide-[#2f415b]">
          <div>
            <p className="text-white font-outfit font-bold text-xl hover:text-[#00fff7]">Equilibrium #3429</p>
            <p className="text-[#8bacda] mt-2">Our Equilibrium collection promotes balance and calm.</p>
            <div className="grid grid-cols-2 my-2">
              <div className="flex items-center">
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg" className="inline">
                  <path
                    d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                    fill="#00FFF8"
                  />
                </svg>
                <p className="text-[#00fff7] pl-1 inline">0.041 ETH</p>
              </div>
              <div className="flex items-center justify-end">
                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" className="inline">
                  <path
                    d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                    fill="#8BACD9"
                  />
                </svg>
                <p className="text-[#8bacda] pl-1 inline">3 days left</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mt-4">
              <img
                src="./images/nft-preview-card/image-avatar.png"
                alt="avatar"
                className="w-8 border-white border rounded-full inline"
              />
              <p className="text-[#8bacda] inline"> Creation of </p>
              <p className="text-white hover:text-[#00fff7] inline ">Jules Wyvern</p>
            </div>
          </div>

          {/* <p className="text-center font-outfit font-bold text-2xl text-[#1f3251]">
            Improve your front-end skills by building projects
          </p>
          <p className="pt-4 text-center font-outfit text-base text-[#7b879d] ">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default NFTPreviewCard
