const input = 'manoj' 
function stringReverse(data)  {
    let result = ''
    for(let i = data.length ;i>0;i--){
        result+=data[i-1]
    }
     return result
}
stringReverse(input)