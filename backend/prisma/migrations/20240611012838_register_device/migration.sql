-- CreateTable
CREATE TABLE "registerDevice" (
    "id" SERIAL NOT NULL,
    "employeesId" INTEGER NOT NULL,
    "devicesId" INTEGER NOT NULL,

    CONSTRAINT "registerDevice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "registerDevice" ADD CONSTRAINT "registerDevice_employeesId_fkey" FOREIGN KEY ("employeesId") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registerDevice" ADD CONSTRAINT "registerDevice_devicesId_fkey" FOREIGN KEY ("devicesId") REFERENCES "device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
