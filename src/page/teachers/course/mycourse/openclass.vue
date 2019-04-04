<template>
 <el-dialog
 	class="open-class-dialog"
  :visible.sync="showClass"
  width="496px">
  <div class="header-wraper" slot="title">
    <div class="title">班级列表</div>
    <el-input placeholder="搜索班级" class="search-box" v-model="className" suffix-icon="el-icon-search"></el-input>
  </div>
  <ul class="class-list">
    <li
      v-for="(item, index) in classList"
      :key="index"
      class="class-item">
      <span class="class-item__title">{{item.className}}</span>
      <span
        class="class-item__btn"
        :class="{'is-inclass': item.isInclass}"
        @click="handleClassBegin(item)">
        <img :src="item.isInclass ? inclass : beginClass"/>
      </span>
    </li>
  </ul>
  <div class="page-btn">
    <span class="prev-btn" @click="goPage(-1)">上一页</span>
    <span class="next-btn" @click="goPage(1)">下一页</span>
  </div>
</el-dialog>
</template>
<script>
import beginClass from 'assets/images/icon/begin-class.png'
import inclass from 'assets/images/icon/inclass.png'
 export default {
 	name: 'OpenClass',
 	props: {
 	},
 	data() {
 		return {
 			beginClass,
 			inclass,
 			allData: [],
 			showClass: false,
 			className: '',
 			currentPage: 1,
 			pageSize: 7,
 			total: '',
 			classList: []
 		}
 	},
 	created () {
 		this.getClassList()
 	},
 	methods: {
 		show() {
 			this.showClass = true;
 			this.currentPage = 1
 		},
 		handleClassBegin(classItem) {
 			if (classItem.isInclass) {
 				return
 			}
 			let index = this.classList.findIndex(item => item.id === classItem.id)
 			this.classList[index].isInclass = true;
 		},
 		goPage(num) {
      if (num === 1) {
      	if (this.currentPage < this.total) {
      		this.currentPage += 1
      	}
      } else {
      	if(this.currentPage > 1) {
           this.currentPage -= 1
      	}
      }
 		},
 		getCurrenPageData() {
 			console.log((this.currentPage - 1) * this.pageSize, this.pageSize)
 			let index = (this.currentPage - 1) * this.pageSize
 			this.classList = this.allData.slice(index, this.pageSize + index)
 		},
 		getClassList() {
 			let arr = [{
 				id: '1111',
 				className: '高三英语七班',
 				isInclass: true
 			},
 			{ 
 				id: 'w222222',
 				className: '高三数学一班',
 				isInclass: false
 			},
 			{
 				id: '22455',
 				className: '高三物理五班',
 				isInclass: false
 			},
 			{
 				id: '55555',
 				className: '高一美术五班',
 				isInclass: false
 			},
 			{
 				id: '784554',
 				className: '高二物理化学',
 				isInclass: false
 			},
 			{
 				id: '566666',
 				className: '高二物理化学',
 				isInclass: true
 			},
 			{
 				id: '9787867',
 				className: '高二物理化学',
 				isInclass: false
 			},
 			{
 				id: '66686878',
 				className: '高二语文化学',
 				isInclass: false
 			},]
 			this.allData = arr;
 			this.total = Math.ceil(this.allData.length/this.pageSize);
 			this.getCurrenPageData()
 		}
 	},
 	watch: {
 		currentPage(val){
 			this.getCurrenPageData()
 		}
 	}
 }
</script>
<style lang="scss" >
.open-class-dialog {
	.el-dialog__header {
		padding: 11px 22px 0;
		.header-wraper {
			height: 50px;
			box-sizing: border-box;
			padding-bottom: 11px;
			border-bottom: 1px solid rgba(228,232,237,1);
			.title {
        height:16px;
        font-size:16px;
        font-weight:bold;
        margin-left: 36px;
        color:rgba(51,51,51,1);
        display: inline-block;
        vertical-align: middle;
	    }
      .search-box {
      	display: inline-block;
      	margin-left: 28px;
      	width: 285px;
      	.el-input__inner {
      		width:285px;
          height:38px;
          background:rgba(238,238,238,1);
          border-radius: 19px; 
          border: none;
          padding-left: 31px;
          padding-right: 45px;
      	}
      	.el-input__suffix {
      		right: 22px;
      	  .el-icon-search {
      	  	font-size: 16px;
      	  }
      	}
      }
		}
	}

  .el-dialog__body {
  	padding: 16px 58px;
  	.class-list {
  		border:1px solid rgba(245,246,247,1);
  		.class-item {
  			height: 50px;
  			line-height: 50px;
  			padding: 0 47px 0 49px;
  			.class-item__title {
  				font-size: 16px;
  				font-weight: bold;
  				color:#333;
  				float: left;
  			}
  			.class-item__btn {
  				float: right;
  				width: 112px;
  				height: 32px;
  				line-height: 32px;
  				color: #fff;
  				font-size: 16px;
  				text-align:center;
  				background-color: #F79727;
  				border-radius: 4px;
  				margin-top: 9px;
  				cursor: pointer;
  				font-size: 0;
  			}
  			.class-item__btn.is-inclass {
  				background-color: #DBDBDB;
  				color: #fff;
  			}
  		}
  		.class-item:nth-child(even) {
  			background: #fff;
  		}
  		.class-item:nth-child(odd) {
  			background: #F5F6F7;
  		}
  	}
  	.page-btn {
      padding: 20px 0 10px;
      text-align: center;
      font-size: 0;
      .prev-btn,
      .next-btn {
      	display: inline-block;
        width:170px;
        height: 44px;
        line-height: 42px;
        box-sizing: border-box;
        border: 1px solid #FFB726;
        border-radius:4px;
        font-size:16px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
      }
      .prev-btn {
      	background: #fff;
      	color: #FF8126;
      }

      .next-btn {
      	color: #fff;
      	margin-left: 20px;
      	background:linear-gradient(-90deg,rgba(255,183,38,1),rgba(255,129,38,1));
      }
  	}
  }
}
</style>