import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full h-[calc(100vh-320px)] sm:h-[calc(100vh-256px)] md:h-[calc(100vh-224px)] flex-col flex justify-center items-center">
      <div className="h-1/2 aspect-square relative select-none">
        <Image src="/sadTomato.png" alt="" fill />
      </div>
      <p className="text-red-500 font-bold text-2xl">404 Not Found</p>
    </div>
  );
}
