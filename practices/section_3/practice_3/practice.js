function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var obj = {};
  var collection_c = [];
  for (var i = 0 ; i < collection_a.length ; i++){
    if(!obj[collection_a[i]]){
      obj[collection_a[i]] = 1;
    }else {
      obj[collection_a[i]]++;
    }
  }
  for (var i in obj){
    collection_c.push({key:i,count:obj[i]});
  }
  for (var i = 0; i < collection_c.length; i++){
    for (var j = 0 ; j < object_b.value.length; j++){
      if(collection_c[i].key == object_b.value[j]){
        if(collection_c[i].count >= 3){
          collection_c[i].count -= parseInt(collection_c[i].count/3);
        }
      }
    }
    result.push(collection_c[i]);
  }
  return result;
}

module.exports = create_updated_collection;
