import jwt, { Secret } from 'jsonwebtoken';

// secret available because of dotenv in index.js
const secret = process.env.JWT_SECRET as Secret;
export const createJWT = ({ id, username }: {id: string, username: string }) => jwt.sign({ id, username }, secret)