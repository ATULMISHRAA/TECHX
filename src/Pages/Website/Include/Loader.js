import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../../loader.css';

const Loader = (props) => {
  const { stateLoader } = props;
  console.log("fire "+ stateLoader);

  const location = useLocation();

  useEffect(() => {
    // console.log(location);
    if(location.pathname.replace(/\//g, '') == ""){
      document.body.id = 'home-page';
    }else{
      document.body.id = location.pathname.replace(/\//g, '');
    }
    
  }, [location]);

  return (
    <>
      {(stateLoader != false) && (
        <div className="loader-wrapper">
          <div className="loader" >
            {/* <img src="/web/assets/images/logo.png" width="100px" height="100px"/> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
