import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Layout from '@src/components/Layout';
import VideoCard from '@src/components/VideoCard/VideoCard';
import getVideos from '@src/routes/getVideos';

function Home({ data }) {
  return (
    <Layout title="Youtunext">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={Math.random()} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getVideos();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Home;
