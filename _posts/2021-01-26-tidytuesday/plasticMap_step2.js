//// !preview r2d3 data = jsonlite::read_json("_posts/2021-01-26-tidytuesday/world_countries.geo.json"), d3_version = 6, dependencies = "_posts/2021-01-26-tidytuesday/topojson.js", viewer='external'

// Based on https://bl.ocks.org/mbostock/4055908
//debugger;

function base_map(svg, data){
  
  const imgSize = 200;
  const path = d3.geoPath().projection(d3.geoMercator());
  
  // define image
  const defs = svg.append('svg:defs');
  defs.append('svg:pattern')
    .attr('id','d3-company-logo')
    .attr('width',imgSize)
    .attr('height', imgSize)
    // define units in terms of path (geometry)
    .attr('patternUnits','userSpaceOnUse')
    .append('svg:image')
    .attr('xlink:href', 'https://raw.githubusercontent.com/arthurgailes/arthurgailes.github.io/main/_posts/2021-01-26-tidytuesday/company_logos/ur.jpg')
    .attr('width',imgSize)
    .attr('height',imgSize)
    .attr('x',0)
    .attr('y',0)
    ;
//const shp = topojson.feature(d)
svg.append('g').selectAll('path')
  
  .data(data)
  .enter().append('path')
  .attr('fill','url(#d3-company-logo')
  .attr('stroke','grey')
  .attr('d', d=> path(d.geometry))
  ;
}

base_map(svg, data);