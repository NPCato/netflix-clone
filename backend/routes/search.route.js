import express from 'express'
import { extractParams } from '../middleware/extractParams.js';
import { delHistory, searchHistory, srch } from '../controllers/search.contro.js';


const router = express.Router();

router.use('/:type/:id?', extractParams);


router.get('/:type/:query',srch)
router.get('/history',searchHistory)
router.delete('/history/:id',delHistory)




export default router;