import connectDatabase from '@src/utils/mongodb';
import upload from '@src/utils/upload';
import nc from 'next-connect';
import { ObjectId } from 'mongodb';
import jwt from 'next-auth/jwt';

const secret = process.env.JWT_SECRET;

function onError(err, req, res, next) {
  // eslint-disable-next-line no-console
  console.log(err);

  res.status(500).end(err.toString());
  // OR: you may want to continue
  next();
}

const handler = nc({ onError })
  .use(upload.single('file'))
  .post(async (req, res) => {
    try {
      const { title, authorId, authorName, authorAvatar, videoUrl } = req.body;

      const token = await jwt.getToken({ req, secret });

      if (token) {
        const { db } = await connectDatabase();
        const collection = db.collection('videos');

        await collection.insertOne({
          title,
          authorId: ObjectId(authorId),
          authorName,
          authorAvatar,
          views: 0,
          thumb: req.file.location,
          videoUrl,
          updatedAt: new Date(),
        });

        res.status(200).json({ ok: true });
        return;
      }

      res.status(401).end();
      return;
    } catch (error) {
      throw new Error(error);
    }
  })
  .get((req, res) => {
    res.send('Hello world');
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
