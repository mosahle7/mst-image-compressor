import { useState } from "react";

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file){
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return(
        <div>
        <input type="file" accept="image/*" onChange={handleFileChange}/>

        {preview && <img src={preview} alt="Preview" width={600}/>}
        </div>
    )

}

export default ImageUploader