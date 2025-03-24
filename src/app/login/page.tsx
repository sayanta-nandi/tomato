"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    router.push("/");
    return;
  }

  return (
    <div className="w-full h-[calc(100vh-320px)] sm:h-[calc(100vh-256px)] md:h-[calc(100vh-224px)] flex items-center justify-center">
      <div className="flex h-[50vh] w-[60vw] flex-col shadow-gray-300 shadow rounded-xl overflow-hidden lg:flex-row">
        {/* image */}
        <div className="h-1/3 w-full lg:h-full lg:w-1/2 bg-fuchsia-200 relative ">
          <Image src="/login.jpg" alt="" fill className="object-cover" />
        </div>
        {/* text */}
        <div className="w-full h-2/3 lg:h-full lg:w-1/2 flex flex-col items-center gap-2 justify-center">
          <p className="text-xl">Welcome</p>
          <p>Login or Create a new account</p>
          <button
            onClick={() => signIn("google", { redirectTo: "/" })}
            className="flex border hover:cursor-pointer hover:bg-gray-200 border-gray-300 rounded-md p-1 w-[80%]"
          >
            <Image src="/google.png" alt="" height={24} width={24} />
            <p className="text-center w-full">Sign in with Google</p>
          </button>
          <div className="flex border hover:cursor-pointer w-[80%] hover:bg-gray-200 border-gray-300 rounded-md p-1">
            <Image src="/facebook.png" alt="" height={24} width={24} />
            <p className="text-center w-full">Sign in with Facebook</p>
          </div>
          <p className="text-xs">
            For any problem{" "}
            <span className="underline hover:cursor-pointer">Contact us</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
