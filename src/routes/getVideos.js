import connectDatabase from '@src/utils/mongodb';

async function getVideos() {
  const { db } = await connectDatabase();
  const data = await db.collection('videos').find().toArray();
  return data;
}

export default getVideos;
