status200 = {
    'status': true, 'Content-Type': 'application/javascript',
}
status400 = {
    'status': false, 'content-type': 'application/javascript',  'msg': 'bad request'
}

module.exports ={
    status200,
    status400
}