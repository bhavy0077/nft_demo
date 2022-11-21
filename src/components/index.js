import React, { useEffect, useState } from "react";
import FirstSlider from "../common/firstSlider";
import SliderBar from "../common/SliderBar";
import Skeleton from "@material-ui/lab/Skeleton";

function Dashboard() {
  const [nftMainSlider, setNftMainSlider] = useState([]);
  const [nftFeaturedSlider, setNftFeaturedSlider] = useState([]);

  useEffect(() => {
    fetch("https://api.opensea.io/api/v1/collections?offset=0&limit=50")
      .then((res) => res.json())
      .then((response) => setNftMainSlider(response.collections));
    fetch("https://api.opensea.io/api/v1/bundles?limit=20&offset=0")
      .then((res) => res.json())
      .then((response) => setNftFeaturedSlider(response.bundles));
  }, []);

  return (
    <div>
      <FirstSlider data={nftMainSlider.filter((ele) => ele.banner_image_url)} />
      {nftFeaturedSlider.length ? (
        <SliderBar
          data={nftFeaturedSlider.filter((ele) => ele.asset_contract.image_url)}
        />
      ) : (
        <Skeleton variant="rectangular" width={210} height={118} />
      )}
    </div>
  );
}

export default Dashboard;
