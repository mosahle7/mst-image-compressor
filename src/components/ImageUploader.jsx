import { useState } from "react";
import styled from "styled-components";

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
        <Container>
        <FileInput id="file-upload" type="file" accept="image/*" onChange={handleFileChange}/>
        <Label htmlFor="file-upload">Upload Image</Label>

        {preview && <PreviewImage src={preview} alt="Preview"/>}
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    gap: 1rem;
    padding: 2rem;
    border: 2px dashed #aaa;
    border-radius: 8px;
    text-align: center;
    width: 100%;
`

const FileInput = styled.input`
    display: none;
`

const Label = styled.label`
    background-color: #007bff;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #0056b3;
    }
`;

const PreviewImage = styled.img`
    width: 600px;
    margin-top: 20px;
    border-radius: 8px;
`

export default ImageUploader