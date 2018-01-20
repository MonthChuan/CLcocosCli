//共性
var sound = {
  rightAudio:function(){
    cc.audioEngine.playEffect(res.Right_audio);
  },
  wrongAudio:function(){
    cc.audioEngine.playEffect(res.Wrong_audio);
  },
  winAudio:function(){
    cc.audioEngine.playEffect(res.Win_audio);
  },
  stopAudio : function(){
    cc.audioEngine.stopMusic();
  },
  buttonAudio:function(){
    cc.audioEngine.playEffect(res.Button_audio);
  },
  gameBgAudio:function(){ //背景
    cc.audioEngine.playMusic(res.GameBg_audio,true);
  }
}