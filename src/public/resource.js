//公共资源
var res = {
    //公共声音
    Right_audio: "music/right.mp3",
    Wrong_audio: "music/wrong.mp3",
    Win_audio: "music/celebration.mp3",
    Star_audio: "music/star.m4a",
    Button_audio: "music/button.wav",
    GameBg_audio: "music/game-bg.mp3",

    //公共图片
    Back: "img/back.png", //头部公共部分
    BlackStar: "img/shape.png",
    FlyStar: "img/flay-star.png",
    LightStar: "img/light-star.png",
    RepeatNormal: "img/result-btn-repeat-normal.png",
    DoneNormal: "img/result-btn-done-normal.png",
    RepeatPress: "img/result-btn-repeat-pressed.png",
    DonePress: "img/result-btn-done-pressed.png",
    Hand: "img/hand.png", //提示手势
    HandClick: "img/handclick.png",
    //游戏个性
}
/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}