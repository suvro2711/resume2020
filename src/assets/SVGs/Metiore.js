import * as React from "react";

function Metiore({ styles }) {
  return (
    <svg
      viewBox="0 0 158.146 88.228"
      // height={333.461}
      // width={597.719}
      style={styles}
    >
      <g transform="translate(-20.317 -115.3)">
        <circle
          transform="rotate(90.001)"
          r={28.288}
          cy={-132.798}
          cx={159.888}
          fill="#999"
        />
        <path
          d="M50.788 198.686c23.407 0 46.931 0 62.117.303 15.185.302 22.266.907 29.024-.3a39.584 39.584 0 0018.443-8.646 39.584 39.584 0 0011.648-16.71 39.584 39.584 0 001.733-20.294 39.584 39.584 0 00-8.647-18.443 39.584 39.584 0 00-16.71-11.648c-6.455-2.335-13.536-2.94-30.145-3.242-16.608-.302-42.742-.302-68.877-.303"
          fill="none"
          stroke="#f2f20a"
          strokeWidth={8.206}
          strokeLinecap="round"
        />
        <path
          d="M105.076 132.065l-70.889-.803"
          fill="none"
          stroke="#f2f20a"
          strokeWidth={5.192}
          strokeLinecap="round"
          strokeDasharray="20.768,10.384"
        />
        <path
          d="M95.002 144.751l-70.89-.803"
          fill="none"
          stroke="#f2f20a"
          strokeWidth={7.592}
          strokeLinecap="round"
          strokeDasharray="30.368,15.184"
          strokeDashoffset={29.609}
        />
        <path
          d="M95.748 160.795l-70.89-.803"
          fill="none"
          stroke="#f2f20a"
          strokeWidth={7.592}
          strokeLinecap="round"
          strokeDasharray="30.368,15.184"
          strokeDashoffset={37.96}
        />
        <path
          d="M103.008 174.468l-70.888-.803"
          fill="none"
          stroke="#f2f20a"
          strokeWidth={7.592}
          strokeLinecap="round"
          strokeDasharray="30.368,15.184"
          strokeDashoffset={66.05}
        />
        <path
          d="M99.478 186.914l-70.888-.803"
          fill="none"
          stroke="#f2f20a"
          strokeWidth={5.192}
          strokeLinecap="round"
          strokeDasharray="20.768,10.384"
          strokeDashoffset={14.538}
        />
      </g>
    </svg>
  );
}

const MemoMetiore = React.memo(Metiore);
export default MemoMetiore;
