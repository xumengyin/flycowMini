

function isEmpty(res)
{
    if(res==''||res==undefined)
        return true
    return false
}

function savePoint(data)
{
    let maxP=getMaxP()
    if (maxP) {
        if(maxP<data)
        {
            wx.setStorageSync('point', data)
        }
    }else
    {
        wx.setStorageSync('point', data)
    }
}
function saveCoin(data) {
  wx.setStorageSync('coin', data)
}

function getMaxP()
{
   let score= wx.getStorageSync('point')

    return score
}
function getCoin()
{
   let score= wx.getStorageSync('coin')

    return score
}
function getStatusBar()
{
   return wx.getSystemInfoSync().statusBarHeight
}
function postScore(score)
{
    let array =new Array()
    array.push({key:"score",value:score+""})
    wx.setUserCloudStorage({
        KVDataList:array,
        success:(res)=>{
            console.log("success ",res)
        },
        fail:(err)=>{
            console.log("fail",err)
        }
    })
}
function share(score)
{
    wx.shareAppMessage({
        title: '我得了'+score+"分,还差一点就能见到公主啦,你也来试一试吧!"
    })
}
module.exports={
    isEmpty,
    savePoint,
    saveCoin,
    getMaxP,
    getCoin,
    getStatusBar,
    postScore,
    share
}