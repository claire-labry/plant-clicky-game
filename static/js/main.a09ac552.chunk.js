(this["webpackJsonpplant-clicky-game"]=this["webpackJsonpplant-clicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"dahlia","image":"https://images.unsplash.com/photo-1591084342925-098b3a038b1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"},{"id":2,"name":"rose","image":"https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"},{"id":3,"name":"poppies","image":"https://images.unsplash.com/photo-1530913561740-8d51a2b1c9ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1383&q=80"},{"id":4,"name":"peony","image":"https://images.unsplash.com/photo-1554724525-cb98b8283611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"},{"id":5,"name":"geraniums","image":"https://images.unsplash.com/photo-1553255703-2f952a170cca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"},{"id":6,"name":"sunflowers","image":"https://images.unsplash.com/photo-1533598313300-ac574e6dd10d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80"},{"id":7,"name":"hibiscus","image":"https://images.unsplash.com/photo-1585125793882-77713492d3f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1452&q=80"},{"id":8,"name":"jasmine","image":"https://images.unsplash.com/photo-1557444022-ecea5cf98b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"},{"id":9,"name":"tulips","image":"https://images.unsplash.com/photo-1524628353413-a17f988df79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1061&q=80"},{"id":10,"name":"plumerias","image":"https://images.unsplash.com/photo-1558380233-20a18342c2c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"},{"id":11,"name":"lavender","image":"https://images.unsplash.com/photo-1566232498023-1ee697622dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1406&q=80"},{"id":12,"name":"hydrangea","image":"https://images.unsplash.com/photo-1584299611938-8c2056ee45e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"}]')},,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),o=a(3),s=a.n(o),r=(a(13),a(4)),n=a(5),l=a(7),m=a(6);a(14);var d=function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.clickedPhoto(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{className:"img-thumbnail img-responsive",alt:e.name,src:e.image})))};a(15);var h=function(e){return c.a.createElement("header",{className:"scoreboard"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5 col-left"},c.a.createElement("h3",null,e.title)),c.a.createElement("div",{className:"col-md-3 col-right"},c.a.createElement("h4",null,"High Score: ",e.topScore)),c.a.createElement("div",{className:"col-md-3 col-right"},c.a.createElement("h4",null," Current Score: ",e.score)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 col-right"},c.a.createElement("h4",null,"* Test your flower memory! Don't click on a flower more than once. *")))))},p=a(1);function u(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=[e[a],e[t]];e[t]=i[0],e[a]=i[1]}return e}var f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={plants:p,score:0,topScore:0,displayAlert:0,showSuccess:0,clickedplants:[]},e.clickedPhoto=function(t){var a=e.state.clickedplants,i=e.state.score,c=e.state.topScore;e.setState({displayAlert:0}),-1===a.indexOf(t)?(a.push(t),console.log(a),e.handleIncrement(),e.createMix()):12===e.state.score?e.setState({showSuccess:1,score:0,clickedplants:[]}):(e.setState({score:0,clickedplants:[]}),console.log("duplicate"),e.setState({showAlert:1})),i>c&&e.setState({topScore:i})},e.handleIncrement=function(){e.setState({score:e.state.score+1})},e.createMix=function(){e.setState({plants:u(p)})},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"alert alert-danger",style:{opacity:this.state.showAlert}},"You clicked this plant already, try again!"),c.a.createElement("div",{className:"alert alert-success",style:{opacity:this.state.showSuccess}},"Look at you! You remember your plants!"),c.a.createElement(h,{title:"Plant Clicky Game",score:this.state.score,topScore:this.state.topScore}),c.a.createElement("div",{className:"row"},this.state.plants.map((function(t){return c.a.createElement(d,{id:t.id,key:t.id,name:t.name,image:t.image,clickedPhoto:e.clickedPhoto})}))))}}]),a}(i.Component);s.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.a09ac552.chunk.js.map