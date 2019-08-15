<template>
    <div class="page subpage" id="photoShow">
       <div class="return">
           <img src="../../../../public/images/saprophytic_grass_fluorescent/yesterday_return_icon@3x.png" alt="" @click="returnAction">
       </div>
       <div class="content" >
            <div class="title">
                <h1>出自《小王子》</h1>
            </div>
            <div class="main">
                <img src="../../../../public/images/saprophytic_grass_fluorescent/yesterday_detail_pic@3x.png" alt="">
                <p> 圣埃克苏佩里（1900-1944），法国作家。他是法国最早的一代飞行员之一。1940年流亡美国，侨居纽约，埋头文学创作。1943年参加盟军在北非的抗战。1944年他在执行第八次飞行侦察任务时失踪。</p>     
                <p>1935年，圣埃克苏佩里在前往莫斯科途中的火车上，在宵灯下看到一个睡梦中的孩子，他可爱的脸蛋使他想到孩子个个应该是童年莫扎特、传奇中的王子！同一年十二月，圣埃克苏佩里和一名机械师试图创造巴黎——西贡直飞记录，在离开罗二百公里的沙漠上空迷失方向，正俯身在机翼下寻找幽灵般的目标时撞上了一个斜坡。在死亡线上挣扎了三天之后，幸遇一个阿拉伯牧民救了他们。这两件事成了《小王子》故事的经纬线。</p>
                <p>《小王子》中，小王子是一个超凡脱俗的仙童，他住在一颗只比他大一丁点儿的小行星上。陪伴他的是一朵他非常喜爱的小玫瑰花。但玫瑰花的虚荣心伤害了小王子对她的感情。小王子告别小行星，开始了遨游太空的旅行。他先后访问了六个行星，各种见闻使他陷入忧伤，他感到大人们荒唐可笑、太不正常。只有在其中一个点灯人的星球上，小王子才找到一个可以作为朋友的人。但点灯人的天地又十分狭小，除了点灯人他自己，不能容下第二个人。在地理学家的指点下，孤单的小王子来到人类居住的地球。小王子发现人类缺乏想象力，只知像鹦鹉那样重复别人讲过的话。小王子这时越来越思念自己星球上的那枝小玫瑰。后来，小王子遇到一只小狐狸，小王子用耐心征服了小狐狸，与它结成了亲密的朋友。小狐狸把自己心中的秘密——肉眼看不见事物的本质，只有用心灵才能洞察一切——作为礼物，送给小王子。用这个秘密，小王子在撒哈拉大沙漠与遇险的飞行员一起找到了生命的泉水。最后，小王子在蛇的帮助下离开地球，重新回到他的B612号小行星上。</p>
                <p>在童话中，小王子没有被成人那骗人的世界所征服，最终找到了自己的理想。这理想就是连结宇宙万物的爱，而这种爱又是世间所缺少的。因此，小王子常常流露出一种伤感的情绪。作者圣埃克苏佩里在献辞中说：这本书是献给长成了大人的从前那个孩子。《小王子》不仅赢得了儿童读者，也为成年人所喜爱，作品凝练的语言渗透了作者对人类及人类文明深邃的思索。它所表现出的讽刺与幻想，真情与哲理，使之成为法国乃至世界上最为著名的一部童话小说。</p>
                <p>（图文源于网络）</p>
            </div>
       </div>
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
#photoShow{
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