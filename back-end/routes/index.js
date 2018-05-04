import {Router} from 'express';
import {search} from '../middlewares'
const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).send('Welcome to Test API Server!')
});

router.use('/search/full', search);

export default router;