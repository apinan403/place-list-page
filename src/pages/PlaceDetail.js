import React from "react";
import { Helmet } from "react-helmet";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Header from "../components/AppBarHeader";

export default function PlaceDetail() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Place Detail</title>
            </Helmet>

            <Container maxWidth="xl">
                <div>
                    <Header />
                </div>

                <div>
                    <h1>Place Detail</h1>
                </div>
            </Container>
        </React.Fragment>
    );
}
