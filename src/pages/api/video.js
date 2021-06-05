export default function handlerVideo(req, res) {
  const { method } = req;
  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ method });
      break;
    case 'POST':
      // received image by request and another data of endpoint
      // insert in database
      res.status(200).json({ method });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
