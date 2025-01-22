import { defineClientConfig } from '@vuepress/client'

// 侧边栏数据配置
const sidebarItems = [
    {
        icon: '/images/shouji.png',
        label: '手机版',
        popupTitle: '<span style="font-weight: bold; color: #1e1e1e; font-size: 16px;">扫码体验手机版</span>',
        popupText: '随时随地学编程',
        isDynamicQR: true  // 标记这个项目需要动态二维码
    },
    {
        icon: '/images/weixin.png',
        label: '微信',
        popupImage: '/images/weixin_guoshunfa.png',
        popupTitle: '<span style="font-weight: bold; color: #1e1e1e; font-size: 16px;">我的微信</span><br>欢迎交流（备注来意）',
        popupText: ''
    },
    {
        icon: '/images/zanshang.png',
        label: '支持我',
        popupImage: '/images/zanshang_guoshunfa.png',
        popupTitle: '<span style="font-weight: bold; color: #1e1e1e; font-size: 16px;">支持作者</span>',
        popupText: '感谢您的支持'
    }
];

/**
 * 将代码移到 enhance 钩子中
添加了客户端检查 typeof window !== 'undefined'
使用路由的 afterEach 钩子来确保在每次路由变化后都执行
添加了 setTimeout 延迟执行
添加了检查避免重复添加
 */
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 确保代码只在客户端执行
    if (typeof window !== 'undefined') {
      router.afterEach(() => {
        console.log('路由变化，准备添加右侧栏');
        
        // 使用 setTimeout 确保 DOM 已完全加载
        setTimeout(() => {
          if (!document.querySelector('.right-sidebar')) {
            console.log('开始添加右侧栏');
            
            const rightBar = document.createElement('div');
            rightBar.className = 'right-sidebar';
            
            // 引入 QRCode 库
            const qrcodeScript = document.createElement('script');
            qrcodeScript.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js';
            document.head.appendChild(qrcodeScript);

            qrcodeScript.onload = () => {
              // 根据数据生成HTML
              const itemsHtml = sidebarItems.map(item => `
                <div class="sidebar-item">
                  <div class="popup-content">
                    <div class="popup-title">${item.popupTitle}</div>
                    ${item.isDynamicQR 
                      ? `<canvas class="qr-canvas" width="160" height="160"></canvas>`
                      : `<img src="${item.popupImage}" alt="${item.label}">`
                    }
                    <p>${item.popupText}</p>
                  </div>
                  <img src="${item.icon}" alt="${item.label}">
                  <span>${item.label}</span>
                </div>
              `).join('');

              rightBar.innerHTML = `
                <div class="right-sidebar-items">
                  ${itemsHtml}
                </div>
              `;

              // 添加样式
              const style = document.createElement('style');
              style.textContent = `
                .right-sidebar {
                  position: fixed;
                  right: 0;
                  top: 80px;
                  background: #fff;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  z-index: 9999;
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
                  position: relative;
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
                  display: block;
                  margin: 0 auto 4px;
                }
                .sidebar-item span {
                  display: block;
                  font-size: 12px;
                  color: #666;
                }
                
                .popup-content {
                  display: none;
                  position: absolute;
                  right: 100%;
                  top: 0;
                  background: #fff;
                  padding: 16px;
                  border-radius: 4px;
                  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
                  width: 200px;
                  text-align: center;
                  margin-right: 16px;
                }
                .popup-content::after {
                  content: '';
                  position: absolute;
                  right: -8px;
                  top: 20px;
                  border-left: 8px solid #fff;
                  border-top: 8px solid transparent;
                  border-bottom: 8px solid transparent;
                }
                .popup-content img {
                  width: 160px;
                  height: 160px;
                  margin: 0 auto 8px;
                }
                .popup-content p {
                  margin: 0;
                  font-size: 14px;
                  color: #666;
                }
                .sidebar-item:hover .popup-content {
                  display: block;
                }
                
                .popup-content .popup-title {
                  margin-bottom: 12px;
                }

                @media (max-width: 719px) {
                  .right-sidebar {
                    display: none;
                  }
                }
              `;
              document.head.appendChild(style);
              document.body.appendChild(rightBar);

              // 生成动态二维码
              const generateQRCode = () => {
                const currentURL = window.location.href;
                const canvas = document.querySelector('.qr-canvas');
                if (canvas) {
                  QRCode.toCanvas(canvas, currentURL, {
                    width: 160,
                    margin: 0,
                    color: {
                      dark: '#000000',
                      light: '#ffffff'
                    }
                  });
                }
              };

              // 初始生成二维码
              generateQRCode();

              // 监听 URL 变化，更新二维码
              router.afterEach(() => {
                generateQRCode();
              });
            };
          }
        }, 1000);
      });
    }
  },
  setup() {},
  rootComponents: []
})