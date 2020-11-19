import * as React from "react";

function Reflection({ styles }) {
  return (
    <svg
      viewBox="0 0 50.703 61.914"
      // height={234.004}
      // width={191.632}
      style={styles}
    >
      <path
        d="M4.127.08C7.413.23 13.98.532 21.21 3.893c7.23 3.361 15.12 9.783 20.305 16.673 5.185 6.89 7.664 14.246 8.637 20.294.973 6.049.44 10.788.046 13.774-.393 2.986-.645 4.22-1.291 5.397-.646 1.177-1.684 2.298-2.22 1.733-.538-.566-.573-2.819-.357-6.014.217-3.195.685-7.331-.535-13.127-1.221-5.796-4.131-13.25-8.457-19.228-4.326-5.977-10.068-10.476-14.686-13.446-4.618-2.97-8.111-4.41-11.926-5.142-3.814-.732-7.947-.757-9.649-1.451C-.624 2.66.108 1.295.475.613.842-.07.842-.07 4.127.081z"
        opacity={0.407}
        fill="#fff"
      />
    </svg>
  );
}

const MemoReflection = React.memo(Reflection);
export default MemoReflection;