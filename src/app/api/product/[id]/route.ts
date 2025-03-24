import { prisma } from "@/utils/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<any> }
) => {
  const { id } = await params;
  try {
    const product = await prisma.products.findUnique({
      where: {
        id: id,
      },
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ masssge: "somthing went wrong" }),
      { status: 500 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<any> }
) => {
  const { id } = await params;
  try {
    await prisma.products.delete({
      where: {
        id: id,
      },
    });
    return new NextResponse(
      JSON.stringify({ massage: "deleted succesfully" }),
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
