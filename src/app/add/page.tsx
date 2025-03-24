"use client";

import Loading from "@/components/Loading";
import { projectUrl } from "@/data";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

type Item = {
  title: string;
  desc: string;
  price: number;
};

type Option = {
  title: string;
  price: number;
};

type Product = {
  title: string;
  desc: string;
  image: string;
  price: number;
  options: Option[];
  catSlug: string;
};

const AddPage = () => {
  if (!projectUrl) return null;

  const [item, setItem] = useState<Item>({
    title: "",
    desc: "",
    price: 0,
  });
  const [cat, setCat] = useState("pizza");
  const [options, setOptions] = useState<Option[]>([]);
  const [option, setOption] = useState<Option>({
    title: "",
    price: 0,
  });
  const [image, setImage] = useState<File>();
  const { status, data } = useSession();
  const router = useRouter();
  if (status === "loading") return <Loading />;
  if (status === "unauthenticated" || !data?.user.isAdmin) {
    router.push("/");
  }

  const handleItem = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = await uploadImage();
    const product: Product = {
      ...item,
      options,
      catSlug: cat,
      image: url,
    };
    try {
      const res = await fetch("/api/add", {
        method: "POST",
        body: JSON.stringify(product),
      });
      const id = await res.json();
      router.push(`/product/${id}`);
      toast.success("Product added");
    } catch (error) {}
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const item = (target.files as FileList)[0];
    if (item) {
      setImage(item);
    }
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image!);
    formData.append("upload_preset", "tomato");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dm4ytnxyq/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data.secure_url;
  };
  return (
    <div className="w-full text-lg">
      <form
        className="items-center flex flex-col gap-4 py-12 px-28 md:px-44 lg:px-64"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex gap-4 w-full items-center">
          <label>Title</label>
          <input
            className="ring-1 flex-1 px-2 ring-gray-600 rounded-md py-1"
            onChange={(e) => handleItem(e)}
            type="text"
            name="title"
            required
          />
        </div>
        <div className="flex gap-4 w-full items-center">
          <label>Desc</label>
          <textarea
            className="ring-1 flex-1 px-2 ring-gray-600 rounded-md py-1"
            onChange={(e) => handleItem(e)}
            name="desc"
          />
        </div>
        <div className="flex gap-4 w-full items-center">
          <label>Image</label>
          <input
            className="ring-1 flex-1 px-2 ring-gray-600 rounded-md py-1"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e)}
            required
          />
        </div>
        <div className="flex gap-4 w-full items-center">
          <label>Price</label>
          <input
            className="ring-1 flex-1 px-2 ring-gray-600 rounded-md py-1"
            onChange={(e) => handleItem(e)}
            name="price"
            type="number"
            required
          />
        </div>

        <div className="flex gap-4 w-full items-center">
          <label>Options</label>
          <input
            className="ring-1 flex-1 px-2 ring-gray-600 rounded-md py-1"
            onChange={(e) => setOption({ ...option, title: e.target.value })}
            type="text"
            placeholder="option tile"
          />
          <input
            className="ring-1 flex-1 px-2 ring-gray-600 rounded-md py-1"
            onChange={(e) =>
              setOption({ ...option, price: Number(e.target.value) })
            }
            type="number"
            placeholder="price"
          />
          <div
            className="bg-orange-500 text-white py-2 px-4 rounded-2xl hover:cursor-pointer"
            onClick={() => setOptions([...options, option])}
          >
            Add
          </div>
        </div>

        {options.map((opt) => (
          <div
            key={opt.title}
            className="flex gap-4 bg-orange-400 px-10 rounded-lg py-1 w-full justify-between text-white"
          >
            <span>{opt.title}</span>
            <span>{opt.price}</span>
            <div
              className="hover:cursor-pointer
              bg-red-500 rounded-full px-1 py-1"
              onClick={() =>
                setOptions(options.filter((cur) => cur.title !== opt.title))
              }
            >
              <X />
            </div>
          </div>
        ))}

        <div className="flex gap-4 w-full items-center">
          <label>Catagory</label>
          <select
            className="ring-1 flex-1 px-2 ring-gray-600 rounded-md py-1"
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="pasta">Pasta</option>
          </select>
        </div>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded-2xl hover:cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddPage;
