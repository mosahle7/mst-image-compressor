import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const CompressedPage = () => {
    const location = useLocation();
    const compressedImg = location.state?.image;

    return (
        <>
            {compressedImg &&(
            <CompressedContainer>
                <p>Compressed Image:</p>
                <CompressedImage src={compressedImg} alt="Compressed"/>
                
            </CompressedContainer>
            )}
        </>
    )

};

const CompressedContainer = styled.div`
    margin-top: 20px;
    text-align: center;
`

const CompressedImage = styled.img`
    width: 600px;
    margin-top: 20px;
    border-radius: 8px;
`