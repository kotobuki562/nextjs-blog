import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}

// export default function handler(req, res) {
//   const email = req.body.email;
//   res.status(200).json({ text: "Hello" });
// }
