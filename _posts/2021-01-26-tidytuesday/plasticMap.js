// !preview r2d3 data = jsonlite::read_json("_posts/2021-01-26-tidytuesday/world_countries.geo.json"), d3_version = 6, dependencies = "_posts/2021-01-26-tidytuesday/topojson.js", viewer='external'

// Based on https://bl.ocks.org/mbostock/4055908
//debugger;
const path = d3.geoPath().projection(d3.geoMercator());
//const shp = topojson.feature(d)
svg.selectAll('path')
  .data(data.features)
  .enter().append('path')
  .attr('fill','black')
  .attr('stroke','grey')
  .attr('d', path)