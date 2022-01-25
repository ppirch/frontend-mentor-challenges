const QRCode = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded-xl p-4 max-w-xs">
        <img src="./images/qr-code/image-qr-code.png" alt="QR Code" className="rounded-xl" />
        <div className="py-4 px-4 text-center font-outfit ">
          <p className="font-bold text-xl text-[#1f3251]">Improve your front-end skills by building projects</p>
          <p className="pt-4 text-base text-[#7b879d] ">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default QRCode
