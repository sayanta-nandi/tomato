-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_orderedBy_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_catSlug_fkey";

-- AlterTable
ALTER TABLE "Catagory" ADD CONSTRAINT "Catagory_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "Catagory_id_key";

-- AlterTable
ALTER TABLE "Order" ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "Order_id_key";

-- AlterTable
ALTER TABLE "Products" ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "Products_id_key";

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_catSlug_fkey" FOREIGN KEY ("catSlug") REFERENCES "Catagory"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderedBy_fkey" FOREIGN KEY ("orderedBy") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
