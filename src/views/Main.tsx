import Carousel from "components/Carousel";

export default function Main() {
  const images = ["who_am_i.jpg", "who_am_i_2.jpg", "who_am_i_3.jpg"];

  return <Carousel images={images} autoPlay={false} showButtons={true} />;
}
