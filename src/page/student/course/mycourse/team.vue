<template>
	<div class="team" v-loading="loading">
        <el-dialog :visible.sync="state" width="70%" :before-close="handleClose">
			<span slot="title" class="teamTitle">
				<h3>我的小组</h3>
			</span>
			<div class="group">
				<ul>
					<li v-for="(item, index) in data" :key="index">
						<h4>09级2班 03组</h4>
						<div class="teamMain">
							<div class="teamBlock" v-for="(item,index) in data" :key="index">
								<div class="teamAvatar">
									<img :src="head" />
									<span>欧阳娜娜</span>
								</div>
								<div class="teamText">
									优势01 | 优势02 | 优势03
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
        </el-dialog>
	</div>
</template>

<script>
import head from 'assets/images/head.png'
export default {
    name: "team",
    props:['state'],
	components: {
		
	},
	data() {
		return {
            loading: true,
			head,
			data: [1,2,3,4,5,6,7],
		};
	},
	created() {
		let _this = this;
		setTimeout(() => {
			_this.loading = false;
		}, 1000);
	},
	methods: {
        handleClose() {
            this.$emit('close');
        }
    }
};
</script>

<style lang="scss" scoped>
.team {
	.teamTitle {
		font-size:16px;
		font-weight:bold;
		color:rgba(51,51,51,1);
		position: relative;
		text-indent: 15px;
		h3 {
			font-weight: bold;
			&:after {
				content: '';
				display: block;
				width: 4px;
				height: 16px;
				background-color: #F79727;
				border-radius: 2px;
				position: absolute;
				left: 0;
				top: 0;
			}
		}
	}
	.group {
		overflow-x: scroll;
		overflow-y: scroll;
		ul{
			display: flex;
			justify-content: flex-start;
			flex-wrap: nowrap;
			height: 646px;
			width: 1100px;
		}
		li {
			border: #E4E8ED 1px solid;
			width: 332px;
			display: inline-block;
			margin-right: 15px;
			&:last-child {
				margin-right: 0
			}
			h4 {
				background:rgba(245,246,248,1);
				color: #333;
				font-size: 14px;
				padding: 20px;
			}
			.teamMain {
				margin: 15px 10px 0 15px;
				max-height: 520px;
				overflow-y: scroll;
			}
			.teamBlock {
				margin-bottom: 10px;
				display: flex;
			}
			.teamAvatar {
				flex: 1;
				max-width: 80px;
				img { width: 50px; height: 50px; border-radius: 100%}
				span {
					color: #333;
					font-size: 14px;
					display: block;
					margin-top: 10px;
					font-weight: bold;
				}
			}
			.teamText {
				flex: 1;
				width: 230px;
				font-size:12px;
				font-family:ArialMT;
				color:#999;
				line-height:20px;
			}
			&:hover {
				h4 {
					background: #FFF3E5;
					color: #333;
					font-weight: bold;
				}
			}
		}
	}
}
</style>
