(function() {
    'use strict';

    angular
        .module('qeesungProfile')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, webDevTec, toastr) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1468658521708;
        vm.showToastr = showToastr;

        activate();

        function activate() {
            getWebDevTec();
            $timeout(function() {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        function showToastr() {
            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            vm.classAnimation = '';
        }

        function getWebDevTec() {
            vm.awesomeThings = webDevTec.getTec();

            angular.forEach(vm.awesomeThings, function(awesomeThing) {
                awesomeThing.rank = Math.random();
            });
        }

        vm["basic-info"]={
            "name":'qinshicheng(qeesung)',
            "birthday":new Date(1992,11,4),
            "major":"automation",
            "profession":"Web developer",
            "company":"HUAWEI Technology Co., Ltd.",
            "phone":"13119576774",
            "email":"1245712564@qq.com",
            "github":"http://github.com/qeesung",
            "blogs":[
                {"personal-blog":"http://qeesung.com (http://blog-qeesung.rhcloud.com)"},
                {"csdn-blog":"http://blog.csdn.net/ii1245712564"},
                {"segmentfault-blog":"https://segmentfault.com/u/qeesung"}
            ]
        };

        vm['skills']={
            description:"Love code, love science and technology, a pseudo geeks",
            skills:[
                {
                    "skill":"Algorithem/Data-Struct",
                    "framework":null,
                    "open source projects":[
                        "https://github.com/qeesung/data-struct",
                        "https://github.com/qeesung/algorithm"
                    ]
                },
                {
                    skill:"html/css/js",
                    framework:'angularjs,nodejs,expressjs,Connect,mocha,Sequenlize,...',
                    "open source projects":[
                        "https://github.com/qeesung/rocketchat-node"
                    ]
                },
                {
                    "skill":"C/C++",
                    "frameworks":'C++ GUI QT,C51,Linux Embedded,ARM7/ARM11,uboot',
                    "open source projects":[
                        "https://github.com/qeesung/ddBook"
                    ]
                },
                {
                    skill:"Java",
                    "frameworks":'Java Swing,Java Servlet,JSP',
                    "open source projects":[
                        "https://github.com/qeesung/ColorPairs"
                    ]
                },
                {
                    "other-skills":[
                        {"OS":"linux,shell,shell script,zsh,fish,docker,vagrant,python"},
                        {"Database":"MongoDB,Mysql,Postgresql"}
                    ]
                }

            ]
        };

        vm['hobiits']={

        };

        vm["current-time"]=""+new Date();
    }
})();
