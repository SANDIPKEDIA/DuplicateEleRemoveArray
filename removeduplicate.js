
let a = [1,2,3,4,1,2,3];
let b = [];
// console.log(b.indexOf(a[1])); //it return -1 beacuse element is not present in array 'b'(property of indexOf)
let len = a.length;
for(let i=0;i<len;i++){
    if(b.indexOf(a[i])==-1){ // whenever condition will be !-1 it's not pushing it will be removed from the array
        b.push(a[i]);        //when it will !-1 ? ==>whenevr the element is present in array 'b'
    }
}

console.log(b)