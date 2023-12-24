import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Preloader = (props) => {
  const [isLoad, setIsLoad] = useState(true);

  const location = useLocation();

  const [previousLocation, setPreviousLocation] = useState('');

  useEffect(() => {
    // console.log("previousLocation : "+ previousLocation + " Current : " + location.pathname);


    if (previousLocation !== location.pathname.replace(/\//g, '')) {
      setIsLoad(true);

    }
    setPreviousLocation(location.pathname.replace(/\//g, ''));
    let timer1 = setTimeout(() => setIsLoad(false), 1 * 1000);
    return () => {
      clearTimeout(timer1);
    };


  }, [location, previousLocation]);

  return (
    <>
      {/* <!-- Preloader --> */}
      <div className="preloader" id="preloader" style={{ display: (isLoad ? 'block' : 'none') }}>
        <div className="content d-flex align-items-center justify-content-center">
          <div className="spinner">
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
