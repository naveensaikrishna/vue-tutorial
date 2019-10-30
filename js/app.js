var vm = new Vue({  //options
  el:"#vue-app", // element on the html page this instance will control..
  data: {
    title: 'Vue Project',
    first_name: "Naveen",
    last_name: "Sai Krishna",
    age:"25"
  },
  methods:{
    greet: function(time){
       return "Good "+time+', '+this.first_name+" "+this.last_name;
    },
    link: function(){
      return "<a href='https://www.google.com'> "+this.title+" </a>";
    }
  }
})
