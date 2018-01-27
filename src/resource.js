//公共资源
var res = {
   //个性图片配音 音效


    //声音
    Right_audio : "common/right.mp3",
    Wrong_audio : "common/wrong.mp3",
    Win_audio : "common/celebration.mp3",
    Star_audio : "common/star.m4a",
    Button_audio : "common/button.wav",
    GameBg_audio : "common/light_song_for_kids.mp3",

    //图片
    Back : "common/back.png", //头部公共部分
    BlackStar : "common/shape.png",
    FlyStar : "common/flay-star.png",
    LightStar : "common/light-star.png",
    ResultBg : "common/result-image-bg.png",
    RepeatNormal : "common/result-btn-repeat-normal.png",
    DoneNormal : "common/result-btn-done-normal.png",
    RepeatPress : "common/result-btn-repeat-pressed.png",
    DonePress : "common/result-btn-done-pressed.png"
};

/*预加载资源*/
var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}