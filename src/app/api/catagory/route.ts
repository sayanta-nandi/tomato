import { prisma } from "@/utils/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await prisma.catagory.findMany();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error", { status: 500 });
  }
};
