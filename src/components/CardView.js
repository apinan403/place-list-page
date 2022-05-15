import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import Data from "../data/example_data.json";

export default function CardView() {
    return (
        <React.Fragment>
            {Data &&
                Data.map((data) => {
                    return (
                        <div className="itemView" key={data.id}>
                            <Card sx={{ maxWidth: 390, maxHeight: 345 }}>
                                <CardActionArea>
                                    <Box sx={{ display: "flex", flexDirection: "row", ml: "20px", mt: "10px", mr: "0px" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                                            <CardMedia component="img" height="80" width="80" image={data.profile_image_url} alt="profile_image_url" />
                                        </Box>

                                        <CardContent>
                                            <b id="restaurantName">{data.name}</b>
                                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1, mt: 1 }}>
                                                    <CalendarMonthIcon sx={{ color: "#000000" }} />

                                                    {data.operation_time &&
                                                        data.operation_time.map((time) => {
                                                            const date = new Date().toLocaleString("en-us", { weekday: "long" });

                                                            if (time.day == date) {
                                                                if (time.time_open == "closed" && time.time_close == "closed") {
                                                                    return <b style={{ marginTop: "5px" }}>{time.time_open}</b>;
                                                                } else {
                                                                    return (
                                                                        <b style={{ marginTop: "5px" }}>
                                                                            {time.time_open} AM - {time.time_close} PM
                                                                        </b>
                                                                    );
                                                                }
                                                            }
                                                        })}
                                                </Box>

                                                <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
                                                    <CircleIcon sx={{ color: "#134B8A", fontSize: 14, mt: "5px" }} />
                                                    <b style={{ marginTop: "5px", color: "#134B8A" }}>{data.rating}</b>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Box>

                                    <Box sx={{ display: "flex", flexDirection: "row", ml: 3, mb: 3, alignItems: "center" }}>
                                        {data.images.map((item) => (
                                            <img src={`${item}`} alt="preview image" width="100" height="100" />
                                        ))}
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </div>
                    );
                })}
        </React.Fragment>
    );
}
