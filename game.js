d3.select("#golfername")
    .on("click",function()
       {
      d3.select("body")
        .append("p")
        .text("click on the golfers")
        } )
d3.select("#rory")
 .on("click",function()
    {
      d3.select("body")
        .append("p")
        .text("Cobra")
        } )
d3.select("#tiger")
 .on("click",function()
    {
      d3.select("body")
        .append("p")
        .text("Tiger, Duh")
        } )
d3.select("#rahm")
 .on("click",function()
    {
      d3.select("body")
        .append("p")
        .text("Ram")
        } )

    