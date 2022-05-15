import React from "react";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import Header from "../components/AppBarHeader";
import CardView from "../components/CardView";

export default function PlaceList() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Place List</title>
            </Helmet>

            <Header />

            <div>
                <div style={{ marginLeft: "5%", marginRight: "2%" }}>
                    <h1>Place List</h1>
                </div>

                <div style={{ width: "100%" }}>
                    <Box
                        sx={{
                            display: "grid",
                            gap: 5,
                            gridTemplateColumns: "repeat(3, 1fr)",
                            ml: 10,
                            mr: 5,
                        }}
                    >
                        <CardView />
                    </Box>
                </div>
            </div>
        </React.Fragment>
    );
}
