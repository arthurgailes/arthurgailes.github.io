//// !preview r2d3 data = jsonlite::read_json("_posts/2021-01-26-tidytuesday/world_countries.geo.json"), d3_version = 6, dependencies = "_posts/2021-01-26-tidytuesday/topojson.js", viewer='external'

// Based on https://bl.ocks.org/mbostock/4055908
//debugger;

function base_map(svg, data){
  
  const path = d3.geoPath().projection(d3.geoMercator());
  const bounds = path.bounds;
  const center = path.centroid;
  const imgHeight = d => (bounds(d.geometry)[1][1] - bounds(d.geometry)[0][1]);
  const imgWidth = d => (bounds(d.geometry)[1][0] - bounds(d.geometry)[0][0]);
  
  

//const shp = topojson.feature(d)

//create a group for each data point
const gpath = svg.append('g')
  .selectAll('g')
  .data(data)
  .join('g');


// append logos 
gpath.append('svg:defs')
  .append('svg:pattern')
  .attr('id', d=> 'pat_' + d.name_id)
  .attr('width', imgWidth)
  .attr('height', imgHeight)
  // define units in terms of path (geometry)
  .attr('patternUnits','userSpaceOnUse')
  .append('svg:image')
  .attr('xlink:href', 'https://raw.githubusercontent.com/arthurgailes/arthurgailes.github.io/main/_posts/2021-01-26-tidytuesday/company_logos/ur.jpg')
  .attr('width',imgWidth)
  .attr('height',imgHeight)
  .attr("preserveAspectRatio", "xMidYMid meet")
  ;
    
// append path/polygons to gs 
gpath
  .append('path')
  .attr('fill',d=> 'url(#pat_' + d.name_id + ')')
  .attr('stroke','grey')
  .attr('d', function(d){return path(d.geometry)})
  ;
  
}

base_map(svg, data);
