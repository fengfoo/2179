/*
=============================================================================
  Student Name: Foo Jian Feng
  Student ID: 35172495
  Assignment: FIT2179 - Data Visualisation 2
  Description: This code is for the assignment of FIT2179. This code is 
  NOT meant to be reused or copied in any way outside of grading purposes only.
  Date: May 2026
=============================================================================
*/

var map = "json/map.vg.json";
var c2  = "json/chart2.vg.json";
var c3  = "json/chart3.vg.json";
var c4  = "json/chart4.vg.json";
var c5  = "json/chart5.vg.json";
var c6  = "json/chart6.vg.json";
var c7  = "json/chart7.vg.json";
var c8  = "json/chart8.vg.json";
var c9  = "json/chart9.vg.json";
var c10 = "json/chart10.vg.json";
var c11 = "json/chart11.vg.json";

// For chart connections to have state focus in Section 4
var selectedState = null;

var mapView    = null;
var chart3View = null;
var chart5View = null;

function broadcastState(stateName) {
  selectedState = stateName;
  if (mapView)    mapView.signal('ext_state', stateName).run();
  if (chart3View) chart3View.signal('ext_state', stateName).run();
  if (chart5View) chart5View.signal('ext_state', stateName).run();
}

vegaEmbed('#map_chart', map, { actions: false }).then(function(result) {
  mapView = result.view;


  mapView.addEventListener('click', function(event, item) {
    if (item && item.datum && item.datum.state) {
      var clicked = item.datum.state;

      if (selectedState === clicked) {
        broadcastState(null);
      } else {
        broadcastState(clicked);
      }
    } else {
      // Clicking ocean/state again clear everything
      broadcastState(null);
    }
  });

}).catch(console.error);

vegaEmbed('#chart3', c3, { actions: false }).then(function(result) {
  chart3View = result.view;
}).catch(console.error);

vegaEmbed('#chart5', c5, { actions: false }).then(function(result) {
  chart5View = result.view;
}).catch(console.error);

vegaEmbed('#chart2',  c2,  { actions: false }).then(function(result) {}).catch(console.error);
vegaEmbed('#chart4',  c4,  { actions: false }).then(function(result) {}).catch(console.error);
vegaEmbed('#chart6',  c6,  { actions: false }).then(function(result) {}).catch(console.error);
vegaEmbed('#chart7',  c7,  { actions: false }).then(function(result) {}).catch(console.error);
vegaEmbed('#chart8',  c8,  { actions: false }).then(function(result) {}).catch(console.error);
vegaEmbed('#chart9',  c9,  { actions: false }).then(function(result) {}).catch(console.error);
vegaEmbed('#chart10', c10, { actions: false }).then(function(result) {}).catch(console.error);
vegaEmbed('#chart11', c11, { actions: false }).then(function(result) {}).catch(console.error);
