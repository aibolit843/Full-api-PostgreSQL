const { BasketDevice ,DeviceInfo} = require('../models/models')
const ApiError =require('../error/ApiError')

class BasketController {
  
    async create(req, res) {
        const {deviceId, basketId} = req.body
        const deviceIn = await BasketDevice.create({deviceId, basketId})

        return res.json(deviceIn)
    }

    async getAll(req, res) {
        let {deviceId, basketId} = req.query
        const devices = await BasketDevice.findAll({basketId, deviceId})
        
        return res.json(devices)
    }
    async getOne(req, res) {
        const {id} = req.params
        const device = await BasketDevice.findOne({where: {id}})

        return res.json(device)
    }

}

module.exports = new BasketController()