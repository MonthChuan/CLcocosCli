//背景层
var BgLayer = cc.Layer.extend({
    ctor: function(bg) {
        this._super();
        sound.stopAudio();
        //默认有公共场景在这里创建 没有的直接删了
        var size = cc.director.getWinSize();
        var sprite = cc.Sprite.create(bg);
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(size.height / sprite.height); //全屏显示
        this.addChild(sprite, 0);

        var cupboard = cc.Sprite.create(res.cupboard);
        cupboard.setPosition(size.width / 2, size.height / 2 + 30);
        cupboard.setScale(0.333 * fix,0.333);//全屏显示
        this.addChild(cupboard, 0);
    }
});
var backLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var size = cc.director.getWinSize();
        var h1 = (size.height - 52*fix);
        this.dragArr=[];
        this.backSprite = cc.Sprite.create(res.Back);
        this.dragArr.push(this.backSprite);
        this.backSprite.id="back";
        this.backSprite.setAnchorPoint(0, 0);
        this.backSprite.setPosition(16,h1);
        this.backSprite.setScale(0.25*fix);
        this.addChild(this.backSprite, 5);


        this.dragAction();
    },
    dragAction: function () {
        /*设置 初始坐标 */
        // 创建一个事件监听器 OneByOne 为单点触摸
        this.listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,      // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
            onTouchBegan: function (touch, event) {       //实现 onTouchBegan 事件处理回调函数
                var target = event.getCurrentTarget();    // 获取事件所绑定的 target, 通常是cc.Node及其子类
                /*end 时是否恢复原位*/
                // 获取当前触摸点相对于按钮所在的坐标
                var locationInNode = target.convertToNodeSpace(touch.getLocation());  //转换为本地坐标系的坐标
                var s = target.getContentSize();   //获取 touch 元素的数据(宽高)
                var rect = cc.rect(0, 0, s.width, s.height); //元素范围

                if (cc.rectContainsPoint(rect, locationInNode)) {     // 判断触摸点是否在按钮范围内
                    /*按键声*/

                    this.delLayer = cc.director.getRunningScene().getChildByTag(1);
                    this.delLayer._children.forEach(function(element) {
                        if(element.name === null) {
                            element.removeFromParent();
                        }
                    });
                    sound.buttonAudio();
                    cc.director.runScene(new startScene());
                    /*保存原始坐标*/

                    return true;
                }
                return false;
            }.bind(this),
        })
        // 添加监听器到管理器
        var len = this.dragArr.length;
        for (var i = 0; i < len; i++) {
            cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
        }
    }
})
/*添加到场景中  实验*/
var MyScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        /*添加背景层*/
        var layer = new BgLayer();
        this.addChild(layer, 0, 8);

        var layer1 = new Layer1();
        this.addChild(layer1, 0, 1);

    }
})


/*添加到场景中   开始*/
var startScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        /*添加背景层*/
        var layer = new BgLayer();  //传参换背景
        this.addChild(layer, 0, 8);

        var layer = new startScene1();
        this.addChild(layer, 0, 1);




    }
})

/*添加到场景中  海洋*/
var firstLeve = cc.Scene.extend({
    onEnter: function() {
        this._super();
        /*添加背景层*/
        var layer = new BgLayer(); //换海洋背景
        this.addChild(layer, 0, 8);

        var layer = new firstLeve1();
        this.addChild(layer, 0, 1);



    }
})