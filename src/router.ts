import { Router } from 'express';
import { body } from 'express-validator';
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
router.get('/product', (req, res) => {
  res.send('sjsjsj');
  res.end();
});
router.get('/product/:id', () => {});
router.put('/product/:id', body('name').isString(), handleInputErrors, (req,res) => {
  
});
router.post('/product/', body('name').isString(), () => {});
router.delete('/product/:id', () => {});

// UPDATE
router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', updateWithIdValidation, () => {}
);
router.post('/update/', updateValidation, () => {});
router.delete('/update/:id', () => {});

// UPDATE POINT
router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id', updatePointWithIdValidation, () => {}
);
router.post('/updatepoint/', updatePointValidation, () => {});
router.delete('/updatepoint/:id', () => {});

export default router