-- CreateTable
CREATE TABLE "brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reference" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "reference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "brand_name_key" ON "brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "reference_name_key" ON "reference"("name");

-- CreateIndex
CREATE UNIQUE INDEX "employee_email_key" ON "employee"("email");
