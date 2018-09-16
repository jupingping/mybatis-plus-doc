(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{165:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"逻辑删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑删除","aria-hidden":"true"}},[t._v("#")]),t._v(" 逻辑删除")]),t._v(" "),s("p",[t._v("SpringBoot 配置方式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.application.yml 加入配置(如果你的默认值和mp默认的一样,该配置可无):")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("mybatis-plus")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("global-config")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("db-config")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("logic-delete-value")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1 ")]),s("span",{attrs:{class:"token comment"}},[t._v("# 逻辑已删除值(默认为 1)")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("logic-not-delete-value")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0 ")]),s("span",{attrs:{class:"token comment"}},[t._v("# 逻辑未删除值(默认为 0)")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("2.注册 Bean：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baomidou"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mybatisplus"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("injector"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ISqlInjector"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baomidou"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mybatisplus"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extension"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("injector"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LogicSqlInjector"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bean"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Configuration"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("MyBatisPlusConfiguration")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" ISqlInjector "),s("span",{attrs:{class:"token function"}},[t._v("sqlInjector")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("LogicSqlInjector")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("3.实体类字段上加上"),s("code",[t._v("@TableLogic")]),t._v("注解")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@TableLogic")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Integer deleted"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])}],!1,null,null,null);o.options.__file="logic-delete.md";a.default=o.exports}}]);