import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
// @ts-ignore
import bcrypt from 'bcrypt';

// secret available because of dotenv in index.js
const secret = process.env.JWT_SECRET as Secret;

// for sign in
export const comparePasswords = (pass: string, hash: string): Promise<boolean> => bcrypt.compare(pass, hash);

export const hashPassword = (pass: string) => bcrypt.hash(pass, 4);
export const createJWT = ({ id, username }: {id: string, username: string }) => jwt.sign({ id, username }, secret);

export const protect = (req: Request&{user?: any}, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;
  if(!bearer) {
    res.status(401);
    res.json({ message: 'Not Authorized!' });
    return;
  }

  const [, token] = bearer.split(' ');

  if(!token) {
    res.status(401);
    res.json({ message: 'Not valid token!' });
    return;
  }

  try {
    const user = jwt.verify(token, secret);
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(401);
    res.json({ message: 'Not valid token!' });
  }
}