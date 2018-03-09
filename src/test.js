import axios from 'axios'

export default class Testy {
    static affOpt() {
        return axios.get('http://localhost:3000/accounts/').catch(function (error) {
            console.log(error);
          });
    }
    static addOpt(title, category, Date_Operation, money){
        return axios.post("http://localhost:3000/accounts", {
            title: title,
            category: category,
            Date_Operation: Date_Operation,
            money: money
        
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    static removeOpt(id){
      return axios.delete("http://localhost:3000/accounts/"+id).catch(function (error) {
          console.log(error);
        });
      }
    static getTotal(){
      return axios.get('http://localhost:3000/accounts/').catch(function (error) {
            console.log(error);
          });
    }
}