"use client";

import { projectUrl } from "@/data";
import { Plus, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AddToFeatured = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data, status } = useSession();
  if (status === "loading") return "loading...";
  if (status === "unauthenticated" || !data?.user.isAdmin) return;
  const deleteProduct = async (id: string) => {
    const res = await fetch(`${projectUrl}/api/product/${id}`, {
      method: "POST",
    });
    if (res.ok) {
      router.push("/");
      toast.success("Product added to featured products successfully");
    }
  };
  return (
    <button
      onClick={() => deleteProduct(id)}
      className="hover:cursor-pointer bg-green-500 text-white p-2 rounded-full "
    >
      <Plus />
    </button>
  );
};
export default AddToFeatured;
