import { useTransition, animated } from "@react-spring/web"
import deepikaa from "../assets/deepikaa.jpg"
import dicaprio from "../assets/dicaprio.png"
import rockj from "../assets/rockj.jpg"
import {useState, useEffect} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface imageMainCarousel  {
  id: number,
  src: string,

}
const imageMain :imageMainCarousel[] = [
  {
    id: 1,
    src: deepikaa
  },
  {
    id: 2,
    src: dicaprio
  },
  {
    id: 3,
    src: rockj
  }

]


const Header = () => {

  const [index, set] = useState(0)
  const [imageSize, setImageSize] = useState({ width: "80%", height: "65vh" });

  // Update image dimensions when the screen size changes
  useEffect(() => {

    const handleResize = () => {
      // Adjust the image dimensions based on screen size
      if (window.innerWidth < 768) {
        setImageSize({ width: "100%", height: "25vh" });
      } else if (window.innerWidth < 1000) {
        setImageSize({ width: "100%", height: "45vh" });
      } else {
        setImageSize({ width: "80%", height: "70vh" });
      }
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call it once to set initial dimensions
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0.5 },
    enter: { opacity: 1 },
    leave: { opacity: 0.5 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set(state => (state + 1) % imageMain.length)
      }
    },
    exitBeforeEnter: true,
  })

  return (
    <div className="flex  items-center justify-center align-middle ">
      
      {transitions((style, i) => (
        <animated.div
          className=" rounded-2xl   border-8  "
          style={{
            ...style,
            backgroundImage: `url(${imageMain[i].src})`,
            backgroundSize: "cover", 
            width: imageSize.width,
            height: imageSize.height, 
          }}
        />
      ))}
      
    </div>
  )
}

export default Header