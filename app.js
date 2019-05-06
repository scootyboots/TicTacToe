



var box1_1 = document.getElementById('box1-1')
var box1_2 = document.getElementById('box1-2')
var box1_3 = document.getElementById('box1-3')

var box2_1 = document.getElementById('box2-1')
var box2_2 = document.getElementById('box2-2')
var box2_3 = document.getElementById('box2-3')

var box3_1 = document.getElementById('box3-1')
var box3_2 = document.getElementById('box3-2')
var box3_3 = document.getElementById('box3-3')


var allBoxes = [box1_1, box1_2, box1_3, box2_1, box2_2, box2_3, box3_1, box3_2, box3_3]

allBoxes.map(function(box) {

    box.addEventListener('click', (event) => {console.log(box)})

}); 
































