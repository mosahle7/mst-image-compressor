import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { uploadImage } from "./fetcher";

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    // const [compressed, setCompressed] = useState(null);
    
    const navigate = useNavigate();

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
            console.log("Compressed Image URL: ",compressedImageURL)
            navigate('/compressed', {state: {image: compressedImageURL} });
        }

        else {
            console.error("No image selected!");
        }
    
    }

    const handleRemove = () => {
        setImage(null);
        setPreview(null);
    }

    return(
        <Wrapper>
            <Container
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <p>Drag & Drop</p>
                <p style={{textAlign: 'center', fontWeight: 'bold', marginBottom: '5px', marginTop:'-15px'}}>OR</p>
                <FileInput id="file-upload" type="file" accept="image/*" onChange={handleFileChange}/>
                <Label htmlFor="file-upload">Select Image</Label>

                {preview && (
                <ImageWrapper>
                    <RemoveButton onClick={handleRemove}>X</RemoveButton>
                    <PreviewImage src={preview} alt="Preview"/>
                </ImageWrapper>
                )}

            </Container>
            

            {image &&
            <UploadButton onClick={handleButton}>Compress</UploadButton>
            }

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
    width: 50%;
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
    width: 100%;
    height: 100%;
    margin-top: 20px;
    border-radius: 8px;
    object-fit: cover;
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


const ImageWrapper = styled.div`
    position: relative;
    display: inline-block;
    margin-top: 10px;
    width: 400px;
    height: 500px;
    overflow: hidden;

`

const RemoveButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default ImageUploader