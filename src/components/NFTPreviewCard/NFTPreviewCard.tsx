const NFTPreviewCard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#14253d] shadow-md rounded-xl p-4 max-w-xs">
        <div className="relative group">
          <img src="./images/nft-preview-card/image-equilibrium.jpg" alt="NFT" className="rounded-xl" />
          <div className="opacity-0 group-hover:opacity-50 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-center w-full h-full bg-[#00fff7] rounded-xl"></div>
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-center w-full h-full ">
            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h48v48H0z" />
                <path
                  d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                  fill="#FFF"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="py-4 divide-y divide-[#2f415b]">
          <div>
            <p className="text-white font-outfit font-bold text-xl hover:text-[#00fff7]">Equilibrium #3429</p>
            <p className="text-[#8bacda] my-2">Our Equilibrium collection promotes balance and calm.</p>
            <div className="grid grid-cols-2 my-4">
              <div className="flex items-center">
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg" className="inline">
                  <path
                    d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                    fill="#00FFF8"
                  />
                </svg>
                <p className="text-[#00fff7] font-medium pl-2 inline">0.041 ETH</p>
              </div>
              <div className="flex items-center justify-end">
                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" className="inline">
                  <path
                    d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                    fill="#8BACD9"
                  />
                </svg>
                <p className="text-[#8bacda] pl-2 inline">3 days left</p>
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
              <p className="text-[#8bacda] pl-3 inline">Creation of </p>
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
