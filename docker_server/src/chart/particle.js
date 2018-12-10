import React from 'react';
import * as d3 from 'd3';
import '../style/particle.css';
class Particle extends React.Component{
    constructor(props){
    super(props);
    this.state={

    };

  }
  componentDidMount() {
          this.drawChart();
    }

    
  drawChart() {

var gridSize = 650;     

var numParticles = 50; 

var epochTarget = 10;
var epochActual = 0;
var counter = 0;

var getXSpeed = function(){
  
    return ((Math.random() > 0.5)? -1 : 1) * ((Math.random() * 24) + 1);
};

var getYSpeed = function(){
   
    return ((Math.random() * 75) + 25);
};


var particles = [];
for(var i=0; i<numParticles; i++){
    particles.push({
        x: Math.floor(Math.random() * gridSize),
        y: 0,
        r: 3,
        key: counter++,
        vx: getXSpeed(),
        vy: getYSpeed()
    });
}


var svg = d3.select(".particlebox").append("svg")
    .attr("height", gridSize-76)
    .attr("width", gridSize)
    .append("g");


var redraw = function(elapsed){

    var particle = svg.selectAll("circle.particle").data(particles, function(d) { return d.key; } );

   
    particle
        .attr("cx", function(d) { return d.x; } )
        .attr("cy", function(d) { return d.y; } );

 
    particle.enter().append("circle")
        .attr("class", "particle")
        .attr("cx", function(d) { return d.x; } )
        .attr("cy", function(d) { return d.y; } )
        .attr("r", function(d) { return d.r; });
    
    particle.exit().remove();
};

var update = function(elapsed){
    for(var j=0; j<particles.length; j++){
        var particle = particles[j];
        
        particle.x = particle.x + (elapsed/1000) * particle.vx;
        particle.y = particle.y + (elapsed/1000) * particle.vy;
        
        if(particle.x < -10) { particle.x = gridSize - 1; }
        if(particle.x > gridSize + 10) { particle.x = 0; }

       
        if(particle.y > gridSize - 1) { 
            particle.x = Math.floor(Math.random() * gridSize);
            particle.y = 0;
            particle.key = counter++;
            particle.vx = getXSpeed();
            particle.vy = getYSpeed();
        }
    }
};



var doEpoch = function(){
    var dtg = new Date();
    var elapsed = dtg.getTime() - epochActual;
    
    update(elapsed);
    redraw(elapsed);

    epochActual = dtg.getTime();
    window.setTimeout(doEpoch, epochTarget);
};

    doEpoch();

  } 
        
  render(){
    return (
     
      <div class = "particlebox">
       
        </div>
      
    );
  }
}
export default Particle;