import axios from "axios";

export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);

    try {
        const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            // responseType: "blob"

        });
        return response.data;

        
        }
    
        catch(error) {
            console.error("Error uploading image: ",error);
            throw error;   
        }
    
};