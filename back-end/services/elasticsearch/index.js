let elasticsearch = require('elasticsearch');
let Promise = require('bluebird');

let client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

const indexExists = (index) => {
    return client.indices.exists({index});
};

const dropIndex = (index) => {
    client.indices.delete({index})
};

const createIndex = (index, properties, type) => {
    let body = {
        settings: {
            number_of_shards: 1
        },
        mappings: {
            [type]: {
                properties
            }
        }
    };
    return client.indices.create({
        index,
        body
    });
};

const addMultipleToIndex = (index, type, iterable) => {

    return Promise.all(iterable.map((item, id) => addToIndex(index, type, item, id)));
};

const addToIndex = (index, type, body, id) => {

    return client.index({index, type, id, body});
};

const search = (q, index) => {
    return client.search({
        index,
        size: 1000,
        body: {
            sort : [
                { isInStock : "desc" }
            ],
            query: {
                bool: {
                    should: [
                        {term: {sku: q}},
                        {term: {ediRef: q}},
                        {
                            match: {
                                name: {
                                    query: q,
                                    fuzziness: 'AUTO',
                                    operator: 'or'
                                }
                            }
                        },
                        {
                            match: {
                                description: {
                                    query: q,
                                    fuzziness: 'AUTO',
                                    operator: 'or'
                                }
                            }
                        }
                    ]
                }

            }
        }
    });
};

const closeConnection = () => {
    client.close();
};

export {indexExists, dropIndex, addMultipleToIndex, createIndex, addToIndex, search, closeConnection}
