import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { token } = req.query
    res.setHeader('Set-Cookie', `access_token=${token}; SameSite=Strict; Path=/`)

    return res.redirect(`/loading?delay=500`)
  }

  return res.status(405).json({ message: 'Method not allowed' })
}
