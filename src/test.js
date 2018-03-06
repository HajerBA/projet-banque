import axios from 'axios'

export default class Testy {
    static affOpt() {
        return axios.get("http://localhost:3000/accounts/1")
    }
    static addOpt(){
        return axios.post("http://localhost:3000/accounts", {
            "title": "pay",
            "category": "food",
            "Date_Operation": "2017-02-17",
            "money": 1000
        })
    }
}