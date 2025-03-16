-- CreateTable
CREATE TABLE "Catagory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "color" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "options" JSONB[],
    "catSlug" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Catagory_id_key" ON "Catagory"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Catagory_slug_key" ON "Catagory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_catSlug_fkey" FOREIGN KEY ("catSlug") REFERENCES "Catagory"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
