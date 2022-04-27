import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'https://6563-ecard-prod-8gzw5g99e3ec7228-1306153372.tcb.qcloud.la/static/1.svg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#Banner5_0',
          children: [
            {
              children: (
                <span>
                  <p>介绍</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#Feature4_0',
          children: [
            {
              children: (
                <span>
                  <p>特点</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '#Content1_0',
          children: [
            {
              children: (
                <span>
                  <p>体验</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>小云名片</p>
          </span>
        ),
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <span>
            <p>超简单的多重身份名片生成工具</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <span>
            <span>
              <span>
                <p>
                  当你面对不同类型的客户；不同圈子的合作伙伴；不同的网络社交平台时，你的身份需要从多个角色（如总裁、摄影师、组织发起人）来回切换，此时多个身份的你应该拥有多个身份的名片，小云名片为此而生。<br />
                </p>
              </span>
            </span>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: '#',
          className: 'banner5-button',
          type: 'primary',
          children: (
            <span>
              <span>
                <p>立即体验</p>
              </span>
            </span>
          ),
        },
      },
    ],
  },
  image: {
    className: 'banner5-image l2hj2g92u1t-editor_css',
    children:
      'https://6563-ecard-prod-8gzw5g99e3ec7228-1306153372.tcb.qcloud.la/static/snap2.png',
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: {
    className: 'home-page content6',
    appear: true,
    always: true,
    playScale: [0.5, 0.5],
  },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>小云名片特点</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <span>
              <p>简单、精美、方便</p>
            </span>
          </span>
        ),
      },
    ],
  },
  img: {
    children:
      'https://6563-ecard-prod-8gzw5g99e3ec7228-1306153372.tcb.qcloud.la/static/snap3.png',
    className: 'content6-img l2hk66auqxh-editor_css',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>简单</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                一分钟即可上手，傻瓜式操作，只需填写相关信息，即可生成不同版式不同用途的多重身份电子名片。
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <span>
                <p>精美</p>
              </span>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                小云名片内置多种精美模板，按横版、竖版、名片用途精细分类，满足你的多场景选择。
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <span>
                <span>
                  <p>方便</p>
                </span>
              </span>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                支持完全离线使用和离线保存到相册，同时支持云端存储和名片分享收藏。
              </p>
            </span>
          ),
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children:
      'https://tva1.sinaimg.cn/large/e6c9d24egy1h1ojv4p8sij20by0bywf4.jpg',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>微信扫一扫立即体验</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>无需下载 App，微信扫一扫即可体验。</p>
      </span>
    ),
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>©2022 小云名片&nbsp;All Rights Reserved</span>
      </span>
    ),
  },
};
