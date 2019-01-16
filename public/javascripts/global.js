function widget(size, num){
    if(size === "small" && num < 2 ){
        console.log("small widget")
    }
    switch(size){
        case "small" : {
            var smallWidget = {
                gears: 2,
                springs: 3,
                lever: 1 
            }
            console.log("smallWidgets " + num);
        }
        break;
        case "med" : {
            var mediumWidget = {
                gears: 2,
                springs: 3,
                lever: 1 
            }
            console.log("mediumWidgets " + num);
        }
        break;
        case "large" : {
            var largeWidget = {
                gears: 9,
                springs: 4,
                lever: 2 
            }
            console.log("largeWidgets " + num);
        }

    }
}
widget("small", 3);
function gadget(size){
    switch(size){
        case "small" : {
            var smallGadget = {
                smallWidgets: widget("small", 1),
                mediumWidgets: widget("med" , 1),
                largeWidgets: 0
            }
            console.log("Small Gadget Created ");
        }
        break;
        case "medium" : {
            var mediumGadget = {
                smallWidgets: 1,
                mediumWidgets: 1,
                largeWidgets: 0
            }
            console.log("Small Gadget Created ");
        }
    }
}