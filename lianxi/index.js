const numbers=[0,1,2,3,4,5,6,7,8,9]
//在最后一位添加
Array.prototype.add=function(val){
    this[this.length]=val;
    return this;
};
//在第一位添加
Array.prototype.addFrist=function(val){
    for(var i=this.length;i>=0;i--){
        this[i]=this[i-1];
    }
    this[0]=val;
    return this;
};
//删除最后一位
Array.prototype.del=function(){
    this[this.length-1]=null;
    --this.length;
}
//删除第一位
Array.prototype.delFirst=function(){
    const first=this[0];
    for(i=0;i<this.length-1;i++){
        this[i]-this[i+1];
    }
    --this.length;
    console.log(this);
};
//
Array.prototype.delete=function(index,count){
    const delEle=this[index];
    for(var i=index;i<this.length;i++){
        this[i]=this[i+count];
    }
    this.length=this.length-count;
    // console.log(this)
return delEle;
    
}
//求总数
Array.prototype.size=function(){
    return this.length;
    
}
//判断是否为空
Array.prototype.isEmpty=function(){
    return this.length>0?false:true;
}
console.log(numbers.delete(4,2))