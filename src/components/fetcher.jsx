// import axios from "axios";

// export const uploadImage = async (image, onPrgress) => {
//     const formData = new FormData();
//     formData.append("file", image);

//     try {
//         const response = await axios.post("https://img-compression-backend.onrender.com/upload", formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data"
//             },
//             onUploadProgress: (progressEvent) => {
//                 const percent = Math.round((progressEvent.loaded * 100)/ progressEvent.total);
//                 if (onPrgress){
//                     onprogress(percent);
//                 }
//             }
//             // withCredentials: true  // Ensure credentials are included
//             // responseType: "blob"

//         });
//         return response.data;

        
//         }
    
//         catch(error) {
//             console.error("Error uploading image: ",error);
//             throw error;   
//         }
    
// };

import axios from "axios";

export const uploadImage = async (image, socket) => {
    const formData = new FormData();
    formData.append("file", image);

    try {
        const response = await axios.post(
            "https://img-compression-backend.onrender.com/upload",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );

        // socket.on("progress", (percent) => {
        //     socket.emit("progressUpdate", { percent });
        // });

        // Listen for progress updates
        // socket.on("progress", (progress) => {
        //     onProgress(progress); // Callback to update progress
        // });

        return response.data;
    } catch (error) {
        console.error("Error uploading image: ", error);
        throw error;
    }
};

