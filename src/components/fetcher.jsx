import axios from "axios";

export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);

    try {
        const response = await axios.post("https://potential-meme-5776rxxv659cvj9-5000.app.github.dev/upload", formData, {
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