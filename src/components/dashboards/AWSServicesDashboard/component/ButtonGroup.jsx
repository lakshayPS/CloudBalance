import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { ServicesContext } from "../context/ServicesProvider";

export default function ServicesButtonGroup() {
  const services = ["EC2", "RDS", "ASG"];
  const [selectedService, setSelectedService] = useContext(ServicesContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& > *": { m: 1 },
      }}
    >
      <ButtonGroup variant="outlined">
        {services.map((item) => (
          <Button
            key={item}
            variant={selectedService === item ? "contained" : "outlined"}
            onClick={() => setSelectedService(item)}
          >
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
