var startScene2 = cc.Layer.extend({
    ctor: function() {
        this._super();
        //星星层
        this.layerightStar= new StarLayer(common_data[0]);
        this.addChild(this.layerightStar, 3, 10);
        this.dragArr = [];


        this.dragAction();
    },
    dragAction: function () {
        this.listener1 = cc.EventListener.create({

            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,      // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
            onTouchBegan: function (touch, event) {       //实现 onTouchBegan 事件处理回调函数
                this.unschedule(this.audioOff)
                var target = event.getCurrentTarget();
                // 获取事件所绑定的 target, 通常是cc.Node及其子类
                // 获取当前触摸点相对于按钮所在的坐标
                var locationInNode = target.convertToNodeSpace(touch.getLocation());  //转换为本地坐标系的坐标
                var s = target.getContentSize();   //获取 touch 元素的数据(宽高
                var rect = target._rect;

                if (cc.rectContainsPoint(rect, locationInNode)) {     // 判断触摸点是否在按钮范围内

                    return true;
                    // sound.buttonAudio();
                }
                return false;
            }.bind(this),
            onTouchMoved: function (touch, event) {            //实现onTouchMoved事件处理回调函数, 触摸移动时触发

            }.bind(this),
            onTouchEnded: function (touch, event) {            // 实现onTouchEnded事件处理回调函数
                this.layerightStar.removeFromParent();
                var target = event.getCurrentTarget();
                var _this = this;
                switch (target.name) {
                    case "firstLeve": {
                        var transition=new cc.TransitionCrossFade(1,new firstLeve());
                        cc.director.runScene(transition);
                        break;
                    };
                    case "secondLeve": {
                        var transition=new cc.TransitionCrossFade(1,new MyScene());
                        cc.director.runScene(transition)
                        break;
                    }
                }
            }.bind(this),

        });
        // 添加监听器到管理器

        var len = this.dragArr.length;
        for (var i = 0; i < len; i++) {
            cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i]);
        }
    }
})