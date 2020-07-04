<!-- 用户中心 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <div class="container">
            <div v-show="isEdit" class="tcommonBox">
                <header>
                    <h1>
                            编辑个人资料
                    </h1>
                </header>
                <section>
                    <ul class="userInfoBox">
                         
                        <li class="username">
                            <span class="leftTitle">昵称</span>
                            <el-input v-model="userInfo.staffName" placeholder="昵称"></el-input> <i  class="fa fa-wa fa-asterisk"></i>
                        </li> 
                         <li class="username">
                            <span class="leftTitle">电话号码</span>
                            <el-input v-model="userInfo.phone" placeholder="电话号码"></el-input> <i  class="fa fa-wa fa-asterisk"></i>
                        </li> 
                        <li>
                            <span class="leftTitle">性别</span>
                            <template>
                              <el-radio class="radio" v-model="userInfo.sex" label="0">男</el-radio>
                              <el-radio class="radio" v-model="userInfo.sex" label="1">女</el-radio>
                            </template>
                        </li>
                        <li>
                            <span class="leftTitle">个性标签</span>
                            <template>
                                <el-radio-group v-model="userInfo.label">
                                   <el-radio v-for="(item,index) in usertab" :key="'usertab'+index" :label="item" >{{item}}</el-radio>
                               </el-radio-group>
                            </template>
                        </li>
                    </ul>
                    <div class=" saveInfobtn">
                        <a class="tcolors-bg"  href="javascript:void(0);" @click="isEdit=!isEdit">返 回</a>
                        <a class="tcolors-bg" href="javascript:void(0);" @click="saveInfoFun">保 存</a>
                    </div>
                </section>
            </div>
            <div v-show="!isEdit" class="tcommonBox">
                <header>
                    <h1>
                            个人中心
                        <span class="gotoEdit" @click="isEdit=!isEdit"><i class="fa fa-wa fa-edit"></i>编辑</span>
                    </h1>

                </header>
                <section>
                    <ul class="userInfoBox">
                         
                        <li class="username">
                            <span class="leftTitle">昵称</span>
                            <span>{{userInfo.staffName }}</span>

                        </li>
                            
                        <li class="username">
                            <span class="leftTitle">电话号码</span>
                            <span>{{userInfo.phone }}</span>

                        </li>
                        
                        <li>
                            <span class="leftTitle">性别</span>
                            <span>{{userInfo.sex==0?'男':'女'}}</span>
                        </li>
                        <li>
                            <span class="leftTitle">个性标签</span>
                            <span>{{userInfo.label?userInfo.label:"未设置"}}</span>
                        </li>
                        
                         
                    </ul>

                </section>
            </div>
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import {getUserInfo,UserInfoSave} from '../utils/server.js'//获取用户信息，保存用户信息
    export default {
        name: 'UserInfo',
        data() { //选项 / 数据
            return {
                isEdit: false,
                userInfo:'',//本地存储的用户信
                userInfoObj:'',//用户的信息
                state:true, //是否展示友链开关
                usertabChosed:'天然呆',
                usertab:[//用户标签
                    "天然呆",
                    "小萌新",
                    "学霸",
                    "萌萌哒",
                    "技术宅",
                    "忠实粉"
                ],
                wwwHost:"http://"+window.location.host,//图片域名
            }
        },
        methods: { //事件处理
            saveInfoFun: function(){//保存编辑的用户信息
                var that = this;

                if(!that.userInfoObj.username){ //昵称为必填
                     that.$message.error('昵称为必填项，请填写昵称');
                     return;
                }
              
                UserInfoSave(that.userInfoObj,function(result){//保存信息接口，返回展示页
                    that.$message.success( '保存成功！');
                    that.isEdit = false;
                    that.routeChange() ;
                })

            },
            routeChange: function(){//展示页面信息
                var that = this;
                // console.log(this.$router,this.$route);
                if(localStorage.getItem('userInfo')){
                    that.haslogin = true;
                    that.userInfo = JSON.parse(localStorage.getItem('userInfo')); 
                    console.log(that.userInfo)
                }else{
                    that.haslogin = false;
                }

            }
        },
        components: { //定义组件
            'wbc-nav':header,
            'wbc-footer':footer
        },
        watch: {
           // 如果路由有变化，会再次执行该方法
           '$route':'routeChange'
         },
        created() { //生命周期函数
            this.routeChange();
        }
    }
</script>

<style>
.userInfoBox .avatarlist{
    position: relative;
}

.avatar-uploader {
    display: inline-block;
    vertical-align: top;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 120px;
    height: 120px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    position: absolute;
    top:0;
    left:0;
  }
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: block;
    object-fit: cover;
  }
.gotoEdit{
    font-size: 15px;
    float:right;
    cursor: pointer;
    color:#999;
}
.gotoEdit:hover {
    color:#333;
}
/*个人设置*/
.userInfoBox .leftTitle{
    display: inline-block;
    width:100px;
    padding: 10px 0;
}
.userInfoBox .rightInner{
    display: inline-block;
    max-width: calc(100% - 140px);
    vertical-align: top;
}
.userInfoBox li{
    padding:20px;
    border-bottom: 1px solid #ddd;
}
.userInfoBox li:last-child{
    border-bottom: 1px solid transparent;
}
.userInfoBox  .el-input,.userInfoBox  .el-textarea{
    max-width:300px;
    min-width: 100px;
}

.userInfoBox .el-input__inner{
    border-radius: 4px;
}
.userInfoBox  .el-textarea{
    vertical-align: top;
}
.saveInfobtn{
    margin: 20px 0;
    text-align: center;
}
.saveInfobtn a{
    color:#fff;
    padding:6px 20px;
    margin:5px 10px;
    border-radius: 5px;
    font-size: 14px;
}
.userInfoBox .fa-asterisk{
    color: #DF2050;
}
</style>
