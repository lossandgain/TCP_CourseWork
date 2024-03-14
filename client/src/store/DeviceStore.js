import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Webcam'},
            {id: 2, name: 'Mouse'},
            {id: 3, name: 'Keyboard'},
            {id: 4, name: 'Headset'},
            {id: 5, name: 'Case'},
            {id: 1, name: 'MousePad'}
        ]
        this._brands = [
            {id: 1, name: 'Logitech'},
            {id: 2, name: 'HyperX'},
            {id: 3, name: 'Corsair'},
            {id: 4, name: 'Razor'},
            {id: 5, name: 'SteelSeries'}
        ]
        this._devices = [
            //{id: 1, name: 'Alloy FPS Pro TKL', price: 10000, rating: 0, img: }
        ]
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}