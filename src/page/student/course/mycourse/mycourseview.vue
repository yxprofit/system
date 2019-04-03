<template>
	<div class="mycourseview" v-loading="loading">
		<breadcrumb />

		<div class="view">
			<div class="des">
				<el-row>
					<el-col :span="24">
						<el-row :gutter="30">
							<el-col :span="6">
								<div class="workimg">
									<img width="188" height="198" :src="workimg" />
								</div>
							</el-col>
							<el-col :span="18">
								<div class="workdes">
									<h3>外教1对11英语课程 口语轻松说</h3>
									<p>
										{{fitlerdes()}}
										<var v-if="!desState" @click="()=>{this.desState = true}">查看详情</var>
									</p>
									<div>
										<span>开始时间： 2019.01.01</span>
										<span>结束时间： 2019.06.30</span>
									</div>
								</div>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</div>
			<div class="workList">
				<el-row :gutter="10">
					<el-col :span="12">
						<div class="li nowork">
							<h4>第1课时：课时名称课时名称课时名称课时名称</h4>
							<div class="icon_no">
								<div>
									<i></i>
									<span>已禁用控件</span>
								</div>
							</div>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="li">
							<h4>相关任务</h4>
							<div class="tasks">
								<ul>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li1">完成当前课时测试内容</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span>去完成 ></span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li2">完成当前课时问卷调查</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span>去完成 ></span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li3">完成作品上传</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span class="active">去完成</span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li3">完成作品上传</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span class="active">去完成</span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li3">完成作品上传</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span class="active">去完成</span>
											</el-col>
										</el-row>
									</li>
								</ul>
							</div>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10" v-for="(item, index) in data" :key="item">
					<el-col :span="12">
						<div class="li">
							<h4>第{{index + 2}}课时：课时名称课时名称课时名称课时名称</h4>
							<div class="workdes">
								<span>课件名称课件名称课件名称课件名称01</span>
								<router-link to="/courseware" tag="var">查看课件 ></router-link>
							</div>
							<div class="myteam">
								<span class="i">我的小组</span>
								<span @click="changeTeam">查看 ></span>
							</div>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="li">
							<h4>相关任务</h4>
							<div class="tasks">
								<ul>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li1">完成当前课时测试内容</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span>去完成 ></span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li2">完成当前课时问卷调查</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span>去完成 ></span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li3">完成作品上传</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span class="active">去完成</span>
											</el-col>
										</el-row>
									</li>
								</ul>
								<div class="tasksall">查看全部
									<i>》</i>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>

		<team :state="teamShow" v-on:close="changeTeam" />
	</div>
</template>

<script>
import breadcrumb from '@/components/common/breadcrumb.vue'
import team from './team.vue'
import breadcrumb_address from 'assets/images/student/breadcrumb_address.png'
import workimg from 'assets/images/student/workimg.png'

export default {
	name: "MyCourseView",
	components: {
		breadcrumb,
		team
	},
	data() {
		return {
			loading: true,
			workimg,
			teamShow: false,
			data: [1, 2, 3, 4, 5, 6, 7],
			desState: false
		};
	},
	created() {
		let _this = this;
		setTimeout(() => {
			_this.loading = false;
		}, 1000);
	},
	methods: {
		changeTeam() {
			this.teamShow = !this.teamShow;
		},
		fitlerdes() {
			let text = '外教英语培训班 , 外教英语培训班 , 每天45分钟 , 随时纠正 , 学英语上TutorABC , 随时随地对话全球外教 , 生活,职场，外教英语培训班 , 外教英语培训班 , 每天45分钟 , 随时纠正 , 学英语上TutorABC，外教英语培训班 , 外教英语培训班 , 每天45分';
			return this.desState ? text : text.slice(0, 133) + '...'
		},
	}
};
</script>

<style lang="scss" scoped>
.mycourseview {
  height: calc(100% - 10px);
  .view {
    margin-top: 15px;
		height: calc(100% - 29px);
		overflow: auto;
    .des,
    .li {
      margin: 0;
      background: #fff;
      border: 1px solid rgba(228, 232, 237, 1);
      border-radius: 5px;
      padding: 20px 10px;
      margin-bottom: 10px;
    }
    .workimg {
      width: 188px;
      height: 198px;
      margin: 0 auto;
    }
    .workdes {
      margin-right: 20px;
      h3 {
        font-size: 20px;
        color: rgba(51, 51, 51, 1);
        margin-top: 15px;
      }
      p {
        font-size: 14px;
        color: rgba(136, 136, 136, 1);
        line-height: 24px;
        margin-top: 25px;
        var {
          color: #f79727;
          cursor: pointer;
          margin-top: 10px;
        }
      }
      div {
        background: rgba(245, 246, 247, 1);
        border-radius: 2px;
        padding: 5px 10px;
        margin-top: 15px;
        span {
          display: block;
          color: rgba(51, 51, 51, 0.8);
          margin: 10px 0 10px 13px;
          font-size: 14px;
          line-height: 20px;
          text-indent: 9px;
          position: relative;
          &:after {
            content: "";
            display: block;
            width: 4px;
            height: 4px;
            background-color: #f79727;
            position: absolute;
            left: 0;
            top: 7px;
          }
        }
      }
      var {
        cursor: pointer;
      }
    }

    //
    .workList {
      height: 360px;
      .li {
        padding: 15px;
      }
      h4 {
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        text-indent: 15px;
        position: relative;
        margin-bottom: 20px;
        font-weight: bold;
        &:after {
          content: "";
          display: block;
          width: 5px;
          height: 5px;
          background-color: #f79727;
          border-radius: 100%;
          position: absolute;
          left: 0;
          top: 6px;
        }
      }
      .workdes {
        background: rgba(255, 248, 240, 1);
        padding: 20px;
        border-radius: 3px;
        width: 100%;
        span {
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          display: block;
          text-indent: 25px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAIAAACpTQvdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQTU0QUU3RDUwNzMxMUU5OUZDQUM0RTFBODkyNENCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQTU0QUU3RTUwNzMxMUU5OUZDQUM0RTFBODkyNENCMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNTRBRTdCNTA3MzExRTk5RkNBQzRFMUE4OTI0Q0IzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBBNTRBRTdDNTA3MzExRTk5RkNBQzRFMUE4OTI0Q0IzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+F0AhiQAAAK1JREFUeNpi/H2s88/lxQz/fjOAASO3GJvrBEZBZQZc4Pss3b+3t/7/8QGC/j7Y/2OF17/XV+AiaIiF4e8vJllruH4mCUNW09xf29L/f3uDZjSjgBKbYysLpp1M0pbs4Vsxxf89OfbrYB0TA9GAScbq/7vbIBt+zDcnXhtIA0fiSSJVA40mwUlQhw0LDcxs/x4dIkYpMOKAihl/H+/6c2khw78/RBjOwqIbCxBgAC7BV5pZEouKAAAAAElFTkSuQmCC) no-repeat;
        }
        var {
          font-size: 14px;
          color: rgba(153, 153, 153, 1);
          margin-top: 25px;
          display: inline-block;
        }
      }
      .myteam {
        margin: 25px 0 5px 0;
        overflow: hidden;
        cursor: pointer;
        span {
          font-size: 14px;
          color: rgba(102, 102, 102, 1);
          float: left;
          &:last-child {
            color: rgba(153, 153, 153, 1);
            float: right;
          }
          &.i {
            text-indent: 25px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAIAAACpTQvdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRTgxNzVBMTUwNzMxMUU5QTVGMEJBMURFRkJBNDgyMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRTgxNzVBMjUwNzMxMUU5QTVGMEJBMURFRkJBNDgyMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFFODE3NTlGNTA3MzExRTlBNUYwQkExREVGQkE0ODIwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFFODE3NUEwNTA3MzExRTlBNUYwQkExREVGQkE0ODIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YtvelwAAAcNJREFUeNp8kbvLgXEUxz2PWy65pSySopSISa9kUnZKshkMRgNZDMpsNFjEgEFK2QyIMhmQcskf4FKSkFue98uDt7f38l2ec37P7/M753sOQVEU46X1ek2SpEQiabfb9Xp9uVxKpVKbzeZ0OplMJn2HoIHj8VgoFAaDgcPhuFwu4/HY6/WqVKrValUul1ksVjAYJAjiTlAPZbPZdDp9Pp/n83k4HN7v99RL4BOJRL/fp1MSzPV67Xa7Pp+PzWaPRiOTycTn89994nmLxTIcDun0DhwOB6BCofB5RJKM74KB2+32BYhEIrFYPJ1OEWu1Wjg5nU7v27iK+jqd7gnH43F85HJ5Lpfj8XhKpXKz2TSbTY1GIxAIttttPp+HN7fbTZt+TqnT6ZRKJQAfDyWTSWBI8ddqtbpcLi6X+zXWSqXS6/X8fr9arW40GtVq1W63m81mlIUx+mH4BH+PMZZoNIrSILGsWCyGfVE/lMlkisXivZ1UKtVqtRBhzaFQaLFYUL9pt9tFIhEMhgn7Ho8H5Wq1GnpAx4zfxOFwMG50Tur1eowVR7PZzGg0Mv6WwWCYTCasQCBA56irUCj+AWQyGTb4KcAA2uYQSPDBr6UAAAAASUVORK5CYII=) no-repeat;
          }
        }
      }

      .tasks {
        border-top: #e4e8ed 1px solid;
        margin: 0 -15px;
        ul {
          margin: 10px 10px 0 10px;
        }
        li {
          padding: 10px 20px;
          cursor: pointer;
          a {
            color: #666666;
          }
          &:hover {
            background: #f5f6f7;
            a {
              color: #f79727;
            }
          }
          .active {
            color: #999;
          }
          .el-col-6 {
            text-align: right;
          }
          small {
            color: #888;
            font-size: 12px;
          }
          .li1 {
            text-indent: 25px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOTMwNzRENTUwNzMxMUU5QjI1MTk5MkFGNjhCMjExMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOTMwNzRENjUwNzMxMUU5QjI1MTk5MkFGNjhCMjExMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5MzA3NEQzNTA3MzExRTlCMjUxOTkyQUY2OEIyMTEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5MzA3NEQ0NTA3MzExRTlCMjUxOTkyQUY2OEIyMTEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hRP+lwAAAWxJREFUeNqEUk2LglAU9ekLKlpF0aYSWkT9hHbWpg/6kVr0DySwiFq0FHfiyoISCq1dFJRoZ8aZmnljzVn5jufed869j4RhyL3Gfr+fz+fX67XRaFSrVTD0jXq3202nU0mSMpnMeDwOgqBWq9E3ak3TeJ5Pp9PZbLbf76uqSinlwjhALcvyer22bVtRFM/zQB4Oh8FgQGN9ozeciKIYMfDT6/VOp1MikSBM6EjdbDbL5fKDXK1Wy+WSENLpdCijnkwmrVarVCr95JPJJMK02+18Pv/MADUsbjYbJo/jOMPh0HXd6Mg91GC3222sOgr9LPB9H6MwDINRo55RAzws4kcqlbIsC/0evvG9WCyQMpfL/RoiimazmWma6DQajSJXSPK395el2+2GHV0uFxyiGl3XkT5W/WEJLTEsDO58PiM6lo/but0u6+QbBM/L/8TxeMRqK5VKsVjE1F+9MYqrC4VCvV6HThAE7j/cBRgAjg9yxhKnJzkAAAAASUVORK5CYII=) no-repeat;
          }
          .li2 {
            text-indent: 25px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NzA3MDhFOTUwNzMxMUU5OUU0QUVFQkQ1Q0M5NEU2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NzA3MDhFQTUwNzMxMUU5OUU0QUVFQkQ1Q0M5NEU2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3MDcwOEU3NTA3MzExRTk5RTRBRUVCRDVDQzk0RTY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ3MDcwOEU4NTA3MzExRTk5RTRBRUVCRDVDQzk0RTY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fBHV6gAAAV5JREFUeNqUUkuLglAUTr3YpFIUJLmqhWEQQUvJXYIQSNs2+QNbCbUQXLiMdu0C92W0VFDKXnOmO/iYkZg5i3u/8/gO3zn3Es/nc7VaHY/H0h9MEAQEF1RPJpNarfa+2vd9y7IQdliWrVar7wm32w1OsvRPQwm6XC6LxQJGyqYlSZJlOVEhimJKKJfLuq4/Ho8sgeM4UOK6bhRFrVZrPB6jbLrRaPzWbZomQRDNZtNxnMFggLK57XabSKrX691u1/M8iM9mM5Ik2+32er1OCdDmer3e73fsYsDzvKqqUP21n9eZEiiKGo1GPyR9vAxAHMebzabX6+VmCIIAEhhXKhVYC8ag07ZtYA6Hw5QA0eVyCdvALuxkOp1ivN/vT6eTYRigKjfDfD4vfKzz+cwwDE3TuRneWKfTSX7aNyEMQ4QKyKAbGkMqRwC58A0Le/f7fUVRDofDbrfTNA0inwIMAEOyg7t+vvmnAAAAAElFTkSuQmCC) no-repeat;
          }
          .li3 {
            text-indent: 25px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MTZERDA0MTUwNzMxMUU5QTE3N0JENTI3MjcxOTNBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MTZERDA0MjUwNzMxMUU5QTE3N0JENTI3MjcxOTNBQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUxNkREMDNGNTA3MzExRTlBMTc3QkQ1MjcyNzE5M0FDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUxNkREMDQwNTA3MzExRTlBMTc3QkQ1MjcyNzE5M0FDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+l1GyIgAAARlJREFUeNqUUrGORFAURTYaH6AQySYKzSYShUZEswqJxu/xC6LRScTQUZEoVUp0QhDs3mFizW52xpzi5d7zzsk994HGcZym6bIsyDNgGMZxHGIYxjAMXycAMtM0MahwHEdOAGQQ5G3vi6IIwxAKWZZpmv432F4FQfC5AopHmxwbiPfruu/7tm2P/E8kSZI8z4M7iARtXddRFFVVBdGnaWJZluf5O8P7im1OkiRZlgmCoKoqvCYMAcayrJsBdgd2s3Vd5/s+MLquEwSxkVCIokhRlOu6V53jOGVZzvOc57lt2yRJapq2q48RbhMYhrlcLk3TgFRRFDgfvNLV8LECOQcMRdFxHM9IQQaroq/+fOjfj/XEhryIbwEGAEkdrqAf7cZyAAAAAElFTkSuQmCC) no-repeat;
          }
        }
        .tasksall {
          text-align: center;
          color: #f79727;
          margin-top: 10px;
          i {
            transform: rotate(90deg);
            display: inline-block;
            margin: 3px 0 0 5px;
            vertical-align: middle;
          }
        }
      }

      .nowork {
        height: 250px;
        position: relative;
        h4 {
          color: #333;
        }
        .icon_no {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 5px;
          div {
            width: 75px;
            margin: 100px auto 0;
          }
          i {
            height: 46px;
            width: 46px;
            border: #ccc 3px solid;
            border-radius: 100%;
            display: inline-block;
            position: relative;
            &:before {
              content: "";
              position: absolute;
              top: 52%;
              background: #ccc;
              width: 105%;
              height: 3px;
              transform: rotate(-30deg);
            }
          }
          span {
            color: #ccc;
            font-weight: bold;
            display: block;
            margin: 10px 0 0 -10px;
          }
        }
      }
    }
  }
}
</style>
