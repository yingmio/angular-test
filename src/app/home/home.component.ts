/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-31 16:35:41
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-10-28 11:25:16
 */
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";
// import { environment } from './../../environments/environment';
// import { API } from './../../apis/index';
// import { CommonService } from '../../services/common.service';
// import { HttpPService } from '../../services/http-p.service';
// import { AuthService } from 'src/services/auth.service';
// import data from '../../assets/config/home-page';

var menuData = [
  {
    mainTitle: "丰石内部系统",
    subTitle: "",
    icon: "icon_m_sel.png",
    routerLink: "",
    pic: "",
    describe: "",
    isLeaf: false,
    children: [
      {
        mainTitle: "网络质量",
        subTitle: "",
        icon: "icon_m_sel.png",
        routerLink: "",
        pic: "",
        describe: "网络质量",
        isLeaf: false,
        children: [
          {
            mainTitle: "移动网络",
            subTitle: "性能分析平台",
            icon: "icon_g_sel.png",
            routerLink: "http://192.168.108.24:31019/mintaka/portal/#/index",
            pic: "",
            describe: "移动网络性能分析",
            isLeaf: true
          }
        ]
      },
      {
        mainTitle: "客流",
        subTitle: "",
        icon: "icon_a_sel.png",
        routerLink: "",
        pic: "",
        describe: "客流",
        isLeaf: false,
        children: [
          {
            mainTitle: "Nile",
            subTitle: "客流热力图",
            icon: "icon_a_sel.png",
            routerLink: "http://192.168.16.100:30777/nile-heatmap-fe/#/login",
            pic: "",
            describe: "Nile客流热力图",
            isLeaf: true
          }
        ]
      },
      {
        mainTitle: "营销",
        subTitle: "",
        icon: "icon_a_sel.png",
        routerLink: "",
        pic: "",
        describe: "营销",
        isLeaf: true
      },
      {
        mainTitle: "基础运维",
        subTitle: "",
        icon: "icon_m_sel.png",
        routerLink: "",
        pic: "",
        describe: "基础运维",
        isLeaf: false,
        children: [
          {
            mainTitle: "Mintaka",
            subTitle: "大数据Hadoop平台V2.0",
            icon: "icon_m_sel.png",
            routerLink: "http://192.168.108.24:31896/mintaka/portal/#/home",
            pic: "",
            describe: "Mintaka大数据Hadoop平台V2.0",
            isLeaf: true
          },
          {
            mainTitle: "Mintaka",
            subTitle: "大数据Hadoop平台V3.0",
            icon: "icon_m_sel.png",
            routerLink: "http://192.168.108.24:31019/mintaka/portal/#/home",
            pic: "",
            describe: "Mintaka大数据Hadoop平台V3.0",
            isLeaf: true
          }
        ]
      }
    ]
  }
];
@Component({
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  title;
  isChooseHadoopVisible = false;
  rows;
  menuData = menuData[0].children;
  describe;
  breadcrumbTitle = [];
  @ViewChild("myCarousel", { static: true }) myCarousel;

  iconWidth;
  iconHeight;
  constructor() // private http: HttpPService,
  // private common: CommonService,
  // private authService: AuthService
  {}
  slidesData = [
    "./assets/images/index/home-banner.png",
    "./assets/images/index/about.png"
  ]; // 轮播图数据
  username = localStorage.getItem("username");

  ngOnInit() {
    this.iconWidth = 100 + "px";
    this.iconHeight = 52 + "px";
    this.breadcrumbTitle.push(menuData[0].mainTitle + menuData[0].subTitle);
    this.rows = Math.ceil(menuData[0].children.length / 3);
    if (!localStorage.getItem("userId")) {
      // window.location.href = environment.garnetOthersLoginUrl;
    }
  }

  ngAfterViewInit() {}

  // 退出登录
  async logout() {
    // await this.http.request(`${environment.garnetApiUrl}${API.logout}`, 'Post', { responseType: 'json' });
    // localStorage.clear();
    // this.common.setCookie('token', '', -1);
    // window.location.href = environment.garnetOthersLoginUrl + '?logout=true';
  }

  change(direction) {
    if (direction) {
      // 下一页
      this.myCarousel.next();
    } else {
      // 上一页
      this.myCarousel.pre();
    }
  }

  showChooseHadoop() {
    this.isChooseHadoopVisible = true;
  }

  handleChooseHadoopCancel() {
    this.isChooseHadoopVisible = false;
  }

  linkTo(menuItem) {
    if (menuItem.isLeaf) {
      window.open(menuItem.routerLink);
    } else {
      this.menuData = menuItem.children;
      this.rows = Math.ceil(this.menuData.length / 3);
      this.breadcrumbTitle.push(menuItem.mainTitle + menuItem.subTitle);
      console.log(this.menuData);
      console.log(this.breadcrumbTitle);
    }
    // switch (type) {
    //   case 'hadoop':
    //     window.open('http://192.168.16.64:7180/cmf/home');
    //     break;
    //   case 'Nile':
    //     window.open('http://192.168.16.100:30777/nile-heatmap-fe/#/workspace');
    //     break;
    //   case 'Alnitak':
    //     window.open('http://192.168.108.45:3000');
    //     break;
    //   case 'Mintaka':
    //     window.open('http://192.168.108.45:18081/esendatagovernace/');
    //     break;
    //   case 'SuperSet':
    //     window.open('http://192.168.108.54:8088/');
    //     break;
    // }
  }

  changePage(title, index) {
    this.breadcrumbTitle = this.breadcrumbTitle.slice(0, index + 1);
    console.log("this.breadcrumbTitle", this.breadcrumbTitle);
    this.searchMenu(menuData, title);
  }

  show(e, data) {
    e.path[0].children[0].style.width = "120px";
    this.iconWidth = 120 + "px";
    this.describe = data.describe;
    console.log("data.describe", data.describe);
  }

  hide(e, data) {
    e.path[0].children[0].style.width = "100px";
    // e.relatedTarget.children[0].children[0].style.width = 100;
    this.iconWidth = 100 + "px";
    // console.log(e);
  }

  searchMenu(tree, title) {
    console.log(tree);
    console.log(tree.length);
    console.log(title);
    for (let i = 0; i < tree.length; i++) {
      console.log(tree[i].mainTitle + tree[i].subTitle);
      if (tree[i].mainTitle + tree[i].subTitle === title) {
        this.menuData = tree[i].children;
        this.rows = Math.ceil(this.menuData.length / 3);
        break;
        return;
      } else {
        if (!tree[i].isLeaf) {
          this.searchMenu(tree[i].children, title);
        }
      }
    }
  }
}
