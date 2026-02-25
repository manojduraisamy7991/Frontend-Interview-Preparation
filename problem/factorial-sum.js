function getFactorial (n) {
    if(n<0) return 'factorial not defined for negative numbers'
    if( n==0 ||  n==1) return 1
    return n * getFactorial(n-1)
}
console.log(getFactorial(3))
