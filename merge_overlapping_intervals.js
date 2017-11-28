//Given an array (list) of intervals as input where each interval has a start and end timestamps. Input array is sorted by starting timestamps. You are required to merge overlapping intervals and return output array (list).

let merge_overlap = function(v1){
  if(!v1 || v1.length < 1){ return false };

  let v2 = [];
  v2.push({'first': v1[0].first, 'second': v1[0].second});

  for(let i = 0; i < v1.length; i++){
    x1 = v1[i].first;
    y1 = v1[i].second;
    x2 = v2[v2.length - 1].first;
    y2 = v2[v2.length - 1].second;
    if(y2 >= x1){
      v2[v2.length - 1].second = Math.max(y1, y2);
    } else {
      v2.push({'first': x1, 'second': y1});
    }
  }

  return v2; 
}
