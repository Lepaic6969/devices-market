// Description: This file contains the device type
// Author: Sebastián Gámez Ariza

// Import brand type
import type BrandType from './brandType';

// Import reference type
import type ReferenceType from './referenceType';

// Create device type
type DeviceType = {
	id?: number;
	name: string;
	serial: string;
	description: string;
	referencesId: number;
	reference?: ReferenceType;
	brandsId: number;
	brand?: BrandType;
};

// Export device type
export default DeviceType;
