import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionMenu = () => (
  <div>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Категории</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Мыши</Typography>
        <Typography>Крысы</Typography>
        <Typography>Хомяки</Typography>
      </AccordionDetails>
    </Accordion>
  </div>
);

export default AccordionMenu;