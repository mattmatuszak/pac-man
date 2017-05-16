
function buildMap() {

// 0-empty
// 1-brick
// 2-coin

  let map = [
     [1,1,1,1,1,1,1,1,1,1]
    ,[1,2,2,2,2,2,2,2,2,1]
    ,[1,2,2,2,2,2,2,2,2,1]
    ,[1,2,2,2,2,2,2,2,2,1]
    ,[1,2,2,2,3,2,2,2,2,1]
    ,[1,2,2,2,2,2,2,2,2,1]
    ,[1,2,2,2,2,2,2,2,2,1]
    ,[1,2,2,2,2,2,2,2,2,1]
    ,[1,1,1,1,1,1,1,1,1,1]
  ];

  let html = '';
  for(let row = 0; row < map.length; row++) {
    html += `<div class='row'>`
    for (var column = 0; column < map[row].length; column++) {
      html += `<div class='${getCssClass(map[row][column])}' />`;
    }
    html += `</div>`

  }
  console.log(html);

  $('.container').html(html);

  return map;


}

function getCssClass(code) {
  if (code === 0) return 'empty';
  else if (code === 1) return 'brick';
  else if (code === 2) return 'coin';
  else if (code === 3) return 'pacman';
  return 'fixme';
}
