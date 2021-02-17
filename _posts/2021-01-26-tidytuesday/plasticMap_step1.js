//// !preview r2d3 data = jsonlite::read_json("_posts/2021-01-26-tidytuesday/world_countries.geo.json"), d3_version = 6, dependencies = "_posts/2021-01-26-tidytuesday/topojson.js", viewer='external'

// Based on https://bl.ocks.org/mbostock/4055908
//debugger;

function base_map(svg, data){
    const path = d3.geoPath().projection(d3.geoMercator());
//const shp = topojson.feature(d)
svg.selectAll('path')
  .data(data)
  .enter().append('path')
  .attr('fill','black')
  .attr('stroke','grey')
  .attr('d', d=> path(d.geometry))
}

base_map(svg, data)