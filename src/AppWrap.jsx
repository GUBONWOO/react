import React from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODExMjlfMjIx%2FMDAxNTQzNDgxNTgzMzk3.WX1jzEAIDV2c4Xf3Gat63lA_BxQdD0ZGgYrE7AifivAg.01dm76bSwQkoHL9FtXt2vXrn22tU_L3Fg103wZLbtMAg.JPEG.wan5585%2F%25BB%25E7%25C1%25F84.jpg&type=sc960_832'
          name='bob'
          size={200}
        />
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img src='' alt='' />
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}
