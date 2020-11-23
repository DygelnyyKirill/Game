const blockTypes = {
    positive: {
        color: 'green',
        points: 100,
    },
    neutral: {
        color: 'gray',
        points: 0,
    },
    negative: {
        color: 'red',
        points: -100,
    }
};

let score = 0;
let box = document.querySelector('.box'),
    wrapper = document.querySelector('.wrapper'),
    btn = document.querySelector('.button19');

function displayBox () {
    const h = wrapper.offsetHeight,
        w = wrapper.offsetWidth,
        dy = randomInteger(0, h - 100),
        dx = randomInteger(0, w - 100),
        index = randomInteger(0, Object.keys(blockTypes).length - 1),
        type = getFieldByIndex(blockTypes, index);  
    const box = makeBlock(dy, dx, type);
    wrapper.append(box);

}

function getFieldByIndex(obj, index) {
	let i = 0;
	
  for (const field in obj) {
  	if (index === i) {
    	return obj[field];
    }
  	
    i++;
  }
}

function makeBlock(dy, dx, type, size = 100) {
    const box = document.createElement('div');
    box.addEventListener('click', function() { 
        score += type.points;
        const scoreBlock = document.getElementById('score');
        scoreBlock.innerHTML = score;
        box.remove();
        displayBox();
    });
    box.style.position = 'relative';
    box.style.top = dy + 'px';
    box.style.left = dx + 'px';
    box.style.backgroundColor = type.color;
    box.style.width = size + 'px';
    box.style.height = size + 'px';   
    
    return box;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

btn.addEventListener('click', displayBox);

// document.querySelectorAll('button').forEach(function(el) {
//     el.addEventListener('click',function(){
//     if(!this.dataset.secondname)
//       return;
//      let tmp = this.innerHTML;
//      this.innerHTML = this.dataset.secondname;
//      this.dataset.secondname = tmp;
// }, false)
// })

