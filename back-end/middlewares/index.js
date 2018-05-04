import * as elastic from '../services/elasticsearch/index'
import {DEFAULT_INDEX} from '../constants/elastic';

const search = (req, res) => {
    elastic.search(req.query.keyword, DEFAULT_INDEX)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.error(err.message);
        });
};

export {search};
