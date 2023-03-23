import React from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

export default function Exercises({ exercises, setExercises, bodyPart }) {
  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
          {/* test output of api */}
          {exercises.map((exercise, index) => (
            <p>{exercise.name}</p>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
