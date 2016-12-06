/*
  getclass(classname) 获取指定的类名的元素
  classname  指定要获取元素的classname
  思路
  1、判断浏览器
     document.getElementsByClassName
     range  指定的范围；具体的一个DOM对象
  2、获取所有元素
  3、元素的类名是否等于指定类名
  4、符合条件储存到数组
  5、返回数组
*/
 function getClass(classname,range){
 	  range=range||document;
 	  // range=range?range:document;
 	  // range=range===undefined?document:range;
 	if(document.getElementsByClassName){
 		//W3c 
 		return range.getElementsByClassName(classname);
 	}else{ 
 		//ie6-8
 		var all=range.getElementsByTagName("*");
 		var arr=[];
 		for(var i=0;i<all.length;i++){
 			//当前元素的className是否包含指定的classname
 			if(checkClass(all[i].className,classname)){
 			arr.push(all[i]);
 		   }
 		}
 		return arr;
 	}
 }
 /*checkClass(classStr,classname)
   classStr是否包含classname
   "one two"       "one"
 */
 function checkClass(classStr,classname){
 	var arr=classStr.split(" ");
 	for(var i=0;i<arr.length;i++){
 		if(arr[i]===classname){
 			return true;
 		}
 	}
 	return false;
 }



/*$(selecter)  (获取元素、设置元素)
 $(".one") 获取指定类名的元素
 $(".one") 获取指定id名的元素
 $(".one") 获取指定标签名名的元素
 1、初始化参数range
 2、selecter 去空
 3、判断第一个字符
 4、获取元素
*/
function $(selecter,range){
  if(typeof selecter=="function"){
    window.onload=function(){
      selecter();
    }
  }else if(typeof selecter=="string"){
   range=range||document;
   //不兼容trim
   selecter=selecter.trim();
   if(selecter.charAt(0)=="."){
   	return getClass(selecter.substring(1));
   }else if(selecter.charAt(0)=="#"){
   	return range.getElementById(selecter.substring(1));
   }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
    return range.getElementsByTagName(selecter);
   }else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(selecter)){
    return document.createElement(selecter.slice(1,-1));
   }
  }
}



/*getContent(obj,value)  获取或者设置obj的文本
  obj 指定对象      value   颜色设置的文本
  1、判断获取、设置     参数多个  value
  2、获取
    判断浏览器是否支持属性    return   obj.innerText
    return   obj.textContent
  3、设置
    判断浏览器是否支持属性   obj.innerText=value
     obj.textContent=value
*/
function getContent(obj,value){
  if(value){
     //设置
     if(obj.innerText){
       obj.innerText=value
     }else{obj.textContent=value
      }
  }else{
     //获取
     if(obj.innerText){
       return  obj.innerText
     }else{return  obj.textContent
      }
  }
}



/*getStyle(obj,attr)  获取指定元素的样式
  obj  指定对象    attr  样式属性
  1、判断浏览器是否支持属性
  2、返回属性值
*/
function getStyle(obj,attr){
  if(window.getComputedStyle){
    return getComputedStyle(obj,null)[attr];
  }else{
    return obj.currentStyle[attr];
  }
}




/*getChilds(obj,type)   获取指定对象的子元素集合
obj  指定的对象
type 指定获取子元素节点的类型
   true 元素节点
   false 元素节点和有意义的文本
1、获取所有子元素
2、节点类型1或有意义的节点和文本*/
function getChilds(obj,type){
  type=type==undefined?true:type;
  var arr=[];
  var childs=obj.childNodes;
  if(type){
   for(var i=0;i<childs.length;i++){
     if(childs[i].nodeType==1){
      arr.push(childs[i]);
     }
   }
  }else{
     for(var i=0;i<childs.length;i++){
     if(childs[i].nodeType==1 || (childs[i].nodeType==3 && childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
      arr.push(childs[i]);
     }
   }
  }
  return arr;
}


//获取第一个子元素
function firstChild(obj){
  return getChilds(obj)[0];
}


//获取最后一个子元素
function lastChild(obj){
  var childs=getChilds(obj);
  return childs[childs.length-1]
}



//获取任意一个子元素
function randomChild(obj,num){
  var childs=getChilds(obj);
  return childs[num];
}
/*
 getNext(obj,type)  获取obj下一个元素节点
 type 指定获取下一个元素节点的类型
          true 元素节点
          false 元素节点和有意义的文本
 1、先获取兄弟节点   没有 false
 2、有  判断兄弟节点nodeType!=1
        next=next.nextSibling
        next==null    false
        重复 步2
        nodeType==1  返回next
*/
// function  getNext(obj){
//   var next=obj.nextSibling;
//   if(next==null){
//     return false;
//   }while(next.nodeType==3||next.nodeType==8){
//     next=next.nextSibling;
//     if(next==null){
//       return false;
//     }
//   }
//   return next;
// }


function getNext(obj,type){
   type==type==undefined?true:type;
   if(type){
    var next=obj.nextSibling;
   if(next==null){
    return false;
   }
   while(next.nodeType==3||next.nodeType==8){
    next=next.nextSibling;
    if(next==null){
      return false;
    }
  }
   return next;
   }else if(type==false){
    var next=obj.nextSibling;
   if(next==null){
    return false;
   }
   while(!(next.nodeType==1 || (next.nodeType==3 && next.nodeValue.replace(/^\s*|\s*$/g,"")))){
    next=next.nextSibling;
    if(next==null){
      return false;
    }
 }
  return next;
   }
}

 // getNext(obj)  获取obj上一个元素节点
// function  getPrevious(obj){
//   var Previous=obj.previousSibling;
//   if(Previous==null){
//     return false;
//   }while(Previous.nodeType==3||Previous.nodeType==8){
//     Previous=Previous.previousSibling;
//     if(Previous==null){
//       return false;
//     }
//   }
//   return Previous;
// }



// function getPrevious(obj,type){
//   type=type==undefined?true:type;
//   if(type){
//     var previous=obj.previousSibling;
//     if(previous==null){
//        return false;
//     }while(previous.nodeType==3||previous.nodeType==8){   
//        previous=previous.nextSibling;
//        if(previous==null){
//           return false;
//        }
//     }
//     return previous;
//   }else(type==false){ 
//     var previous=obj.previousSibling;  
//     if(previous==null){
//        return false;
//     }while(previous.nodeType==1||(previous.nodeType==3&& previous.nodeValue.replace(/^\s*|\s*$/g,""))){   
//        previous=previous.nextSibling;
//        if(previous==null){
//           return false;
//        }
//     }
//     return previous;
//   }
// }



/*
  insertAfter(newobj,obj,type)
  将newobj插入到obj后面
  newobj   要插入的元素
  obj      插入的位置
  type     类型
          true  元素节点
          false 元素节点和有意义的文本
  1、获取obj的下一个兄弟元素next
  2、获取obj的父元素 parent
  3、 next  false
      parent.appendChild(newobj)
  4、 parent.insertBefore(newobj,next);
*/
function insertAfter(newobj,obj,type){
  var next=getNext(obj,type);
  var parent=obj.parentNode;
  if(next){
    parent.insertBefore(newobj,next);
  }else{
    parent.appendChild(newobj);
  }
}