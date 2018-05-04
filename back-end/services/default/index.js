import {indexExists, dropIndex, addMultipleToIndex, createIndex} from '../elasticsearch';
import {DEFAULT_INDEX, DEFAULT_PARAMS, DEFAULT_TYPE} from '../../constants/elastic';
import fs from 'fs' ;
import path from 'path' ;

const products = JSON.parse(fs.readFileSync(`${path.join(process.cwd())}/products.json`, 'utf8'));

export const checkAndAddToIndex = () => {
    return indexExists(DEFAULT_INDEX)
        .then(ifExists => {
            if (ifExists)
                return dropIndex(DEFAULT_INDEX);
        })
        .then(() => createIndex(DEFAULT_INDEX, DEFAULT_PARAMS, DEFAULT_TYPE))
        .then(() => addMultipleToIndex(DEFAULT_INDEX, DEFAULT_TYPE, products))
        .catch(err => {
            return err.message
        })
};
