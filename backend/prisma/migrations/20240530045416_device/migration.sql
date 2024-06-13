-- CreateTable
CREATE TABLE "device" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL,
    "brandsId" INTEGER NOT NULL,
    "referencesId" INTEGER NOT NULL,

    CONSTRAINT "device_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "device_serial_key" ON "device"("serial");

-- AddForeignKey
ALTER TABLE "device" ADD CONSTRAINT "device_brandsId_fkey" FOREIGN KEY ("brandsId") REFERENCES "brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device" ADD CONSTRAINT "device_referencesId_fkey" FOREIGN KEY ("referencesId") REFERENCES "reference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
