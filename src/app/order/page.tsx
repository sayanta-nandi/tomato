"use client";

import Loading from "@/components/Loading";
import NotFoundPage from "@/components/NotFoundPage";
import { projectUrl } from "@/data";
import { Order } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Edit2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { FormEvent } from "react";
import { toast } from "react-toastify";

const OrderPage = () => {
  if (!projectUrl) return null;

  const { status, data: session } = useSession();
  const { isPending, error, data } = useQuery({
    queryKey: ["order"],
    queryFn: () => fetch(`${projectUrl}/api/order`).then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ status, id }: { status: string; id: string }) => {
      console.log(status);
      return fetch(`${projectUrl}/api/order/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] });
      toast.success("order status updated");
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const input = e.currentTarget[0] as HTMLInputElement;
    const status = input.value as string;
    mutation.mutate({ status, id });
  };

  if (isPending || status === "loading") return <Loading />;

  if (error || status === "unauthenticated")
    return <NotFoundPage massage="You are not authenticated" />;
  return (
    <div className="min-h-[calc(100vh-320px)] sm:min-h-[calc(100vh-256px)] md:min-h-[calc(100vh-224px)] w-full p-4 md:px-10 lg:px-20">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-lg">
            <td className="hidden md:block">OrderID</td>
            <td>Date</td>
            <td>Price</td>
            <td className="hidden md:block">Products</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {data.map((order: Order) => {
            const createdAtDate = new Date(order.createdAt);
            const formatted = createdAtDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            return (
              <tr
                key={order.id}
                className={`${
                  order.status === "delivered" ? "bg-green-200" : "bg-red-100"
                }`}
              >
                <td className="hidden md:block py-4 px-1">{order.id}</td>
                <td className="py-4 px-1">{formatted}</td>
                <td className="py-4 px-1">${Number(order.price)}</td>
                <td className="hidden md:block py-4 px-1">
                  {order.products.map((prod, index) => (
                    <div key={index} className="flex">
                      {String(prod?.toString)},
                    </div>
                  ))}
                </td>
                <td className="py-4 px-1">
                  {session?.user.isAdmin ? (
                    <form
                      className="w-full flex items-center justify-center gap-4"
                      onSubmit={(e) => handleSubmit(e, order.id)}
                    >
                      <input className="p-2" placeholder={order.status} />
                      <button
                        type="submit"
                        className="size-10 hover:cursor-pointer text-white bg-red-400 rounded-full p-2 flex items-center justify-center"
                      >
                        <Edit2 />
                      </button>
                    </form>
                  ) : (
                    <>{order.status}</>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default OrderPage;
