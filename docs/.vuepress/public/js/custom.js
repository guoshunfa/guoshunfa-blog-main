/*
if(top.location!==self.location){
	top.location.href=self.location.href;
}
if(document.location.host != "hliedu.com" 
	&& location.href.indexOf('http') >-1 
	&& location.href.indexOf('localhost')==-1){
	location.replace('https://book.hliedu.com/')
}
	*/
    window.aCallFun = function(elem, args) {
        if(elem[0] && elem[0].src){
          var reg = /(http:\/\/|https:\/\/)(.*?)\/{1}(.*)/i;
          var url = elem[0].src || elem[0].getAttribute('src');
          var host = url.replace(reg,"$2");
          
          if(host.indexOf('baidu')>-1 || host.indexOf('weibo')>-1 || host.indexOf('sina')>-1|| host.indexOf('hliedu.com')>-1 || host.indexOf('http')===-1){
              return true;
          }else{
              return false;
          }
        }else if(elem[0].id && elem[0].id.indexOf('cproIframe')>-1){
          return false;
        }else{
          return true;
        }
      }
      window.f = Element.prototype.appendChild;
      Element.prototype.appendChild = function() {
          var flag = window.aCallFun.call(this, arguments);
          if(flag === true){
              return window.f.apply(this, arguments);
          }else{
              // return window.f.apply(this, arguments);
          }
      };
      
      var _hrefs = "https://www.aliyun.com/minisite/goods?taskPkg=1111ydsrwb&pkgSid=11811&userCode=goqhbyn3";
      function vueSidebarShow() {
          var windowWidth = document.body.clientWidth || window.innerWidth;
          if(windowWidth > 760){
              loadSidebar(_hrefs);
          }
      }
      
      //添加图片到侧边栏
      function loadSidebar(hrefTxt) {
          var sidebars = document.getElementsByClassName("sidebar");	var divNode = document.createElement("div");divNode.setAttribute("style" , "text-align: center; padding: 10px;");divNode.innerHTML = '<a href="' + hrefTxt + '" target="_blank"><img src="/img/sidebar_280140.png"></a>';
          console.log(sidebars)
          sidebars[0].insertBefore(divNode , sidebars[0].childNodes[0]);
          var e = document.getElementsByClassName("hide");if(e[1])e[1].remove();
      }
      
      //页面延时一秒
      setTimeout("vueSidebarShow()",1000)
      
      // 添加右侧固定广告栏
      function addRightSidebar() {
          console.log('开始添加右侧栏'); // 调试日志

          const rightBar = document.createElement('div');
          rightBar.className = 'right-sidebar';
          rightBar.innerHTML = `
              <div class="right-sidebar-items">
                  <div class="sidebar-item">
                      <img src="/img/mobile-qr.png" alt="手机版">
                      <span>手机版</span>
                  </div>
                  <div class="sidebar-item">
                      <img src="/img/wechat-qr.png" alt="编程导航">
                      <span>编程导航</span>
                  </div>
                  <div class="sidebar-item">
                      <img src="/img/wechat-group.png" alt="交流群">
                      <span>交流群</span>
                  </div>
                  <div class="sidebar-item">
                      <img src="/img/download.png" alt="下资料">
                      <span>下资料</span>
                  </div>
                  <div class="sidebar-item">
                      <img src="/img/support.png" alt="支持我">
                      <span>支持我</span>
                  </div>
              </div>
          `;

          // 确保在body加载完成后添加
          if (document.body) {
              document.body.appendChild(rightBar);
              console.log('右侧栏已添加到页面'); // 调试日志
          } else {
              console.error('body元素不存在'); // 错误日志
          }

          // 添加样式
          const style = document.createElement('style');
          style.textContent = `
              .right-sidebar {
                  position: fixed;
                  right: 0;
                  top: 50%;
                  transform: translateY(-50%);
                  background: #fff;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  z-index: 9999; /* 提高层级 */
                  border-radius: 4px 0 0 4px;
              }
              .right-sidebar-items {
                  display: flex;
                  flex-direction: column;
              }
              .sidebar-item {
                  padding: 8px;
                  text-align: center;
                  cursor: pointer;
                  transition: all 0.3s;
                  border-bottom: 1px solid #eee;
                  position: relative; /* 添加相对定位 */
              }
              .sidebar-item:last-child {
                  border-bottom: none;
              }
              .sidebar-item:hover {
                  background-color: #f0f0f0;
              }
              .sidebar-item img {
                  width: 24px;
                  height: 24px;
                  margin-bottom: 4px;
                  display: block; /* 确保图片正确显示 */
                  margin: 0 auto 4px;
              }
              .sidebar-item span {
                  display: block;
                  font-size: 12px;
                  color: #666;
              }
          `;
          document.head.appendChild(style);
          console.log('样式已添加'); // 调试日志
      }

      // 使用DOMContentLoaded事件替代load事件
      document.addEventListener('DOMContentLoaded', function() {
          console.log('DOM加载完成，准备添加右侧栏'); // 调试日志
          addRightSidebar();
      });

      // 以防DOMContentLoaded已经触发，再添加一个load事件作为后备
      window.addEventListener('load', function() {
          console.log('页面完全加载完成'); // 调试日志
          if (!document.querySelector('.right-sidebar')) {
              console.log('右侧栏不存在，现在添加'); // 调试日志
              addRightSidebar();
          }
      });
      