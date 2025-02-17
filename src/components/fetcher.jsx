import axios from "axios";

export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);

    try {
        const response = await axios.post("https://img-compression-backend.onrender.com/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true  // Ensure credentials are included
            // responseType: "blob"

        });
        return response.data;

        
        }
    
        catch(error) {
            console.error("Error uploading image: ",error);
            throw error;   
        }
    
};