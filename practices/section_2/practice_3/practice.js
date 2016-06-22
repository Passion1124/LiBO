function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var obj = {};
  for (var i = 0 ; i < collection.length; i++){
    if (collection[i].length != 1){
      var coll,num;
      if (collection[i].indexOf("[") != -1){
        coll = collection[i].split("[");
        num = parseInt(coll[1].substring(0,coll[1].length-1));
      }else if (collection[i].indexOf("-") != -1){
        coll = collection[i].split("-");
        num = parseInt(coll[1]);
      }else if (collection[i].indexOf(":") != -1){
        coll = collection[i].split(":");
        num = parseInt(coll[1]);
      }

      if (!obj[coll[0]]){
        obj[coll[0]] = num;
      }else {
        obj[coll[0]]+=num;
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
    result.push({name:i,summary:obj[i]});
  }
  return result;
}

module.exports = count_same_elements;
