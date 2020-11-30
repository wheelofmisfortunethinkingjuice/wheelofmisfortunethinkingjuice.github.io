var padding = {
    top: 20,
    right: 40,
    bottom: 0,
    left: 0
  },
  w = 500 - padding.left - padding.right,
  h = 500 - padding.top - padding.bottom,
  r = Math.min(w, h) / 2,
  rotation = 0,
  oldrotation = 0,
  picked = 100000,
  oldpick = [],
  color = d3.scale.category20(); //category20c()
//randomNumbers = getRandomNumbers();
//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
var data = [{
    "label": "Adam Laker",
    "value": 1,
    "question": "Adam Laker"
  }, // padding
  {
    "label": "Aimee Haines",
    "value": 2,
    "question": "Aimee Haines"
  },
  {
    "label": "Alex Anderson",
    "value": 3,
    "question": "Alex Anderson"
  },
  {
    "label": "Becki Woods",
    "value": 3,
    "question": "Becki Woods"
  },
  {
    "label": "Ben Brown",
    "value": 4,
    "question": "Ben Brown"
  },
  {
    "label": "Ben Trill",
    "value": 5,
    "question": "Ben Trill"
  },
  {
    "label": "Beth Forsyth",
    "value": 6,
    "question": "Beth Forsyth"
  },
  {
    "label": "Beth Forsyth",
    "value": 7,
    "question": "Beth Forsyth"
  },
  {
    "label": "Beth Griffiths",
    "value": 8,
    "question": "Beth Griffiths"
  },
  {
    "label": "Beth Morrison",
    "value": 9,
    "question": "Beth Morrion"
  },
  {
    "label": "Calum Butchart",
    "value": 10,
    "question": "Calum Butchart"
  },
  {
    "label": "Charlotte Williams",
    "value": 11,
    "question": "Charlotte Williams"
  },
  {
    "label": "Courtney Johnson",
    "value": 12,
    "question": "Courtney Johnson"
  },
  {
    "label": "Dan Morgan",
    "value": 13,
    "question": "Dan Morgan"
  },
  {
    "label": "Elysha Westcott",
    "value": 14,
    "question": "Elysha Westcott"
  },
  {
    "label": "Emily Coxx",
    "value": 15,
    "question": "Emily Coxx"
  },
  {
    "label": "Fiona Treble",
    "value": 16,
    "question": "Fiona Treble"
  },
  {
    "label": "Gabby Arthur",
    "value": 17,
    "question": "Gabby Arthur"
  },
  {
    "label": "Gary Brookman",
    "value": 18,
    "question": "Gary Brookman"
  },
  {
    "label": "Gemma Hartwll",
    "value": 19,
    "question": "Gemma Hartwll"
  },
  {
    "label": "George Davis",
    "value": 20,
    "question": "George Davis"
  },
  {
    "label": "Hannah Wright",
    "value": 21,
    "question": "Hannah Wright"
  },
  {
    "label": "Harrison Hopton",
    "value": 22,
    "question": "Harrison Hopton"
  },
  {
    "label": "Harry Finn",
    "value": 23,
    "question": "Harry Finn"
  },
  {
    "label": "Henry Hayhurst",
    "value": 24,
    "question": "Harry Hayhurst"
  },
  {
    "label": "Hollie Climie",
    "value": 25,
    "question": "Hollie Climie"
  },
  {
    "label": "Holly Francis",
    "value": 26,
    "question": "Holly Francis"
  },
  {
    "label": "Jack Murrell",
    "value": 27,
    "question": "Jack Murrell"
  },
  {
    "label": "James Mallorie",
    "value": 28,
    "question": "James Mallorie"
  },
  {
    "label": "Jess Nash",
    "value": 29,
    "question": "Jess Nash"
  },
  {
    "label": "Jez Emery",
    "value": 30,
    "question": "Jez Emery"
  },
  {
    "label": "Joe Worthington",
    "value": 31,
    "question": "Joe Worthington"
  },
  {
    "label": "Joe Lewis",
    "value": 32,
    "question": "Joe Lewis"
  },
  {
    "label": "Katie McGowan",
    "value": 33,
    "question": "Katie McGowan"
  },
  {
    "label": "Keith McGregor",
    "value": 34,
    "question": "Keith McGregor"
  },
  {
    "label": "Krista Bune",
    "value": 35,
    "question": "Krista Bune"
  },
  {
    "label": "Laura Singleton",
    "value": 36,
    "question": "Laura Singleton"
  },
  {
    "label": "Lewis Bullock",
    "value": 37,
    "question": "Lewis Bullock"
  },
  {
    "label": "Lucy Kenny",
    "value": 38,
    "question": "Lucy Kenny"
  },
  {
    "label": "Luke Bonner",
    "value": 39,
    "question": "Luke Bonner"
  },
  {
    "label": "Meg Davis",
    "value": 40,
    "question": "Meg Davis"
  },
  {
    "label": "Neil Dennis",
    "value": 41,
    "question": "Neil Dennis"
  },
  {
    "label": "Nicky Clark",
    "value": 42,
    "question": "Nicky Clark"
  },
  {
    "label": "Nicky Smith",
    "value": 42,
    "question": "Nicky Smith"
  },
  {
    "label": "Oledia Challen",
    "value": 43,
    "question": "Oledia Challen"
  },
  {
    "label": "Sam Gray",
    "value": 44,
    "question": "Sam Gray"
  },
  {
    "label": "Sam Leonard",
    "value": 45,
    "question": "Sam Leonard"
  },
  {
    "label": "Sam Liang",
    "value": 46,
    "question": "Sam Liang"
  },
  {
    "label": "Stephan Flagg",
    "value": 47,
    "question": "Stephan Flagg"
  },
  {
    "label": "Stewart Austin",
    "value": 48,
    "question": "Stewart Austin"
  },
  {
    "label": "Terry Davis",
    "value": 49,
    "question": "Terry Davis"
  },
  {
    "label": "Tim Redman",
    "value": 50,
    "question": "Tim Redman"
  },
  {
    "label": "Xander Ettling",
    "value": 51,
    "question": "Xander Ettling"
  },
];
var svg = d3.select('#chart')
  .append("svg")
  .data([data])
  .attr("width", w + padding.left + padding.right)
  .attr("height", h + padding.top + padding.bottom);
var container = svg.append("g")
  .attr("class", "chartholder")
  .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
var vis = container
  .append("g");

var pie = d3.layout.pie().sort(null).value(function(d) {
  return 1;
});
// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);
// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice")
  .data(pie)
  .enter()
  .append("g")
  .attr("class", "slice");

arcs.append("path")
  .attr("fill", function(d, i) {
    return color(i);
  })
  .attr("d", function(d) {
    return arc(d);
  });
// add the text
arcs.append("text").attr("transform", function(d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
  })
  .attr("text-anchor", "end")
  .text(function(d, i) {
    return data[i].label;
  });
container.on("click", spin);

function spin(d) {

  container.on("click", null);
  //all slices have been seen, all done
  console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
  if (oldpick.length == data.length) {
    console.log("done");
    container.on("click", null);
    return;
  }
  var ps = 360 / data.length,
    pieslice = Math.round(1440 / data.length),
    rng = Math.floor((Math.random() * 1440) + 360);

  rotation = (Math.round(rng / ps) * ps);

  picked = Math.round(data.length - (rotation % 360) / ps);
  picked = picked >= data.length ? (picked % data.length) : picked;
  if (oldpick.indexOf(picked) !== -1) {
    d3.select(this).call(spin);
    return;
  } else {
    oldpick.push(picked);
  }
  oldpick = [];
  rotation += 90 - Math.round(ps / 2);
  vis.transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function() {
      //mark question as seen
      // d3.select(".slice:nth-child(" + (picked + 1) + ") path")
      //   .attr("fill", "#111");
      //populate question
      d3.select("#question h1")
        .text(data[picked].question);
      oldrotation = rotation;

      /* Get the result value from object "data" */
      console.log(data[picked].value)

      /* Comment the below line for restrict spin to sngle time */
      container.on("click", spin);
    });
}
//make arrow
svg.append("g")
  .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
  .append("path")
  .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
  .style({
    "fill": "black"
  });
//draw spin circle
container.append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 60)
  .style({
    "fill": "white",
    "cursor": "pointer"
  });
//spin text
container.append("text")
  .attr("x", 0)
  .attr("y", 15)
  .attr("text-anchor", "middle")
  .text("SPIN")
  .style({
    "font-weight": "bold",
    "font-size": "30px"
  });


function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function(t) {
    return "rotate(" + i(t) + ")";
  };
}


function getRandomNumbers() {
  var array = new Uint16Array(1000);
  var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
  if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
    window.crypto.getRandomValues(array);
    console.log("works");
  } else {
    //no support for crypto, get crappy random numbers
    for (var i = 0; i < 1000; i++) {
      array[i] = Math.floor(Math.random() * 100000) + 1;
    }
  }
  return array;
}