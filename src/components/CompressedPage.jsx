import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
// import socket from "./socket";

export const CompressedPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [imgSize, setImgSize] = useState("");
    const [imgName, setimgName] = useState("");
    const [Img,setImg] = useState("");
    const [loading, setLoading] = useState(location.state?.loading ?? true);
    // const [progress, setProgress] = useState(location.state?.progress ?? 0);
   
    useEffect(() => {
        if (!location.state){
            navigate("/");
        }

        // socket.on("progress", (percent) => {
        //     setProgress(percent);
        // });

        // socket.on("compressionDone", (data) => {
        //     setImg(data.image_url);
        //     setImgSize(data.size);
        //     setimgName(data.name);
        //     setLoading(false);
        // });

        else if(location.state?.image) {
            console.log("Local State: ", location.state);
            setImg(location.state.image);
            setImgSize(location.state.size);
            setimgName(location.state.name);
            setLoading(false);

        }

    //     return () => {
    //         socket.off("progress");
    //         socket.off("compressionDone");
    //     };

    }, [location.state, navigate]);
    
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
                    <>
                     <LoadingMessage>Processing image, this may take a few seconds, please wait...</LoadingMessage>
                     {/* <div>`$Progress: {progress}%`</div> */}
                     </>
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
    margin-top: 8px;
    margin-bottom: 30px;
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