import prisma from '../modules/db';
import { hashPassword, createJWT, comparePasswords } from '../modules/auth';
import { Request, Response } from 'express';

const createNewUser = async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password:  await hashPassword(req.body.password)
    }
  })
  const token = createJWT(user);
  res.json({token});
};

const signIn = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username
    }
  });

  const isValid = await comparePasswords(req.body.password, user!.password);

  if(!isValid) {
    res.status(401);
    res.json({
      message: "Username or password are not correct!"
    })

    return;
  }
  const token = createJWT(user as {id: string, username: string});
  res.json({token});
}