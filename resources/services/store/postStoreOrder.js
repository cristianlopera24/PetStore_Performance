module.exports = {
    "url": "/store/order",
    "method": "post",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {
        "id": 10,
        "petId": 198772,
        "quantity": 1,
        "shipDate": "2021-08-27T17:22:52.000Z",
        "status": "placed",
        "complete": false
    },
    "response": {
        "status": 200,
        "body": {
            "id": 10,
            "petId": 198772,
            "quantity": 1,
            "shipDate": "2021-08-27T17:22:52.000Z",
            "status": "placed",
            "complete": false
        }
    }   
}