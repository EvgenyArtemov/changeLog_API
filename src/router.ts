// @ts-nocheck
import { Router } from 'express';
import { body } from 'express-validator';
import { createProduct, getProducts, updateProduct, deleteProduct, getProduct } from './handlers/product';
import { getUpdates, updateUpdate, createUpdate, deleteUpdate, getUpdate } from './handlers/update';
import { handleInputErrors } from './modules/middleware';

const router = Router();

const updateWithIdValidation = [
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
  body('version').optional()
];

const updateValidation = [
  body('title').exists().isString(),
  body('body').exists().isString(),
  body('productId').exists().isString()
];

const updatePointWithIdValidation = [
  body('name').optional().isString(), 
  body('description').optional().isString(),
];

const updatePointValidation = [
  body('name').isString(), 
  body('description').isString(),
  body('updateId').exists().isString()
]; 

// PRODUCT
router.get('/product', getProducts);
router.get('/product/:id', getProduct);
router.put('/product/:id', body('name').isString(), handleInputErrors, updateProduct);
router.post('/product/', body('name').isString(), createProduct);
router.delete('/product/:id', deleteProduct);

// UPDATE
router.get('/update', getUpdates);
router.get('/update/:id', getUpdate);
router.put('/update/:id', updateWithIdValidation, updateUpdate);
router.post('/update/', updateValidation, createUpdate);
router.delete('/update/:id', deleteUpdate);

// UPDATE POINT
router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id', updatePointWithIdValidation, () => {}
);
router.post('/updatepoint/', updatePointValidation, () => {});
router.delete('/updatepoint/:id', () => {});

export default router