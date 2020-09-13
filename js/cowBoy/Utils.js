

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
module.exports={
    isEmpty,
    savePoint,
    saveCoin,
    getMaxP,
    getCoin,
    getStatusBar
}