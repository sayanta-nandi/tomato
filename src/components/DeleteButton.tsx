"use client";

import { projectUrl } from "@/data";
import { Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data, status } = useSession();
  if (status === "loading") return "loading...";
  if (status === "unauthenticated" || !data?.user.isAdmin) return;
  const deleteProduct = async (id: string) => {
    const res = await fetch(`${projectUrl}/api/product/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.push("/");
      toast.success("Product deleted successfully");
    }
  };
  return (
    <button
      onClick={() => deleteProduct(id)}
      className="hover:cursor-pointer bg-red-400 text-white p-2 rounded-full"
    >
      <Trash2 />
    </button>
  );
};
export default DeleteButton;
