import React from "react";
import { useNavigate } from "react-router-dom";

function Tocollection() {
  const navigate = useNavigate();
//nav to her
  const handleButtonClick = () => {
    navigate("/Forher");
  };

  //nav to him

  const clickmen = () => {
    navigate("/Forhim");
  };

  return (
    <div className="flex justify-around mt-16">
      <div>
        <div className="flex">
          <img
            className="h-100"
            src="https://img01.ztat.net/article/spp-media-p1/2665b799d44f43e8817511d597f0a346/16dc19c8043c47828a98a3d182991eb9.jpg?imwidth=762"
            alt=""
          />
          <img
            className="h-100"
            src="https://img01.ztat.net/article/spp-media-p1/27012929f9824e2497d587eb8f4a4231/2d9a98e01da04d619185fff3bd0fe387.jpg?imwidth=1800"
            alt=""
          />
        </div>
        <button onClick={handleButtonClick} className="hover-button">
          for her
        </button>
      </div>
      <div>
        <div className="flex">
          <img
            className="h-100"
            src="https://img01.ztat.net/article/spp-media-p1/d04459c1e3af42859c371ef15953686b/cfd85f61ba184247915f17ea74810936.jpg?imwidth=1800"
            alt=""
          />
          <img
            className="h-100"
            src="https://img01.ztat.net/article/spp-media-p1/7ed304fe117843c484b70485d852f48f/e3fe35ca0e4d4d90a247761a50da2ad3.jpg?imwidth=762"
            alt=""
          />
        </div>
        <button onClick={clickmen} className="hover-button">
          for him
        </button>
      </div>
    </div>
  );
}

export default Tocollection;
