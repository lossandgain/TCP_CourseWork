const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class deviceController{

    async create(req, res, next){
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info){
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        descrtiption: i.description,
                        deviceId: device.id
                    })
                )
            }

            const device = await Device.create({name, price, brandId, typeId, img: fileName})

            return res.json(device)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offet = page * limit - limit
        let devices;
        if (!brandId && !typeId){
            devices = await Device.findAndCountAll({limt, offset})
        }
        if (brandId && !typeId){
            devices = await Device.findAndCountAll({where: {brandId}, limt, offset})
        }
        if (!brandId && typeId){
            devices = await Device.findAndCountAll({where: {typeId}, limt, offset})
        }
        if (brandId && typeId){
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limt, offset})
        }
        return res.json(devices)
    }
    async getOne(req,res){
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
}

module.exports = new deviceController()