import { Children, cloneElement, useEffect, useRef, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";




const Slider = ({ children }) => {
  const [sliderItems, setSliderItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [slideWidth, setSlideWidth] = useState(1280)

  const windowElRef = useRef()

  useEffect(() => {
    

    const _width = windowElRef.current.offsetWidth
    setSlideWidth(_width)

    setSliderItems(
      Children.map(children, (child) => {
        return cloneElement(child);
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prevSlide = () => {
    setOffset((currentOffset) => {

        const newOffset = currentOffset + slideWidth
        return Math.min(newOffset, 0) 
    })
  }

  const nextSlide = () => {
    setOffset((currentOffset) => {

        const newOffset = currentOffset - slideWidth
        
        const maxOffset = -(sliderItems.length - 1) * slideWidth
        return Math.max(newOffset, maxOffset)
    })
  }

  return (
    <section className="sliderWindow" ref={windowElRef}>
      <BsFillArrowLeftCircleFill className="arrowLeft" onClick={prevSlide} />
      <section
        className="slideList"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {sliderItems}
      </section>
      <BsFillArrowRightCircleFill className="arrowRight" onClick={nextSlide} />
    </section>
  );
};

export default Slider;
