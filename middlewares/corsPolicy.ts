import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import type { StandardResponse } from '../types/StandardResponse';

export const corsPolicy = (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse<StandardResponse>) => {
    try {
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader('Access-Control-Allow-Origin', '*'); // ajuste aqui se quiser restringir
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,POST,PUT,OPTIONS'
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization'
      );

      if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
      }

      return handler(req, res);
    } catch (error) {
      console.error('CORS policy error:', error);
      res.status(500).json({ error: 'Internal Server Error.' });
    }
  };