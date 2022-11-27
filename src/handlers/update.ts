import { Request, Response } from 'express';
import prisma from '../../db';
import { Update } from '@prisma/client';

// we put information about current user after checking the token
interface UserRequest extends Request {
  user: {
    id: string
  }
}

// Get All
export const getUpdates = async (req: UserRequest, res: Response) => {
  const updates = await prisma.update.findMany({
    where: {
      userId: req.user.id
    }
  })
  res.json({data: updates });
};

export const getUpdate = async (req: UserRequest, res: Response) => {
  const update = await prisma.update.findFirst({
    where: {
      id: req.params.id,
      userId: req.user.id
    }
  })
  res.json({ data: update });
};

export const createUpdate = async (req: UserRequest, res: Response) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.id
    }
  });

  if(!product) {
    // does not belong to user
    res.json({
      message: 'Does not belong to you'
    })
  }

  const update = await prisma.update.create({
    data: req.body
  });

  res.json({ data: update });
};

export const updateUpdate = async (req: UserRequest, res: Response) => {
  const update = await prisma.update.findFirst({
    where: {
      userId: req.user.id,
    }
  })
  if(!update) {
    //handle this later
    return res.json({ message: 'there is no updates belongs to you with such ID'})
  }

  const updatedUpdate = await prisma.update.update({
    where: {
      id: req.params.id
    },
    data: req.body
  })
  res.json({ data: updatedUpdate });
};

export const deleteUpdate = async (req: UserRequest, res: Response) => {
  const update = await prisma.update.findFirst({
    where: {
      userId: req.user.id,
    }
  })
  if(!update) {
    //handle this later
    return res.json({ message: 'there is no updates belongs to you with such ID'})
  }

  const deletedUpdate = await prisma.update.delete({
    where: {
      id: req.params.id
    }
  })
  res.json({ data: deletedUpdate });
};
