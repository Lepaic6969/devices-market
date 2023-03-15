// Description: This file contains the registerDevice type
// Author: Sebastián Gámez Ariza

// Import device type
import type DeviceType from './deviceType';

// Import employee type
import type EmployeeType from './employeeType';

// Create register device type
type RegisterDeviceType = {
	id?: number;
	date: Date;
	note: string;
	deviceId: number;
	device?: DeviceType;
	employeeId: number;
	employee: EmployeeType;
};

// Export register device type
export default RegisterDeviceType;
