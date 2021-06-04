import React from 'react';
import { Button } from '@material-ui/core';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Youtunext">
      Clone Youtube usando NextJS
      <Button variant="outlined" color="primary">
        Hello World
      </Button>
    </Layout>
  );
}
