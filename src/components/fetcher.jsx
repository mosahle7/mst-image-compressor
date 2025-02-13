import axios from "axios";

export const uploadeImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);

    try {
        const response = await axios.post("http://localhost:5000/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
        }
    
        catch(error) {
            console.error("Error uploading image: ",error);
            throw error;   
        }
    
};