// Description: Response type for the backend
// Author: Sebastián Gámez Ariza

// Create response type
type ResponseType = {
	status: number;
	message: string;
	data?: any;
};

export default ResponseType;
