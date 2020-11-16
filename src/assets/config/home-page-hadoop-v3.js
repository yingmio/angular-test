export default {
  menuData: [
    {
      mainTitle: "Mintaka",
      subTitle: "大数据Hadoop平台V3.0",
      icon: "icon_m_sel.png",
      routerLink: "",
      pic: "",
      describe: "Mintaka大数据Hadoop平台V3.0",
      isLeaf: false,
      children: [
        {
          mainTitle: "移动网络",
          subTitle: "性能分析平台",
          icon: "icon_g_sel.png",
          routerLink: "http://192.168.108.24:31896/mintaka/portal/#/index",
          pic: "",
          describe: "移动网络性能分析平台",
          isLeaf: true
        },
        {
          mainTitle: "Mintaka",
          subTitle: "大数据Hadoop平台",
          icon: "icon_m_sel.png",
          routerLink: "",
          pic: "",
          describe: "Mintaka大数据Hadoop平台",
          isLeaf: false,
          children: [
            {
              mainTitle: "HDFS",
              subTitle: "",
              icon: "",
              routerLink:
                "http://192.168.108.17:9870/dfshealth.html#tab-overview",
              pic: "",
              describe: "正式环境：HDFS",
              isLeaf: true
            },
            {
              mainTitle: "Yarn",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.17:8088/cluster",
              pic: "",
              describe: "正式环境：Yarn",
              isLeaf: true
            },
            {
              mainTitle: "Hbase",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.17:16010/master-status",
              pic: "",
              describe: "正式环境：Hbase",
              isLeaf: true
            },
            {
              mainTitle: "Atlas",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.17:21001/login.jsp",
              pic: "",
              describe: "Atlas",
              isLeaf: true
            },
            {
              mainTitle: "Elasticsearch",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.17:9800/",
              pic: "",
              describe:
                "Elasticsearch,访问前需要运行插件命令:/home/hadoop/ElasticHD -p 0.0.0.0:9800",
              isLeaf: true
            },
            {
              mainTitle: "Hue",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.17:8898/",
              pic: "",
              describe: "",
              isLeaf: true
            },
            {
              mainTitle: "Nifi",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.19:9090/",
              pic: "",
              describe: "Nifi",
              isLeaf: true
            },
            {
              mainTitle: "Spark",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.17:8080/",
              pic: "",
              describe: "Spark",
              isLeaf: true
            },
            {
              mainTitle: "Flink",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.17:8083/#/overview",
              pic: "",
              describe: "Flink",
              isLeaf: true
            },
            {
              mainTitle: "Kylin",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.17:7070/kylin",
              pic: "",
              describe: "Kylin",
              isLeaf: true
            },
            {
              mainTitle: "Zeppelin",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.18:28888/",
              pic: "",
              describe: "Zeppelin",
              isLeaf: true
            },
            {
              mainTitle: "Knox",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.17:8443/gateway/ocdp",
              pic: "",
              describe: "Knox",
              isLeaf: true
            },
            {
              mainTitle: "Ranger",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.17:6080/login.jsp",
              pic: "",
              describe: "Ranger",
              isLeaf: true
            },
            {
              mainTitle: "Hdfs",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.91:9870",
              pic: "",
              describe: "测试环境：Hdfs(未认证,无法访问) ",
              isLeaf: true
            },
            {
              mainTitle: "Yarn",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.91:8088/cluster ",
              pic: "",
              describe: "测试环境：Yarn",
              isLeaf: true
            },
            {
              mainTitle: "Hbase",
              subTitle: "",
              icon: "",
              routerLink: "http://192.168.108.91:16010/master-status",
              pic: "",
              describe: "测试环境：Hbase",
              isLeaf: true
            }
          ]
        },
        {
          mainTitle: "Nile",
          subTitle: "客流热力图",
          icon: "icon_a_sel.png",
          routerLink: "http://192.168.16.100:30777/nile-heatmap-fe/#/login",
          pic: "",
          describe: "Nile客流热力图",
          isLeaf: true
        },
        {
          mainTitle: "Alnitak",
          subTitle: "指标监控",
          icon: "icon_a_sel.png",
          routerLink: "http://192.168.108.45:3000",
          pic: "",
          describe: "Alnitak指标监控",
          isLeaf: true
        },
        {
          mainTitle: "Mintaka",
          subTitle: "数据治理（亿信）",
          icon: "icon_a_sel.png",
          routerLink: "http://192.168.108.45:18081/esendatagovernace/",
          pic: "",
          describe: "Mintaka数据治理（亿信）",
          isLeaf: true
        },
        {
          mainTitle: "Mintaka BI",
          subTitle: "（SuperSet）",
          icon: "icon_a_sel.png",
          routerLink: "http://192.168.108.54:8088/",
          pic: "",
          describe: "Mintaka BI（SuperSet）",
          isLeaf: true
        }
      ]
    }
  ]
};
