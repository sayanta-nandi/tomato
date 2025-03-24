import { prisma } from "@/utils/client";
import { s } from "framer-motion/client";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  try {
    const data = await req.json();
    await prisma.order.update({
      where: {
        id: id,
      },
      data: {
        status: data.status,
      },
    });
    return new NextResponse(
      JSON.stringify({ masssge: "successfully updated" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ masssge: "somthing went wrong" }),
      { status: 500 }
    );
  }
};
