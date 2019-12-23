<template>
  <div class="skin-detail-container">
      <!-- fixed导航条上 -->
      <div id="deNav" class="skin-deNav-wrapper">
          <div class="skin-deNav-top">
              <div class="skin-content-container clearfix">
                  <div class="fl skin-deNav-topLeft">
                      <div class="skin-topLeft-img">
                          <img
                          :src="'http://192.168.97.254:3000/'+this.degoodslists.g_img.split(',')[0]" alt="">
                      </div>
                      <span>{{this.degoodslists.g_title}}</span>
                  </div>
                  <div class="fl skin-deNav-topRight clearfix">
                      <div class="skin-deNav-dropDown fl">
                          <el-select
                          v-model="label"
                          @change="selectgetvalue"
                          placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.label">
                                </el-option>
                          </el-select>
                      </div>
                      <div class="skin-deNav-doBtn fl clearfix">
                          <a
                          class="skin-bto-hover skin-deNav-doBtnL fl"
                          @click="addToshop"
                          >
                              <span class="skin-deNav-proPri">￥{{this.degoodslists.g_price}}</span>
                              <span>加入购物袋</span>
                          </a>
                          <a class="skin-bto-hover skin-deNav-doBtnR fl">
                              <span>立即购买</span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="skin-deNav-buttom">
              <div class="skin-content-container">
                  <ul class="clearfix">
                      <li class="fl skin-topNav-proListItem">
                          <a @click="scrollToAnchor('#skin-desc-wrapper')">产品详情</a>
                      </li>
                      <li class="fl skin-topNav-proListItem">
                          <a @click="scrollToAnchor('#dprecommend')">建议搭配使用</a>
                      </li>
                      <li class="fl skin-topNav-proListItem">
                          <a @click="scrollToAnchor('#dprecommend')">你可能会喜欢</a>
                      </li>
                      <li class="fl skin-topNav-proListItem">
                          <a @click="scrollToAnchor('#plcomment')">兰蔻官网评论</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <!-- fixed导航条下 -->
      <div class="skin-bottom-fixnav">
          <div class="skin-bpro-small">
              <div class="skin-content-container clearfix">
                  <div class="fl skin-b-leftbox"></div>
                  <div class="skin-b-rightbox clearfix">
                      <div class="skin-b-dropbox fl clearfix">
                          <el-select v-model="label" placeholder="请选择数量">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.label">
                            </el-option>
                          </el-select>
                          <span class="fr">数量 :</span>
                      </div>
                      <div class="skin-b-btnbox fl clearfix">
                          <a
                          class="skin-bto fl skin-b-inshopbtn"
                          @click="addToshop"
                          >加入购物袋</a>
                          <a class="skin-bto fl skin-b-inshopbtn">立即购买</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- 详情内容 -->
      <div class="skin-content-container" style="margin: 0 auto;">
            <!-- 评论星级 -->
            <div class="skin-detail-top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/SkinCare' }">护肤</el-breadcrumb-item>
                        <el-breadcrumb-item>{{this.degoodslists.g_title}}</el-breadcrumb-item>
                    </el-breadcrumb>
            </div>
            <goodsCont></goodsCont>
            <!-- 产品描述 -->
            <div class="skin-cont-description">
                <div class="skin-cont-descBox skin-content-container">
                    <ul class="skin-cont-descNav clearfix">
                        <li class="skin-cont-descItem on">
                            <a>产品描述</a>
                        </li>
                        <li class="skin-cont-descItem">
                            <a>产品功效</a>
                        </li>
                    </ul>
                    <ul class="skin-cont-descCont">
                        <li class="skin-cont-contItem on">
                            <div class="skin-desc-contBox">
                                <p>* 1因数量有限，同一个收货地址或者同一个手机号码限购5件，敬请谅解。</p>
                            </div>
                        </li>
                        <li class="skin-cont-contItem">
                            <div class="skin-desc-contBox">
                                <p style="color:#000;">* {{this.degoodslists.g_content}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 图片详情 -->
            <div id="skin-desc-wrapper" class="skin-desc-wrapper">
                <p class="skin-desc-imgTit">产品详情</p>
                <div class="skin-desc-imgBox skin-content-container">
                    <img src="./images/4.jpg">
                    <img src="./images/5.jpg">
                    <img src="./images/6.jpg">
                    <img src="./images/7.jpg">
                    <img src="./images/8.jpg">
                    <img src="./images/9.jpg">
                    <img src="./images/10.jpg">
                </div>
            </div>
            <!-- 建议搭配使用 -->
            <div id="dprecommend" class="skin-arc-recommend skin-content-container">
                <div class="skin-recommend-goods">
                    <ul class="skin-re-gLists">
                        <li class="skin-re-gItem" @click="cur=0" :class="{active:cur==0}">
                            <h2>建议搭配使用</h2>
                        </li>
                        <li class="skin-re-gItem" @click="cur=1" :class="{active:cur==1}">
                            <h2>你可能会喜欢</h2>
                        </li>
                    </ul>
                    <div v-show="cur==0" class="skin-re-goodsCont">
                        <ul class="skin-re-gLists-sm">
                            <li @click="cur=0" :class="{active:cur==0}">建议搭配使用</li>
                            <li @click="cur=1" :class="{active:cur==1}">你可能会喜欢</li>
                        </ul>
                        <div class="skin-re-gBox">
                            <div class="skin-re-swiper">
                                <div class="skin-re-wrapper">
                                    <div class="swiper-container swiperDetail1">
                                        <div class="swiper-wrapper">
                                            <div
                                            class="swiper-slide skin-re-wrapItem"
                                            v-for="item in this.likegoods"
                                            :key="item.g_id"
                                            >
                                                <!-- 图片 -->
                                                <div class="skin-re-imgBox">
                                                    <a href="javascript:;">
                                                        <img class="skin-re-img" src="./images/11.png" alt="">
                                                    </a>
                                                    <div class="skin-re-gHandle">
                                                        <div class="skin-re-btnBox">
                                                            <a class="skin-bto-hover skin-re-btnBuy">立即购买</a>
                                                            <a class="skin-bto-hover skin-re-btnDe">了解详情</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <!-- 标题 -->
                                                <div class="skin-re-deBox text-center">
                                                    <div class="skin-re-gClassify">
                                                        <div class="skin-gcla-colorBox">
                                                            <div class="skin-e-color">
                                                                <div style="width: 100%;height: 100%;">
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #EBCFB7;" class="skin-btn on"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #E1C1A5;" class="skin-btn"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #F7D8C7;" class="skin-btn"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #C9A27E;" class="skin-btn"></span>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div class="el-icon-arrow-left skin-gcolor-left"></div>
                                                            <div class="el-icon-arrow-right skin-gcolor-right"></div>
                                                        </div>
                                                    </div>
                                                    <h3 class="skin-rec-gTit text-overflow">
                                                        <a href="">{{item.g_title}}</a>
                                                    </h3>
                                                    <p class="skin-rec-introudce text-overflow">
                                                        <a href="">{{item.g_enTitle}}</a>
                                                    </p>
                                                    <div class="skin-star-pri">
                                                        <div class="skin-star-pri-l text-right">
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                        </div>
                                                        <div class="skin-star-pri-r text-left">￥{{item.g_price}}</div>
                                                    </div>
                                                    <div class="skin-rec-buybtn">
                                                        <a class="skin-bto">立即购买</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="el-icon-arrow-left skin-rebtn-left"></div>
                            <div class="el-icon-arrow-right skin-rebtn-right"></div>
                        </div>
                    </div>
                    <div v-show="cur==1" class="skin-re-goodsCont">
                        <ul class="skin-re-gLists-sm">
                            <li @click="cur=0" :class="{active:cur==0}">建议搭配使用</li>
                            <li @click="cur=1" :class="{active:cur==1}">你可能会喜欢</li>
                        </ul>
                        <div class="skin-re-gBox">
                            <div class="skin-re-swiper">
                                <div class="skin-re-wrapper">
                                    <div class="swiper-container swiperDetail2">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide skin-re-wrapItem">
                                                <!-- 图片 -->
                                                <div class="skin-re-imgBox">
                                                    <a href="javascript:;">
                                                        <img class="skin-re-img" src="./images/11.png" alt="">
                                                    </a>
                                                    <div class="skin-re-gHandle">
                                                        <div class="skin-re-btnBox">
                                                            <a class="skin-bto-hover skin-re-btnBuy">立即购买</a>
                                                            <a class="skin-bto-hover skin-re-btnDe">了解详情</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <!-- 标题 -->
                                                <div class="skin-re-deBox text-center">
                                                    <div class="skin-re-gClassify">
                                                        <div class="skin-gcla-colorBox">
                                                            <div class="skin-e-color">
                                                                <div style="width: 100%;height: 100%;">
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #EBCFB7;" class="skin-btn on"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #E1C1A5;" class="skin-btn"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #F7D8C7;" class="skin-btn"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #C9A27E;" class="skin-btn"></span>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div class="el-icon-arrow-left skin-gcolor-left"></div>
                                                            <div class="el-icon-arrow-right skin-gcolor-right"></div>
                                                        </div>
                                                    </div>
                                                    <h3 class="skin-rec-gTit text-overflow">
                                                        <a href="">兰蔻持妆轻透粉底液</a>
                                                    </h3>
                                                    <p class="skin-rec-introudce text-overflow">
                                                        <a href="">Teint Idole Ultra Wear</a>
                                                    </p>
                                                    <div class="skin-star-pri">
                                                        <div class="skin-star-pri-l text-right">
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                        </div>
                                                        <div class="skin-star-pri-r text-left">￥420</div>
                                                    </div>
                                                    <div class="skin-rec-buybtn">
                                                        <a class="skin-bto">立即购买</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide skin-re-wrapItem">
                                                <!-- 图片 -->
                                                <div class="skin-re-imgBox">
                                                    <a href="javascript:;">
                                                        <img class="skin-re-img" src="./images/11.png" alt="">
                                                    </a>
                                                    <div class="skin-re-gHandle">
                                                        <div class="skin-re-btnBox">
                                                            <a class="skin-bto-hover skin-re-btnBuy">立即购买</a>
                                                            <a class="skin-bto-hover skin-re-btnDe">了解详情</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <!-- 标题 -->
                                                <div class="skin-re-deBox text-center">
                                                    <div class="skin-re-gClassify">
                                                        <div class="skin-gcla-colorBox">
                                                            <div class="skin-e-color">
                                                                <div style="width: 100%;height: 100%;">
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #EBCFB7;" class="skin-btn on"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #E1C1A5;" class="skin-btn"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #F7D8C7;" class="skin-btn"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #C9A27E;" class="skin-btn"></span>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div class="el-icon-arrow-left skin-gcolor-left"></div>
                                                            <div class="el-icon-arrow-right skin-gcolor-right"></div>
                                                        </div>
                                                    </div>
                                                    <h3 class="skin-rec-gTit text-overflow">
                                                        <a href="">兰蔻持妆轻透粉底液</a>
                                                    </h3>
                                                    <p class="skin-rec-introudce text-overflow">
                                                        <a href="">Teint Idole Ultra Wear</a>
                                                    </p>
                                                    <div class="skin-star-pri">
                                                        <div class="skin-star-pri-l text-right">
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                        </div>
                                                        <div class="skin-star-pri-r text-left">￥420</div>
                                                    </div>
                                                    <div class="skin-rec-buybtn">
                                                        <a class="skin-bto">立即购买</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide skin-re-wrapItem">
                                                <!-- 图片 -->
                                                <div class="skin-re-imgBox">
                                                    <a href="javascript:;">
                                                        <img class="skin-re-img" src="./images/12.jpg" alt="">
                                                    </a>
                                                    <div class="skin-re-gHandle">
                                                        <div class="skin-re-btnBox">
                                                            <a class="skin-bto-hover skin-re-btnBuy">立即购买</a>
                                                            <a class="skin-bto-hover skin-re-btnDe">了解详情</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <!-- 标题 -->
                                                <div class="skin-re-deBox text-center">
                                                    <div class="skin-re-gClassify">
                                                        <div class="skin-gcla-colorBox">
                                                            <div class="skin-e-color">
                                                                <div style="width: 100%;height: 100%;">
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #EBCFB7;" class="skin-btn on"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #E1C1A5;" class="skin-btn"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #F7D8C7;" class="skin-btn"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #C9A27E;" class="skin-btn"></span>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div class="el-icon-arrow-left skin-gcolor-left"></div>
                                                            <div class="el-icon-arrow-right skin-gcolor-right"></div>
                                                        </div>
                                                    </div>
                                                    <h3 class="skin-rec-gTit text-overflow">
                                                        <a href="">兰蔻持妆轻透粉底液</a>
                                                    </h3>
                                                    <p class="skin-rec-introudce text-overflow">
                                                        <a href="">Teint Idole Ultra Wear</a>
                                                    </p>
                                                    <div class="skin-star-pri">
                                                        <div class="skin-star-pri-l text-right">
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                        </div>
                                                        <div class="skin-star-pri-r text-left">￥420</div>
                                                    </div>
                                                    <div class="skin-rec-buybtn">
                                                        <a class="skin-bto">立即购买</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide skin-re-wrapItem">
                                                <!-- 图片 -->
                                                <div class="skin-re-imgBox">
                                                    <a href="javascript:;">
                                                        <img class="skin-re-img" src="./images/13.jpg" alt="">
                                                    </a>
                                                    <div class="skin-re-gHandle">
                                                        <div class="skin-re-btnBox">
                                                            <a class="skin-bto-hover skin-re-btnBuy">立即购买</a>
                                                            <a class="skin-bto-hover skin-re-btnDe">了解详情</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <!-- 标题 -->
                                                <div class="skin-re-deBox text-center">
                                                    <div class="skin-re-gClassify">
                                                        <div class="skin-gcla-colorBox">
                                                            <div class="skin-e-color">
                                                                <div style="width: 100%;height: 100%;">
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #EBCFB7;" class="skin-btn on"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #E1C1A5;" class="skin-btn"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #F7D8C7;" class="skin-btn"></span>
                                                                        </div>
                                                                        <div class="skin-e-iconCont">
                                                                            <span style="background: #C9A27E;" class="skin-btn"></span>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div class="el-icon-arrow-left skin-gcolor-left"></div>
                                                            <div class="el-icon-arrow-right skin-gcolor-right"></div>
                                                        </div>
                                                    </div>
                                                    <h3 class="skin-rec-gTit text-overflow">
                                                        <a href="">兰蔻持妆轻透粉底液</a>
                                                    </h3>
                                                    <p class="skin-rec-introudce text-overflow">
                                                        <a href="">Teint Idole Ultra Wear</a>
                                                    </p>
                                                    <div class="skin-star-pri">
                                                        <div class="skin-star-pri-l text-right">
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                            <li class="el-icon-star-on"></li>
                                                        </div>
                                                        <div class="skin-star-pri-r text-left">￥420</div>
                                                    </div>
                                                    <div class="skin-rec-buybtn">
                                                        <a class="skin-bto">立即购买</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="el-icon-arrow-left skin-rebtn-left"></div>
                            <div class="el-icon-arrow-right skin-rebtn-right"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 评论 -->
            <div id="plcomment" class="skin-comment-main">
                <p class="skin-com-tit">兰蔻官网评论</p>
                <div class="skin-content-container skin-com-cont">
                    <div class="skin-com-views">
                        <div class="skin-views-header">
                            <p class="skin-views-title">{{this.data.title}}</p>
                            <div class="skin-views-panal clearfix">
                                <div class="fl skin-views-com">
                                    <span class="skin-views-txt font-14">总评分</span>
                                    <div class="skin-views-star">
                                        <el-rate
                                        v-model="valueP"
                                        :colors="colores"
                                        disabled
                                        ></el-rate>
                                    </div>
                                    <span class="skin-views-numTxt margin-l-10">100条评论</span>
                                </div>
                                <div class="fr skin-com-btnBox">
                                    <a href="" class="skin-bto">添加您的评论</a>
                                </div>
                            </div>
                        </div>
                        <div class="skin-views-review">
                            <ul>
                                <!-- 添加评论 -->
                                <li class="skin-views-item">
                                    <div class="skin-views-paBox clearfix">
                                        <div class="skin-views-recBox fl">
                                            <ul>
                                                <li class="skin-views-label">产品质量</li>
                                                <li class="skin-views-label">产品质量</li>
                                                <li class="skin-views-label">产品质量</li>
                                            </ul>
                                            <div class="skin-views-recText">喜欢吴代言人！希望眼霜好用～官网买好划算等于买一送一，又想再试试别的了。</div>
                                            <ul class="skin-views-recImg"></ul>
                                            <div class="skin-views-recBottom clearfix">
                                                <div class="skin-views-buyWay">
                                                    <div class="skin-views-recOwner clearfix">
                                                        <span class="text-overflow fl">{{this.data.name}}</span>
                                                        <div class="skin-views-recStar">
                                                            <el-rate
                                                            v-model="valueP"
                                                            :colors="colores"
                                                            disabled
                                                            ></el-rate>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="skin-views-buyTime">
                                                    <p>{{this.data.buyWay}}</p>
                                                    <p>{{this.data.buyTime}}</p>
                                                </div>
                                            </div>
                                            <div class="skin-views-reply">
                                                <el-divider></el-divider>
                                                <div class="skin-views-replyCont">
                                                    <p>
                                                        <span>{{this.data.seller}} 回复:</span>
                                                        亲爱的蔻蜜，感谢您对产品的青睐，给予我们的肯定，兰蔻愿您像兰蔻玫瑰般绽放美丽，期待您的再次光临哦。
                                                    </p>
                                                    <p>{{this.data.replyTime}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="skin-views-usefulBox fr">
                                            <p class="skin-views-usefulTit">该评论是否有用</p>
                                            <div class="skin-views-usefulBtn clearfix">
                                                <a class="skin-bto-hover">有用</a>
                                                <a class="skin-bto-hover">无用</a>
                                            </div>
                                            <p class="skin-views-usefulPoint">
                                                有
                                                <span class="skin-views-usefulNum">{{this.data.usefulNum}}</span>
                                                位用户认为该评论有用
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="skin-views-item">
                                    <div class="skin-views-paBox clearfix">
                                        <div class="skin-views-recBox fl">
                                            <ul>
                                                <li class="skin-views-label">产品质量</li>
                                                <li class="skin-views-label">产品质量</li>
                                                <li class="skin-views-label">产品质量</li>
                                            </ul>
                                            <div class="skin-views-recText">喜欢吴代言人！希望眼霜好用～官网买好划算等于买一送一，又想再试试别的了。</div>
                                            <ul class="skin-views-recImg"></ul>
                                            <div class="skin-views-recBottom clearfix">
                                                <div class="skin-views-buyWay">
                                                    <div class="skin-views-recOwner clearfix">
                                                        <span class="text-overflow fl">{{this.data.name}}</span>
                                                        <div class="skin-views-recStar">
                                                            <el-rate
                                                            v-model="valueP"
                                                            :colors="colors"
                                                            disabled
                                                            ></el-rate>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="skin-views-buyTime">
                                                    <p>{{this.data.buyWay}}</p>
                                                    <p>{{this.data.buyTime}}</p>
                                                </div>
                                            </div>
                                            <div class="skin-views-reply">
                                                <el-divider></el-divider>
                                                <div class="skin-views-replyCont">
                                                    <p>
                                                        <span>{{this.data.seller}} 回复:</span>
                                                        亲爱的蔻蜜，感谢您对产品的青睐，给予我们的肯定，兰蔻愿您像兰蔻玫瑰般绽放美丽，期待您的再次光临哦。
                                                    </p>
                                                    <p>{{this.data.replyTime}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="skin-views-usefulBox fr">
                                            <p class="skin-views-usefulTit">该评论是否有用</p>
                                            <div class="skin-views-usefulBtn clearfix">
                                                <a class="skin-bto-hover">有用</a>
                                                <a class="skin-bto-hover">无用</a>
                                            </div>
                                            <p class="skin-views-usefulPoint">
                                                有
                                                <span class="skin-views-usefulNum">{{this.data.usefulNum}}</span>
                                                位用户认为该评论有用
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="skin-showmore-box">
                                <a class="skin-bto skin-showmore-btn">更多评论</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Top from '../Common/top'
import goodsCont from '../../components/Popup/indexDel'
export default {
    data () {
        return {
            cur: 0,
            label: 1,
            value: 5,
            valueP: 5,
            selectValue: '',
            colores: ['#000', '#000', '#000'],
            vText: '10条评论',
            colors: ['#000', '#000', '#000'],
            data: {
                name: '陈晓奕',
                title: '兰蔻新清滢柔肤水',
                buyWay: '线上官网购买',
                buyTime: '2019-9-29 16:26:33',
                seller: '兰小蔻',
                replyTime: '2019-10-7 11:25:50',
                usefulNum: 3
            },
            options: [{
                value: '1',
                label: '1'
            }, {
                value: '2',
                label: '2'
            }, {
                value: '3',
                label: '3'
            }, {
                value: '4',
                label: '4'
            }, {
                value: '5',
                label: '5'
            }],
            deId: '',
            degoodslists: '',
            urlId: '',
            likegoods: ''
        }
    },
    components: {
        Top,
        goodsCont
    },
    methods: {
        changeddIcon () {
            console.log(111)
        },
        initSwiper1 () {
            let Swip = new Swiper('.swiperDetail1', {
                // 'vertical', 滚动方向
                direction: 'horizontal',
                // 可选选项，自动滑动
                autoplay: false,
                // 滑动不够一格，不会自动贴合
                freeMode: true,
                // 修改swiper自己或子元素时，自动初始化swiper
                observer: true,
                // 修改swiper的父元素时，自动初始化swiper
                observeParents: true,
                // 设置slider容器能够同时显示的slides数量
                slidesPerView: 'auto',
                // 让slide在边缘不能被拖动
                resistanceRatio: 0
            })
            console.log(Swip)
        },
        initSwiper2 () {
            let Swip1 = new Swiper('.swiperDetail2', {
                // 'vertical', 滚动方向
                direction: 'horizontal',
                // 可选选项，自动滑动
                autoplay: false,
                // 滑动不够一格，不会自动贴合
                freeMode: true,
                // 修改swiper自己或子元素时，自动初始化swiper
                observer: true,
                // 修改swiper的父元素时，自动初始化swiper
                observeParents: true,
                // 设置slider容器能够同时显示的slides数量
                slidesPerView: 'auto',
                // 让slide在边缘不能被拖动
                resistanceRatio: 0
            })
            console.log(Swip1)
        },
        changeDescCont () {
            let descTitLists = document.getElementsByClassName('skin-cont-descItem')
            let descConLists = document.getElementsByClassName('skin-cont-contItem')
            for (let a = 0; a < descTitLists.length; a++) {
                descTitLists[a].onclick = () => {
                    descTitLists[a].classList.add('on')
                    descConLists[a].classList.add('on')
                    let descTitListsChild = descTitLists[a].parentNode.children
                    for (let b = 0; b < descTitListsChild.length; b++) {
                        if (descTitListsChild[b] !== descTitLists[a]) {
                            descTitListsChild[b].classList.remove('on')
                            descConLists[b].classList.remove('on')
                        }
                    }
                }
            }
        },
        // 根据id查询的商品详情
        getdegoods () {
            var search = window.location.search
            let searchParams = new URLSearchParams(search)
            let searchId = searchParams.get('id')
            this.deId = searchId || this.urlId
            console.log(this.deId)
            this.$store.dispatch('getgoodsfordetail')
            let dgoodslist = this.$store.state.getDetail.gooddelist
            if (dgoodslist != '') {
                for (let xq of dgoodslist) {
                    if (xq.g_id == this.deId) {
                        this.degoodslists = xq
                    } else {
                        let list = JSON.parse(window.localStorage.getItem('selectInfo'))
                        for (let sq of list) {
                            if (sq.g_id == this.deId) {
                                this.degoodslists = sq
                            }
                        }
                    }
                }
            } else {
                let list = JSON.parse(window.localStorage.getItem('selectInfo'))
                for (let item of list) {
                    if (item.g_id == this.deId) {
                        this.degoodslists = item
                    }
                }
            }
            return this.degoodslists
        },
        // 猜你喜欢商品
        getlikegoods () {
            this.$store.dispatch('getgoodsfordetail')
            let likegoods = this.$store.state.getDetail.gooddelist
            this.likegoods = likegoods
            return this.likegoods
        },
        // 获取四个元素距离顶部的距离事件
        getDomHeight () {
            let deOffsetHeight = document.getElementById('skin-desc-wrapper')
            let dpOffsetHeight = document.getElementById('dprecommend')
            let plOffsetHeight = document.getElementById('plcomment')
            // 获取两个顶部
            let maintop = document.getElementById('mainTop')
            let deNav = document.getElementById('deNav')
            // 获取li
            let navactive = document.querySelectorAll('.skin-topNav-proListItem')
            // 获取滚动距离
            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
            // 元素距离dom顶部的距离
            let deOffsetHeight1 = deOffsetHeight.offsetTop
            let dpOffsetHeight1 = dpOffsetHeight.offsetTop
            let plOffsetHeight1 = plOffsetHeight.offsetTop
            // 两个顶部的show
            let OffsetHeightTop1 = deOffsetHeight1 - scrolltop
            if (OffsetHeightTop1 <= 135) {
                maintop.style.display = 'none'
                deNav.style.display = 'block'
                navactive[0].classList.add('isActive')
            } else {
                maintop.style.display = 'block'
                deNav.style.display = 'none'
                navactive[0].classList.remove('isActive')
            }
            // 猜你喜欢以及搭配
            let OffsetHeightTop2 = dpOffsetHeight1 - scrolltop
            if (OffsetHeightTop2 <= 135) {
                navactive[0].classList.remove('isActive')
                navactive[1].classList.add('isActive')
            } else {
                navactive[1].classList.remove('isActive')
            }
            // 评论
            let OffsetHeightTop3 = plOffsetHeight1 - scrolltop
            if (OffsetHeightTop3 <= 135) {
                navactive[1].classList.remove('isActive')
                navactive[3].classList.add('isActive')
            } else {
                navactive[3].classList.remove('isActive')
            }
        },
        // 点击页内跳转
        scrollToAnchor (anchorName) {
            if (anchorName) {
                // 找到锚点
                let anchorElement = document.querySelector(anchorName)
                // 如果对应的id锚点存在就跳转
                if (anchorElement) {
                    // block:"start" 相当于true，block:"end" 相当于false
                    // behavior: auto,instant立即直接跳转到所在锚点
                    // smooth平滑过渡到所在锚点
                    anchorElement.scrollIntoView({
                        block: 'start',
                        behavior: 'smooth'
                    })
                }
            }
        },
        // 获取选择的数量value
        selectgetvalue (value) {
            this.selectValue = value
        },
        // 点击加入购物袋
        addToshop () {
            // 把获得的数量赋值
            this.degoodslists.g_num = this.selectValue || 1
            this.$store.commit('addselectlist', this.degoodslists)
        }
    },
    mounted () {
        // 描述功效切换
        this.changeDescCont()
        // 执行左右轮播滑动效果方法
        this.initSwiper1()
        this.initSwiper2()
        // 获取id对应的数据
        this.getdegoods()
        console.log(this.degoodslists)
        // 猜你喜欢商品
        this.getlikegoods()
        // 屏幕滚动事件
        window.addEventListener('scroll', this.getDomHeight)
        // 详情导航栏点击事件
        let navactivelist = document.querySelectorAll('.skin-topNav-proListItem')
        for (let i = 0; i < navactivelist.length; i++) {
            navactivelist[i].onclick = () => {
                navactivelist[i].classList.add('isActive')
                let par = navactivelist[i].parentNode.children
                for (let j = 0; j < par.length; j++) {
                    if (par[j] != navactivelist[i]) {
                        par[j].classList.remove('isActive')
                    }
                }
            }
        }
    },
    watch: {
        // 监听地址栏的变化
        $route (to, from) {
            this.urlId = to.query.id
            this.getdegoods()
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../css/button.less";
@import "./css/de_public.less";
@import "./css/detail.less";
@import "./css/detail_media.less";
</style>
