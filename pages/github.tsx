import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Footer, Navbar } from "../components";

function github() {
  return (
    <>
      <Head>
        <title>Sabelo Mkhwanazi - Github </title>
        <meta name="description" content="Sabelo Personal portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Navbar />
        <Footer />
      </Box>
    </>
  );
}

export default github;
