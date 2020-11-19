import * as React from "react";

function Shadow({ styles }) {
  return (
    <svg
      viewBox="0 0 89.294 100.286"
      // height={379.035}
      // width={337.489}
      style={styles}
    >
      <path
        d="M30.422 0A52.594 52.594 0 000 47.692a52.594 52.594 0 0052.594 52.594 52.594 52.594 0 0036.7-14.92 52.594 52.594 0 01-22.174 4.902 52.594 52.594 0 01-52.594-52.594A52.594 52.594 0 0130.422 0z"
        fillOpacity={0.251}
      />
    </svg>
  );
}

const MemoShadow = React.memo(Shadow);
export default MemoShadow;
