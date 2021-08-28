import { useEffect, useState } from "react";
import styled from "styled-components";

const CarouselImg = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselButtonContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  margin-top: 15px;
`;

const CarouselButton = styled.button`
  color: white;
  background-color: #eb118a;
  padding: 8px;
  margin: 0 5px;
`;

interface Props {
  images: string[];
  autoPlay?: boolean;
  showButtons?: boolean;
}

export default function Carousel(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  };
  return (
    <>
      <CarouselImg
        src={require(`assets/img/${selectedImage}`).default}
        alt="Gentleman"
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />
      <CarouselButtonContainer>
        {props.showButtons ? (
          <>
            <CarouselButton onClick={previous}>{"<"}</CarouselButton>
            <CarouselButton onClick={next}>{">"}</CarouselButton>
          </>
        ) : (
          <></>
        )}
      </CarouselButtonContainer>
    </>
  );
}
