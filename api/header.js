status200 = {
    'status': true, 'Content-Type': 'application/x-www-form-urlencoded', 'timestamp': Date.now(), 'Access-Control-Allow-Headers': '*/*'
}
status400 = {
    'status': false, 'Content-Type': 'application/x-www-form-urlencoded',  'msg': 'bad request', 'timestamp': Date.now()
}

module.exports = {
    status200,
    status400
}
