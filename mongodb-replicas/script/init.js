var cfg = { _id: 'rs0',
    members: [
        { _id: 0, host: 'mongo1:27017'},
        { _id: 1, host: 'mongo2:27017'},
        { _id: 2, host: 'mongo3:27017', arbiterOnly: true}
    ]
};

var error = rs.initiate(cfg);
printjson(error);
