import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Webcam'},
            {id: 2, name: 'Mouse'},
            {id: 3, name: 'Keyboard'},
            {id: 4, name: 'Headset'},
            {id: 5, name: 'Case'},
            { id: 1, name: 'MousePad'}
        ]
        this._brands = [
            {id: 1, name: 'Logitech'},
            {id: 2, name: 'HyperX'},
            {id: 3, name: 'Corsair'},
            {id: 4, name: 'Razor'},
            {id: 5, name: 'SteelSeries'}
        ]
        this._devices = [
            {id: 1, name: 'Alloy FPS Pro TKL', price: 10000, rating: 0, img: 'http://localhost:5000/7a425799-81bf-466d-96aa-d1cc31655e70.jpg'},
            {id: 1, name: 'HS80 RGB wireless', price: 25000, rating: 0, img: 'http://localhost:5000/0c86a9cd-4706-40fc-a210-3dd465b79f06.jpg'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}