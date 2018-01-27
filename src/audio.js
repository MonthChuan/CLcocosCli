//共性
var sound = {
  rightAudio:function(){//正确
    cc.audioEngine.playEffect(res.Right_audio);
  },
  wrongAudio:function(){//错误
    cc.audioEngine.playEffect(res.Wrong_audio);
  },
  winAudio:function(){//完成 欢呼
    cc.audioEngine.playEffect(res.Win_audio);
  },
  starAudio:function(){//飞星
    cc.audioEngine.playEffect(res.Star_audio);
  },
  buttonAudio:function(){//点击
    cc.audioEngine.playEffect(res.Button_audio);
  },
  stopAudio : function(){//停止
    cc.audioEngine.stopMusic();
  },
  //个性
  gameBgAudio:function(){//背景
    cc.audioEngine.playMusic(res.GameBg_audio,true);
    cc.audioEngine.setMusicVolume(0.2);  
  },
  hintAudio:function(){//提示
    cc.audioEngine.playEffect(res.seesaw_problem);
  },cat_meow:function(){//小猫
    cc.audioEngine.playEffect(res.cat_meow);
  },chicken:function(){//小鸡
        cc.audioEngine.playEffect(res.chicken);
  },goat:function(){//羊
        cc.audioEngine.playEffect(res.goat);
  },jump:function(){//跳跃
        cc.audioEngine.playEffect(res.jump);
  },kids_cheering:function(){

  },o_quest:function(){//狮子
        cc.audioEngine.playEffect(res.o_quest);
  },rabbit_laugh:function(){//鳄鱼
        cc.audioEngine.playEffect(res.rabbit_laugh);
  },sob:function(){//小狗
        cc.audioEngine.playEffect(res.sob);
  },woo:function(){//xiaoniao
        cc.audioEngine.playEffect(res.woo);
  },ye_happy:function(){//兔子
        cc.audioEngine.playEffect(res.ye_happy);
  }

}