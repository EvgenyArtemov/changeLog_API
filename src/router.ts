import { Router } from 'express';
import { resolve } from 'path';

const router = Router();


// PRODUCT
router.get('/product', (req, res) => {
  res.send('sjsjsj');
  res.end();
});
router.get('/product/:id', () => {});
router.put('/product/:id', () => {});
router.post('/product/', () => {});
router.delete('/product/:id', () => {});

// UPDATE
router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', () => {});
router.post('/update/', () => {});
router.delete('/update/:id', () => {});

// UPDATE POINT
router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id', () => {});
router.post('/updatepoint/', () => {});
router.delete('/updatepoint/:id', () => {});

export default router