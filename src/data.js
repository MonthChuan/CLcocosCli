/*精灵相关的 数据全部在这写
需要加载的精灵  坐标 阴影
选择错误替换精灵
声音提示
resdata=  统一使用变量
数据统一建值
*/
/* 字段 统一
* sprUrl sprUrlY
* 精灵坐标sp_X sp_Y
* 阴影坐标sp_Xy sp_Yy
* 选择作物精灵 errorSp
* 个性声音 audioP
* 答案 data
* 其他不确定字段 需要备注
* */

/*精灵相关的 数据全部在这写
需要加载的精灵  坐标 阴影
选择错误替换精灵
声音提示
resdata=  统一使用变量
数据统一建值
*/
var common_data=[
    {id:0,obtain:0,taoal:2},
    {id:1,obtain:0,taoal:1},
    {id:2,obtain:0,taoal:1},
]
data = {
    tryScene : [
        {indent: 3,url: res.egg, spx: 74, spy: 62,name:'egg'},
        {indent: 5,url: res.glass, spx: 173,spy: 62,name: 'glass'},
        {indent: 3,url: res.bowl, spx: 367, spy: 63,name: 'bowl'},
        {indent: 1,url: res.salt, spx: 375, spy: 80,name: "salt"},
        {indent: 3,url: res.glass_rod, spx: 643, spy: 63,name: 'glass_rod'},
        {indent: -1,url: res.spoonShu,spx:579,spy:63,name: "spoon"},
        {indent: 1,url: res.arrow,spx:81,spy:148,name: "arrow"},
        {indent: 1,url: res.arrow,spx:569,spy:190,name: "arrow"},
        {indent: -1,url: res.water_small, spx: 181,spy: 69,name: 'water_small'},

        //{indent: 1,url: res.water_big,spx:181,spy: 70,name: 'water_big'},
        {indent: -2,url: res.tray,spx:143+600,spy: 287},
        {indent: 2,url: res.spoon_dotted_line,spx: 176 + 600,spy: 315},
        {indent: 2,url: res.spoon_dotted_line,spx: 229 + 600,spy: 315},
        {indent: 2,url: res.spoon_dotted_line,spx: 283 + 600,spy: 315},
        {indent: 2,url: res.spoon_dotted_line,spx: 336 + 600,spy: 315},
        {indent: 2,url: res.spoon_dotted_line,spx: 389 + 600,spy: 315},
        {indent: 2,url: res.spoon_dotted_line,spx: 443 + 600,spy: 315},
        {indent: 2,url: res.spoon_dotted_line,spx: 496 + 600,spy: 315},
    ],
    startScene: [
        {indent: 1,url: res.africa,spx:87,spy: 53},
        {indent: 1,url: res.asia,spx:631,spy: 165},
        {indent: 1,url: res.deadsea_small,spx:341,spy: 157},
        {indent: 3,url: res.skyRing,spx:351 +25,spy: 185 + 25,name:"skyRing"},
    ],
    startScene2: [
        {indent: 2,url: res.israel,spx:194,spy: 73},
        {indent: 2,url: res.jordan,spx:458,spy: 177},
        {indent: 2,url: res.deadsea,spx:351,spy: 185},
        {indent: 2,url: res.palestine,spx:276,spy: 317},

        {indent: 2,url: res.button_salt,spx:552,spy: 229,name:"firstLeve"},
        {indent: 2,url: res.button_egg,spx:552,spy: 42,name: "secondLeve"},

    ],
    firstlevel: [
        {indent: 2,url: res.steam,spx:159,spy: 174,name:"steam"},
        {indent: 2,url: res.steam,spx:288,spy: 174,name:"steam"},
        {indent: 2,url: res.steam,spx:416,spy: 174,name:"steam"},
        {indent: 2,url: res.steam,spx:545,spy: 174,name:"steam"},
        {indent: 2,url: res.rock,spx:0,spy: 0,name:"rock"},
        {indent: 1,url: res.water_layerone,spx:0,spy: 50-10,name:"waterOne"},
        {indent: 1,url: res.water_layertwo,spx:100+10,spy: -10,name:"waterTwo"},
        {indent: 1,url: res.water_layerthree,spx:150-30,spy: -62-10,name:"waterThree"},
        {indent: 3,url: res.skyRing,spx:383,spy: 73,name:"skyRing"},

        {indent: 1,url: res.cloudy_left,spx:93,spy: 294,name:"cloud"},
        {indent: 1,url: res.cloudy_right,spx:493,spy: 260,name:"cloud"},
        //盐
        {indent: -1,url: res.mountain_sharp_three,spx: 325,spy: 0-150,name: "mount"},
        {indent: -1,url: res.mountain_stout_three,spx: 0,spy:0-50,name: "mount"},


    ],

}
