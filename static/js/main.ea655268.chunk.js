(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(3),c=a.n(s),r=(a(13),a(1)),i=a(4),l=a(5),u=a(7),d=a(6),f=(a(14),a(15),function(e){var t=e.snakeDots.map((function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return o.a.createElement("div",{className:"snake-dot",key:t,style:a})}));return o.a.createElement("div",null,t)}),k=(a(16),function(e){var t={left:"".concat(e.food[0],"%"),top:"".concat(e.food[1],"%")};return o.a.createElement("div",{className:"food-dot",style:t})}),h=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).checkBounds=function(){var t=e.state.snakeDots[e.state.snakeDots.length-1];(t[0]>=100||t[0]<0||t[1]>=100||t[1]<0)&&e.gameOver()},e.checkSelfTouch=function(){var t=Object(r.a)(e.state.snakeDots),a=t[t.length-1];t.pop(),t.forEach((function(t){a[0]===t[0]&&a[1]===t[1]&&e.gameOver()}))},e.gameOver=function(){alert("GAME OVER"),e.setState({snakeDots:[[0,0],[2,0]],food:h(),direction:"RIGHT",speed:200,score:0})},e.moveSnake=function(){var t=e.state.snakeDots,a=t[t.length-1];switch(e.state.direction){case"UP":a=[a[0],a[1]-2];break;case"DOWN":a=[a[0],a[1]+2];break;case"LEFT":a=[a[0]-2,a[1]];break;case"RIGHT":a=[a[0]+2,a[1]]}t.push(a),t.shift(),e.setState({snakeDots:t})},e.keyPress=function(t){switch(t.keyCode){case 37:e.setState({direction:"LEFT"});break;case 38:e.setState({direction:"UP"});break;case 39:e.setState({direction:"RIGHT"});break;case 40:e.setState({direction:"DOWN"});break;default:alert("Use arrow keys to move snake")}},e.enlarge=function(){var t=Object(r.a)(e.state.snakeDots);t.unshift([]),e.setState({snakeDots:t})},e.eatFood=function(){var t=e.state.snakeDots[e.state.snakeDots.length-1];if(t[0]===e.state.food[0]&&t[1]===e.state.food[1]){e.setState({food:h()});var a=e.state.score;a+=10,e.setState({score:a});var n=e.state.speed;n>10&&(n-=10),e.setState({speed:n}),e.enlarge()}},e.state={snakeDots:[[0,0],[2,0]],food:h(),direction:"RIGHT",speed:200,score:0},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){this.checkBounds(),this.checkSelfTouch(),this.eatFood()}},{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.keyPress}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f-4 tc"},"Snake Game"),o.a.createElement("h1",{className:"f5 tc"},"Score:",this.state.score),o.a.createElement("div",{className:"game-area"},o.a.createElement(f,{snakeDots:this.state.snakeDots}),o.a.createElement(k,{food:this.state.food})))}}]),a}(o.a.Component);a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ea655268.chunk.js.map