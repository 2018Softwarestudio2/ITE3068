import React from 'react';
import * as d3 from 'd3';
import '../style/arcgraph.css'

class Arcgraph extends React.Component{
	constructor(props){
    super(props);
    this.state={
      servicecount:0
    };

  }
  componentDidMount() {
		  this.drawChart();
	}

    
  drawChart() {

   
var pi = Math.PI, width=500,  height=500; var iR=140;  var oR=100;
var cur_color = 'limegreen';  var new_color, hold; 
var curval = 10;

var arc = d3.arc().innerRadius(iR).outerRadius(oR).startAngle(-120 * (pi/180));

var svg = d3.select(".temp").append("svg").attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

svg.append("path")
  .datum({endAngle:  120 * (pi/180)})
  .style("fill", "#ddd").attr("d", arc);

var foreground = svg.append("path")
                  .datum({endAngle: -120 * (pi/180)})
                  .style("fill", cur_color).attr("d", arc); 

var current = svg.append("text").attr("transform", "translate(0)") 
            .attr("text-anchor", "middle")
            .attr("margin-top", 50)
            .style("fill","white")
            .style("font-size", "50")
            .style("font-family", "Helvetica").text(curval)


setInterval(function() {
  var num = Math.random() * 180; 
  
  var numPi = Math.floor(num - 89) * (pi/180);

  if(num >= 121) {new_color = 'red';} 
  else if(num >= 61) {new_color = 'orange';} 
  else {new_color = 'limegreen';} 

  current.transition().text(Math.floor(num));

  foreground.transition().duration(750)
            .styleTween("fill", function() { 
              return d3.interpolate(new_color, cur_color); 
            }).call(arcTween, numPi);

  hold = cur_color; cur_color = new_color; new_color = hold;}, 1500); 
 
  function arcTween(transition, newAngle) {
    transition.attrTween("d", function(d) {
      var interpolate = d3.interpolate(d.endAngle, newAngle);
      return function(t) {
        d.endAngle = interpolate(t);  
        return arc(d);  
      };  
    }); 
  } 
 

} 
        
  render(){
    return (
     
      <div class = "temp">
      	</div>
      
    );
  }
}
export default Arcgraph;