import express from 'express';
import { extractParams } from '../middleware/extractParams.js';
import { getTrend, getTrailers, getDetails, similarMovies, moviesCategory } from '../controllers/media.contro.js';

const router = express.Router();


router.use('/:type/:id?', extractParams);

router.get('/:type/trending', getTrend);
router.get('/:type/:id/trailers', getTrailers);
router.get('/:type/:id/details', getDetails);
router.get('/:type/:id/similar', similarMovies);
router.get('/:type/:id', moviesCategory); 




export default router;
