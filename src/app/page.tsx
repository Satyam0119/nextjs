import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 flex justify-between text-blue-400  text-4xl font-serif pl-2">
      <a href="#home">
        <img className="" width="58" height="68" src="/image/logo.png" alt="" srcset="" />
      </a>
      <div className=" text-center pt-1 text-indigo-600 font-sans">SANDESH</div>
      <div >
        <a className="pl-3 text-2xl" href="">Course</a>
        <a className="pl-3 text-2xl" href="">About </a>
        <a className="pl-3 pr-3 text-2xl" href="">Login</a>
      </div>
    </div>

  )
}
