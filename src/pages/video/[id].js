import { Button } from '@material-ui/core';
import Layout from '@src/components/Layout';
import { useRouter } from 'next/router';
import React from 'react';

function Video() {
  const router = useRouter();

  return (
    <Layout>
      <span>{router.query.id}</span>
      <Button onClick={() => router.back()}>Voltar</Button>
    </Layout>
  );
}

export default Video;
