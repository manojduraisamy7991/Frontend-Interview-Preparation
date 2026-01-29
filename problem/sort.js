const input = [10, 7, 1, 2, 3, 4, 5];

function bubbleSortWithLogs(arr) {
  const result = [...arr];
  
  console.log('Starting array:', result);
  
  for(let i = 0; i < result.length; i++){
    console.log(`\n--- Pass ${i + 1} ---`);
    let swapped = false;
    
    for(let j = 0; j < result.length - i - 1; j++){
      console.log(`Comparing ${result[j]} and ${result[j + 1]}`);
      
      if(result[j] > result[j + 1]){
        console.log(`  → Swapping!`);
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      } else {
        console.log(`  → No swap needed`);
      }
      
      console.log(`  Current: [${result}]`);
    }
    
    console.log(`After Pass ${i + 1}: [${result}]`);
    
    if(!swapped){
      console.log('✅ Already sorted! Early exit.');
      break;
    }
  }
  
  return result;
}

bubbleSortWithLogs(input);

