import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Slider>
        <section className="firstSlide">
          <h1 className="slideText">Slide Text1</h1>
        </section>
        <section className="secondSlide">
          <h1 className="slideText">Slide Text2</h1>
        </section>
        <section className="thirdSlide">
          <h1 className="slideText">Slide Text13</h1>
        </section>
      </Slider>
    </>
  );
};

export default Home;
