function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var obj = {};
  for (var i = 0; i <collection.length; i++){
    if(collection[i].length != 1){
      var coll = collection[i].split("-");
      if(!obj[coll[0]]){
        obj[coll[0]] = parseInt(coll[1]);
      }
    }else {
      if (!obj[collection[i]]){
        obj[collection[i]] = 1;
      }else {
        obj[collection[i]]++;
      }
    }
  }
  for (var i in obj){
    result.push({key:i,count:obj[i]});
  }
  return result;
}

module.exports = count_same_elements;
