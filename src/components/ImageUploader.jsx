import { useState } from "react";
import styled from "styled-components";
import { uploadImage } from "./fetcher";

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [compressed, setCompressed] = useState(null);
    
    const handleFileChange = (event) => {
        let file;
        if (event.target.files && event.target.files.length>0){
            file = event.target.files[0];
        }
        else if (event.dataTransfer && event.dataTransfer.files.length>0) {
            file = event.dataTransfer.files[0];
        }

       
        if (file){
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        console.log(event.dataTransfer.files)
        handleFileChange(event);

    };

    const handleButton = async () => {
        if (image) {
            const compressedImageURL = await uploadImage(image);
            setCompressed(compressedImageURL);
        }

        else {
            console.error("No image selected!");
        }
    
    }

    return(
        <Wrapper>
            <Container
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <p>Drag & Drop here</p>
                <FileInput id="file-upload" type="file" accept="image/*" onChange={handleFileChange}/>
                <Label htmlFor="file-upload">Upload Image</Label>

                {preview && <PreviewImage src={preview} alt="Preview"/>}
            </Container>
            
            {image &&
            <UploadButton onClick={handleButton}>Compress</UploadButton>
            }
            {compressed &&
                <CompressedContainer>
                    <p>Compressed Image:</p>
                    <CompressedImage src={compressed} alt="Compressed"/>
                    
                </CompressedContainer>}
        </Wrapper>
        
    )

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 20px;

`
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 500px;
    gap: 1rem;
    padding: 2rem;
    border: 2px dashed #aaa;
    border-radius: 8px;
    text-align: center;
    width: 90%;
    max-width: 1000px;
    max-height: 100vh;
    cursor: pointer;
    &:hover {
        border-color: #007bff
    }

    p{
        color: #222;
        font-size: 18px;
    }
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

const UploadButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    outline: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #0056b3;
    }
`;

const CompressedContainer = styled.div`
    margin-top: 20px;
    text-align: center;
`

const CompressedImage = styled.img`
    width: 600px;
    margin-top: 20px;
    border-radius: 8px;
`

export default ImageUploader