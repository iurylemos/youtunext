import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Layout from '@src/components/Layout';
import VideoCard from '@src/components/VideoCard/VideoCard';

function Home({ data }) {
  return (
    <Layout title="Youtunext">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE #01]',
      authorId: 1,
      authorName: 'Iury Lemos',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.jpg',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title:
        'NEXT.JS: ENTENDENDO A RENDERIZAÇÃO REACT NO LADO SERVIDOR [PARTE #02]',
      authorId: 1,
      authorName: 'Iury Lemos',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next02.jpg',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'NEXT.JS: ROTAS ESTÁTICAS E DINÂMICAS [PARTE #03]',
      authorId: 1,
      authorName: 'Iury Lemos',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.jpeg',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'NEXT.JS: ROTAS ESTÁTICAS E DINÂMICAS [PARTE #03]',
      authorId: 1,
      authorName: 'Iury Lemos',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next04.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Home;
