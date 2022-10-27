var output=[];
function fibonaciiSeries(n)
{
  if(n === 1)
  {
    return [0];
  }
  else if(n === 2)
  {
    return [0,1];
  }
  else
  {
    output=[0,1];
    for(var i=2;i<n;i++)
    {
      output.push(output[i-2]+output[i-1]);
    }
  }
  return output;
}
fibonaciiSeries(6);
//output:[0, 1, 1, 2, 3, 5]
