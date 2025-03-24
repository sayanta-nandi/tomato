import { prisma } from "@/utils/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    const data = await prisma.products.create({
      data: body,
    });
    return new NextResponse(JSON.stringify(data.id), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error", { status: 500 });
  }
};
