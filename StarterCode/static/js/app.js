// create dropdown menu

//update on change

//create a drop down menu for 940

function updatePlotly() {
    d3.json("samples.json").then( (data) => {
        var idNames = data.names
        const dropdownMenu = d3.select("#selDataset");
           

    });

}

// using d3 to read samples.json

function buildTrace1() {
        d3.json("samples.json").then( function(data)  {

        var bacteria_data = data;

          console.log(bacteria_data);

  //considering ID 940 only
        var id940 = bacteria_data.samples[0];
        console.log(id940);
        

//create a bar chart for ID 940's top 10 OTUs
//      1. use sample_values from sample key as the value for the bar chart
        var topbacValues = id940.sample_values.slice(0, 10).reverse();
          console.log(topbacValues);

//      2. use <otu_id>: <genus> as labels
        var topbacID = id940.otu_ids.slice(0, 10).reverse();
           console.log(topbacID);

//      3. use otu_labels as the hovertext
        var topbacNames = id940.otu_labels.slice(0, 10).reverse();
           console.log(topbacNames);

        

// Bar 1
        var barChart1 = {
          x: topbacValues,
          y: `${topbacNames}`,
          type: 'bar',
          orientation: 'h',
          hovertext: topbacNames,
          text: topbacNames
      };

// Bubble

        var bubbleTrace = {
          x: topbacValues,
          y: topbacNames,
          mode: 'markers',
          marker: {
               size: topbacValues 
      }
    };

// data var 

        var chartData = [barChart1];
        var bubble = [bubbleTrace];

// layout

        var layout1 = {
         title: 'Top 10 Bacteria - Selected Subject'
        };

        var layoutBubble = {
                title: 'Top 10 Bacteria - Selected Subject'

        };


// Plotly
        Plotly.newPlot('bar1', chartData, layout1);
        Plotly.newPlot('bubble', bubble, layout1);

})};


function buildTrace2() {
        d3.json("samples.json").then( function(data)  {

        var bacData = data;
  
//      1. use sample_values from sample key as the value for the bar chart
        var topbac10Values = bacData.sample_values
          console.log(topbac10Values);

//      2. use <otu_id>: <genus> as labels
        var topbac10ID = bacData.otu_ids
           console.log(topbac10ID);

//      3. use otu_labels as the hovertext
        var topbac10Names = bacData.otu_labels
           console.log(topbac10Names);

// Bar 1
        var barChart2 = {
          x: topbac10Values,
          y: `${topbac10Names}`,
          type: 'bar',
          orientation: 'h'
        };


// data var 

        var chartData2 = [barChart2];

        
// layout

        var layout2 = {
         title: 'Top 10 Bacteria - All Subjects'

        };


        Plotly.newPlot('bar2', chartData2, layout2);

})};



// create Demo info metadata
function metaData() {
  
   d3.json("samples.json").then( (data) => {
   var id940 = data.metadata[0];
   var bacData = d3.select(`#sample-metadata`);

   Object.entries(id940).forEach(function([key,value]){
     var row = bacData.append("p");
     row.text(`${key}:${value}`)
   })
 });
}


metaData();
buildTrace1();
buildTrace2();
updatePlotly();