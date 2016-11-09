window.onload=function(){
  // 首页选项卡
  function xxk(xianshi,yincang){
   var item=$(xianshi);
   var list=$(yincang);
   for(i=0;i<item.length;i++){
    item[i].index=i;
    item[i].onmouseover=function(){
      list[this.index].style.display="block";
    }
    item[i].onmouseout=function(){
      list[this.index].style.display="none";
    }
   }
  }
  xxk(".item",".list");
  xxk(".dl",".dlxk");
  xxk(".shouji",".shoujihe");
  //  var dl=$(".dl")
  //  var dlxk=$(".dlxk")
  //  for(var i=0;i<dl.length;i++){
  //     dl[i].index=i;
  //     dl[i].onmouseover=function(){
  //        dlxk[this.index].style.display="block";
  //     }
  //     dl[i].onmouseout=function(){
  //        dlxk[this.index].style.display="none";
  //     }
  //  }

  // var shouji=$(".shouji")
  //  var shoujihe=$(".shoujihe")
  //  for(var i=0;i<shouji.length;i++){
  //     shouji[i].index=i;
  //     shouji[i].onmouseover=function(){
  //        shoujihe[this.index].style.display="block";
  //     }
  //     shouji[i].onmouseout=function(){
  //        shoujihe[this.index].style.display="none";
  //     }
  //  } 
// // 轮播图
//   var imgs=$("a",$(".bancenter")[0]);
//   var xys=$("li",$(".ul")[0]);
//   imgs[0].style.zIndex=10;
//   xys[0].style.background="#0085d0";
//   //当前窗口中的图片下标
//   var now=0;
//   var t=setInterval(move,2000);


//   //鼠标放上停止离开走
//   var center=$(".bancenter")[0];
//   center.onmouseover=function(){
//     clearInterval(t);
//   }
//   center.onmouseout=function(){
//     t=setInterval(move,2000);
//   }


//   //选项卡
//   for(var i=0;i<xys.length;i++){
//    xys[i].index=i;
//    xys[i].onclick=function(){

//       for (var i=0;i<imgs.length;i++) {
//       imgs[i].style.zIndex=5;
//       xys[i].style.background="";
//    }  
//       xys[this.index].style.background="#0085d0";
//       imgs[this.index].style.zIndex=10;
//       now=this.index;
//    }
//   }


//   // 左右爪
//   var banl=$(".banl")[0];
//   var banr=$(".banr")[0];
//   banl.onclick=function(){
//      movel();
//   }
//   banr.onclick=function(){
//      move();
//   }

//   function movel(){
//    now--;
//    if(now<0){
//       now=imgs.length;
//    }
//    for (var i=0;i<imgs.length;i++) {
//       imgs[i].style.zIndex=5;
//       xys[i].style.background="";
//    }   
//       xys[now].style.background="#0085d0";
//       imgs[now].style.zIndex=10;
   
//   }
  
//  //自动轮播
//   function move(){
//    now++;
//    if(now==imgs.length){
//       now=0;
//    }
//    for (var i=0;i<imgs.length;i++) {
//       imgs[i].style.zIndex=5;
      
//       xys[i].style.background="";
//    }   
//       xys[now].style.background="#0085d0";
//       imgs[now].style.zIndex=10;
   
//   }


/* 无缝轮播
1.next就位
imgs[next].style.left=mw+"px";
2.now next
imgs[now].style.left=-mw+"px";
animate(imgs[now].{left:-mw})
animate(imgs[next].{left:0})
3.更新now now=next;*/
var imgs=$("a",$(".bancenter")[0]);
var xys=$("li",$(".ul")[0]);
var center=$(".bancenter")[0];
var mw=parseInt(getStyle($(".bancenter")[0],"width"));
xys[0].style.background="#0085d0";
var t=setInterval(move,2000);
var now=0;
var next=0;
//鼠标放上离开走
  center.onmouseover=function(){
    clearInterval(t);
  }
  center.onmouseout=function(){
    t=setInterval(move,2000);
  }
//选项卡
for(var i=0;i<xys.length;i++){
   xys[i].index=i;
   xys[i].onclick=function(){
    if(now>this.index){
      imgs[this.index].style.left=-mw+"px";
      animate(imgs[now],{left:mw});
      animate(imgs[this.index],{left:0});
    }else if(now<this.index){
      imgs[this.index].style.left=mw+"px";
      animate(imgs[now],{left:-mw});
      animate(imgs[this.index],{left:0});
    }else{return;}
     
      xys[now].style.background="";
      xys[this.index].style.background="#0085d0";
      now=this.index;
      next=this.index;
   }
  }



// 左右按钮
  var banl=$(".banl")[0];
  var banr=$(".banr")[0];
  var flag=true;
  banl.onclick=function(){
    if(flag){
     movel();
     flag=false;
    }
  }
  banr.onclick=function(){
    if(flag){
     move();
     flag=false;
    }
  }


//移图
for(var i=0;i<imgs.length;i++){

  if(i==0){continue;}
  imgs[i].style.left=mw+"px";
}
// imglist[0].className="hot";
//now 记录当前窗口图片
//next 记录下一张图片
function move(){
  next++; 
  if(next==imgs.length){
    next=0;
  }
  imgs[next].style.left=mw+"px";
  xys[now].style.background="";
  xys[next].style.background="#0085d0";
  animate(imgs[now],{left:-mw});
  animate(imgs[next],{left:0},function(){flag=true;});
  now=next;
  
}

function movel(){
  next--; 
  if(next<0){
    next=imgs.length-1;
  }
  imgs[next].style.left=-mw+"px";
  xys[now].style.background="";
  xys[next].style.background="#0085d0";
  animate(imgs[now],{left:mw});
  animate(imgs[next],{left:0},function(){flag=true;});
  now=next;
  
}
// // 节点轮播
    var jyythe=$(".jyythe")[0];
    var k=$(".k")[0];
    var kw=parseInt(getStyle(k,"width"))+parseInt(getStyle(k,"margin-right"))
    jyythe.style.width=kw*k.length+"px";
    var ta=setInterval(moveimg,2000);
    function moveimg(){
      animate(jyythe,{left:-kw},function(){
        var first=firstChild(jyythe);
        jyythe.appendChild(first);
        jyythe.style.left=0;

      });
    }
    function movelimg(){
        var first=firstChild(jyythe);
        var last=lastChild(jyythe);
        jyythe.insertBefore(last,first);
        jyythe.style.left=-kw+"px";
        animate(jyythe,{left:0});

      }

// jyyt左右按钮
  var jyytl=$(".jyytl")[0];
  var jyytr=$(".jyytr")[0];
 
  jyytl.onclick=function(){
    
     movelimg();
     
  }
  jyytr.onclick=function(){
    
     moveimg();
    
     
  }
//鼠标放上离开走
 var centert=$(".jyyt")[0];
  centert.onmouseover=function(){
    clearInterval(ta);
  }
  centert.onmouseout=function(){
    ta=setInterval(moveimg,2000);
  }

// 节点轮播2
// function nodelunbo(obj,left,right,imgbox,j){
//    var lunbo=$(obj)[0];
//    var left=$(left)[0];
//    var right=$(right)[0];
//    var imgbox=$(imgbox)[0];
//    var imgs=$(".k",imgbox)
//    var width=parseInt(getStyle(imgs[0],"width"));
//    var t=setInterval(move,1500);
//    var n=j;
//    var flag=true;
//    function move(){
//         animate(imgbox,{left:-width*n},1000,
//          function(){
//           for (var i=1;i<=n;i++) {
//             var first=firstChild(imgbox);
//               imgbox.appendChild(first);
              
//           }
//           imgbox.style.left="0px";
//          });
      
//    }

//    // 放停
//     lunbo.onmouseover=function(){
//      clearInterval(t)
//     }
//     lunbo.onmouseout=function(){
//      t=setInterval(move,1500)
//     }



//      // 左右手
//      right.onclick=function(){ 
     
//      move();
//     }
//     left.onclick=function(){
    
//        moveL();
//     }

//     function moveL(){
//       if(!flag){
//        return;
//        }
//        flag=false;
//       for (var i=1;i<=n;i++) {
//         var last=lastChild(imgbox);
//           var first=firstChild(imgbox);
//           imgbox.insertBefore(last,first);
//       }
      
//        imgbox.style.left=-width*n+"px";
//          animate(imgbox,{left:0},1000,function(){flag=true;})
//     }
// }
// nodelunbo(".jyyt",".jyytl",".jyytr",".jyythe","1")
// 侧面
    var zxkf=$(".on1",$("#zxkf"));

    for(var i=0;i<zxkf.length;i++){
      zxkf[i].index=i;
      zxkf[i].onmouseover=function(){
        animate(zxkf[this.index],{left:-80},300)
      }
      zxkf[i].onmouseout=function(){
        animate(zxkf[this.index],{left:-22},300)
      }
    } 
// 公告轮播
function dhlunbo(banner,banL,banr){
  var gbanner=$(banner)[0];
  var imgs=$(".Rbox",$(banner)[0]);
  
  // imgs[0].style.zIndex=10;
  animate(imgs[0],{opacity:1});
 
  //当前窗口中的图片下标
  var now=0;
  var t=setInterval(move,4000);
  var banl=$(banL)[0];
  var banr=$(banr)[0];

  //鼠标放上停止离开走
 
  gbanner.onmouseover=function(){
    clearInterval(t);
  }
  gbanner.onmouseout=function(){
    t=setInterval(move,4000);
  }

  // 左右爪
  

  banl.onclick=function(){
     movel()
  }
  banr.onclick=function(){
     move()
  }

  function movel(){
   now--;
   if(now<0){
      now=imgs.length-1;
   }
   for (var i=0;i<imgs.length;i++) {
      // imgs[i].style.zIndex=5;
      animate(imgs[i],{opacity:0});
      
   }   
      
      // imgs[now].style.zIndex=10;
      animate(imgs[now],{opacity:1});
   
  }
  
 //自动轮播
  function move(){
   now++;
   if(now==imgs.length){
      now=0;
   }
   for (var i=0;i<imgs.length;i++) {
      // imgs[i].style.zIndex=5;
      animate(imgs[i],{opacity:0});
      
   }   
      
      // imgs[now].style.zIndex=10;
      animate(imgs[now],{opacity:1});
   
  }
}
dhlunbo(".gggR",".gleft",".gright")
}
  