
// var entrada = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

var entrada = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log(snail(entrada));

function snail(entrada){
    let reverse = false;
    let indexs = [];
    let items = entrada.map((item, index) =>{
        if (!(index % 2)) {
            item = reverse ? item.reverse() : item;
            reverse = false;
        }else{
            indexs.push(index);
            item = item.splice(item.length -1, 1);
            reverse = true;
        }
        return  item;
    });

    indexs.forEach(element => {
        items.push(entrada[element]);
    });
    // console.log(items[1], entrada[1]);
    // console.log(items.join(', '));
    return items.join(', ').replace(/ /g, '');
}