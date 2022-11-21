import { AccordionSummary, Box, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Details = () => {
  const [detailsData, setDetailsData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      fetch(`https://api.opensea.io/api/v1/asset/${id}/1/?include_orders=false`)
        .then((res) => res.json())
        .then((response) => {
          response.success === false
            ? navigate("/error")
            : setDetailsData(response);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      {detailsData ? (
        <div style={{ display: "flex", padding: "30px 50px" }}>
          <div style={{ padding: "0 30px 0 10px", width: "30%" }}>
            <img
              src={detailsData?.asset_contract?.image_url}
              alt={detailsData?.asset_contract?.name}
              style={{
                maxWidth: "250px",
                borderRadius: "20px",
                border: "3px solid #0b1426",
              }}
            />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Description</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {detailsData?.asset_contract?.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Properties</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {detailsData?.traits?.map((item) => (
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "5px",
                      margin: "3px",
                      borderRadius: "10px",
                    }}
                    key={item?.value}
                  >
                    <Typography>{item?.trait_type}</Typography>
                    <Typography>{item?.value}</Typography>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          </div>
          <div style={{ width: "70%" }}>
            <h2>{detailsData.name}</h2>
            <p>Owner of {detailsData?.owner?.user?.username}</p>
            <p>#{detailsData?.rarity_data?.rank}</p>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Details;
