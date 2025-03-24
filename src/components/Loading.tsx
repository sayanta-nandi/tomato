import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-[calc(100vh-320px)] sm:h-[calc(100vh-256px)] md:h-[calc(100vh-224px)] flex-col flex justify-center items-center">
      <div className="h-1/2 aspect-square relative select-none animate-spin animate-duration-[2000ms]">
        <Image src="/loading.png" alt="" fill />
      </div>
      <p className="text-red-500 font-bold text-2xl">Loading...</p>
    </div>
  );
};
export default Loading;
