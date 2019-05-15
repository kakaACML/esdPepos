// 随鼠标悬浮显示
// 参数
// 1.分类父元素 id,Class
// 2.分类子元素标签名
// 3.内容显示父元素 id,Class
// 4.内容显示子元素标签名
//
// window.onload = function () {
//
//
//     function nTab( mID,mTap,cID,cTap) {
//
//         var numId = document.getElementById(mID);
//         var numItem = numId.getElementsByTagName(mTap);
//         var conID = document.getElementById(cID);
//         var conItem = conID.getElementsByTagName(cTap);
//
//         console.log(numItem[0]);
//
//         var onfun = numItem[0].getAttribute('onmuseover');
//         console.log(onfun);
//         //检测是否有元素
//     //     if(numItem.length >0 &&  conItem.length > 0 && numItem.length===conItem.length ){
//     //         //初始被选中元素
//     //         numItem[0].className ="active";
//     //
//     //         for( var i=0 ;i < numItem.length ; i++){
//     //             //循环添加事件
//     //             //numItem[i].addEventListener('mousemove',switchShow(numItem,i,numItem.length,conItem));
//     //             //numItem[i].
//     //         }
//     //     }else{
//     //         console.log('参数错误');
//     //         return false;
//     //     }
//     }
//
// // 参数
// // 当前分类项数组
// // 当前项目数
// // 总项目数
// // 当前内容项数组
//
//     function switchShow(mArray,num,count,cArray){
//         if ( mArray[num].className === 'active' )  {
//             return;
//         }
//         for(let i=0;i<count;i++){
//             //mArray[i].className = (i==num ? 'active':'');
//             //cArray[i].style.display = (i==num ? 'block':'none');
//             if( i === num ){
//                 mArray[i].className = 'active';
//                 //cArray[i].style.display = 'block';
//             }
//             else{
//                 mArray[i].className = '';
//                 //cArray[i].style.display = 'none';
//                 }
//         }
//     }
//
//         nTab('gfMu','a','gfContent','p');
//
// };

function nTabs(thisObj,Num){
    if(thisObj.className == "active")return;
    var tabObj = thisObj.parentNode.id;
    var tabList = document.getElementById(tabObj).getElementsByTagName("a");
    for(i=0; i <tabList.length; i++)
    {
        if (i == Num)
        {
            thisObj.className = "active";
            document.getElementById(tabObj+"_Content"+i).style.display = "block";
        }else{
            tabList[i].className = "normal";
            document.getElementById(tabObj+"_Content"+i).style.display = "none";
        }
    }
}

