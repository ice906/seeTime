<template>
    <div class="page subpage" id="todayHot">
       <div class="return">
           <img src="/images/saprophytic_grass_fluorescent/yesterday_return_icon@3x.png" alt="" @click="returnAction">
       </div>
       <app-scroll class="content" >
            <div class="title">
                <h1>今日大暑</h1>
            </div>
            <div class="main">
                <img src="/images/saprophytic_grass_fluorescent/today_detail_pic2@3x_03.png" alt="">
                <p>每年7月22-24日之间，太阳达到黄经120度。这就是大暑节气。此时天气酷热，气温为一年中 ，雷阵雨较多，在中国很多地区，经常会出现40°C 的高温天气，农作物生长也最快。同时，很多地区的旱、涝、风灾等气象灾害也最为频繁。民间有饮伏茶、晒伏姜、烧伏香等习俗。</p>
                <p>《月令七十二候集解》：“六月中，解见小暑。”《孝经援神契》：“小暑后十五日斗指末为大暑，六月中。小大者，就极热之中，分为大小，初后为小，望后为大也。”古人对大暑的观察很有意思，《山海经》说：“寿麻正立无景，疾呼无响。爰有大暑，不可以往。”郭璞注曰：“言热炙杀人也。”在头顶的太阳照射下，不仅身影没有了，就是喊出声音也听不见了，可见炎热之杀伐。</p>
                <p>古人观察到的大暑物候是：一候腐草为萤，即产卵于枯草上的萤火虫卵化而出；二候土润溽湿；三候大雨时行，常有大的雷雨出现。这大雨使暑湿减弱，天气开始向立秋过渡。</p>
                <p>大暑三候中的土湿雨行是自然现象。古人如此强调也说明土、雨在此节气的特殊性。大暑节气将土地和雨水重新给予人，经此节气，是谓土厚水深。古人明白：“土厚水深，居之不疾。”“生气所生，土厚水深，草木畅茂。”这样的水土是宜人宜家的。</p>
                <p>在古人那里，萤火虫象征夏天，象征希望，还象征爱情。雌虫和雄虫之间能互相用“灯语”联络。杜牧有诗：“银烛秋光冷画屏，轻罗小扇扑流萤。天阶夜色凉如水，坐看牵牛织女星。”</p>
                <p>“热在三伏”。大暑一般是处在三伏里的中伏阶段，就是我们常说的“桑拿天”。“伏”有避匿之意，从犬，狗在炎热中只能老老实实地伸舌消暑，人们在夏天也要避开炎热之毒杀。夏至后第三个庚日入初伏，第四个庚日入中伏，立秋后第一个庚日入末伏，总称“三伏”。初伏、末伏都是十天，中伏有时十天，有时二十天。</p>
                <p>三伏中以大暑期间地中伏最热，在古代，“伏日”也是伏避盛暑、祈祭清爽的祭日，伏日祭祀极为盛大。一般人以为中国农历不是太阳历，这是不了解农历是阴阳合历地缘故。太极的含义之一就是太阳回归年，全部的节气确立都是来自对太阳轨迹的观察。伏日所祭，“其帝炎帝，其神祝融”。炎帝就是中国的太阳神，祝融是火神。古人以为炎帝让太阳发出了光和热，使五谷孕育生长，人类不愁衣食。人们感谢他的功德，便在最热的时候纪念他，因此就有了“伏日祭祀”的传说。</p>
            </div>
        </app-scroll>
    </div>
</template>

<script>
export default {
     methods: {
        returnAction(){
            this.$router.back()
        },
    },
}
</script>
<style lang="scss" scoped>
#todayHot{
    .return{
        position: fixed;
        z-index: 12;
        width: 100%;
        height: 44px;
       background: #fff;
       img{
           width: 24px;
           height: 24px;
           margin: 10px 0 0 18px;
       }
    }
    .content{
         width: 100%;
         position: absolute;
         top: 44px;
         background: #fff;
        .title{
            text-align: center;
            h1{
                font-size: 18px;
                color: #333333;
                margin: 20px 0px;
            }
        }
        .main{
            margin: 0 12px;
            img{
                width: 100%;
                margin:20px 0;
            }
            p{
                color: #666666;
                font-size: 14px;
                line-height: 24px;
                text-indent: 2em;
            }
        }
    }
    
    
}
</style>