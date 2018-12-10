import React from 'react';
import * as d3 from 'd3';
import '../style/graph.css';
class LineGraph extends React.Component{
	constructor(props){
    super(props);
    this.state={

    };

  }
  componentDidMount() {
		  this.drawChart();
	}

    
  drawChart() {

    var n = 30,
    random = d3.randomUniform(0, 100),
    data = d3.range(n).map(random);

    var svg = d3.select("#" + String(this.props.comment).split(' ').join('') + " svg").style("color","white"),
    margin = {top: 10, right: 20, bottom: 20, left: 30},
    width = svg.attr("width") - margin.left - margin.right,
    height = svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleLinear()
    .domain([0, n-1])
    .range([0, width]);

    var y = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

    var line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d, i) { return x(i); })
    .y(function(d, i) { return y(d); });

    g.append("defs").append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

    g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + y(0) + ")")
    .call(d3.axisBottom(x));
    
    g.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y));
    
    g.append("g")
    .attr("clip-path", "url(#clip)")
    .append("path")
    .datum(data)
    .attr("class", "line")
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .on("start",tick)

function tick() {
 
  data.push(random());
  d3.select(this)
      .attr("d", line)
      .attr("transform", null);

  d3.active(this)
      .attr("transform", "translate(" + x(-1) + ",0)")
    .transition()
      .on("start", tick);
  
  data.shift();
}


  } 
        
  render(){
    return (
     
      <div class = "linegraphbox" id = {String(this.props.comment).split(' ').join('')}>
        <div id = "graph_name">{this.props.comment}</div>
        <svg width = '450' height = '190'></svg>
    	</div>
      
    );
  }
}
export default LineGraph;
