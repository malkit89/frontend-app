import Vue from 'vue';

//Definire qui i filtri pesonalizzati
const MyFilters = {
  number: function (value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },

  DateDMY: function (value) {
    if (value) {
      var monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];

      var date = new Date(value);
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    } else {
      return '-';
    }
  }
}

//  Registra tutti i filtri nella istanza globale di vue
export default function(){
  Object.keys(MyFilters).forEach(key => Vue.filter(key, MyFilters[key]))
}
