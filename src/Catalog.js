// Catalog.js
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

const Catalog = ({ rodents, onDetailsClick, onOrderClick }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
    }}
  >
    {rodents.map((rodent) => (
      <Card
        key={rodent.id}
        sx={{
          width: 300,
          boxShadow: 3,
          borderRadius: "12px",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          ":hover": {
            transform: "scale(1.05)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={rodent.image}
          alt={rodent.name}
          sx={{
            objectFit: "cover",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            {rodent.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            {rodent.description}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            {rodent.price} ₽
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => onDetailsClick(rodent.id)}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              Подробнее
            </Button>
            {rodent.stock > 0 ? (
              <Button
                variant="contained"
                color="success"
                onClick={() => onOrderClick(rodent)}
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                В корзину
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "8px",
                }}
                disabled
              >
                Заказать
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default Catalog;
