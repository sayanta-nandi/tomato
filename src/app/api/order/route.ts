import { auth } from "@/utils/auth";
import { prisma } from "@/utils/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await auth();
  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), {
          status: 200,
        });
      } else {
        const orders = await prisma.order.findMany({
          where: {
            orderedBy: session.user?.email!,
          },
        });
        return new NextResponse(JSON.stringify(orders), {
          status: 200,
        });
      }
    } catch (error) {
      console.log(error);
      return new NextResponse("user is unauthorised", {
        status: 500,
      });
    }
  } else {
    return new NextResponse("user is unauthorised", {
      status: 401,
    });
  }
};
