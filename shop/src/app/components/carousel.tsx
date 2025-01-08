import Image from "next/image";
import banner from "../public/banner.jpg"
import banner1 from "../public/banner1.jpg"
import banner2 from "../public/banner2.jpg"
import banner3 from "../public/banner3.jpg"

export default function Carousel() {
    return (
     <>
     <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <Image
        src={banner}
        alt="banner"
        className="w-full"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <Image
        src={banner1}
        alt="banner1"
        className="w-full"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide3" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <Image
        src={banner2}
        alt="banner2"
        className="w-full"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide4" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <Image
        src={banner3}
        alt="banner3"
        className="w-full"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide1" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  </div>
  
      </>
    );
  }
  