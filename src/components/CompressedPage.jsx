import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

export const CompressedPage = () => {
    const [imgSize, setImgSize] = useState("");
    const [imgName, setimgName] = useState("");
    const location = useLocation();
    const [Img,setImg] = useState("");
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        if(location.state) {
            console.log("Local State: ", location.state);
            setImg(location.state.image);
            setImgSize(location.state.size);
            setimgName(location.state.name);
            setLoading(false);

        }
    }, [location.state]);
   
    const handleDownload = () => {
        if (!Img) return;

        const base64Data = Img.split(",")[1];
        const byteCharacters = atob(base64Data);
        const byteNums = new Array(byteCharacters.length).fill().map((_, i) => byteCharacters.charCodeAt(i));
        const byteArray = new Uint8Array(byteNums);
        const blob = new Blob([byteArray], {type: "image/png"});

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = imgName;
        document.body.appendChild(link);
        link.click()
        document.body.removeChild(link);

    }   

    return (
        <>
           
            <CompressedContainer>
                {loading ? (
                     <LoadingMessage>Processing image, please wait...</LoadingMessage>
                ): (
                <>
                <p>Compressed Image:</p>
                <CompressedImage src={Img} alt="Compressed"/>
                <ImgDetails>
                {imgName}  {imgSize} KB
                </ImgDetails>
                <DownloadButton onClick={handleDownload}>Download</DownloadButton>
                </>
                )}
            </CompressedContainer>
            
        </>
    )

};

const CompressedContainer = styled.div`
    margin-top: 20px;
    text-align: center;
    font-weight: 600;
`

const CompressedImage = styled.img`
    width: 600px;
    border-radius: 8px;
`
const ImgDetails = styled.pre`
    font-size: 15px;
    margin-top: 2px;
`

const DownloadButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    outline: none;
    padding: 10px 15px;
    margin-bottom: 5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #0056b3;
    }
`;

const LoadingMessage = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
`