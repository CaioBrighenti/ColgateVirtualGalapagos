import React from "react";

import BasePairGroup from "./BasePairGroup";

const BasePairs = ({ classes, numGroups }) => {
  // 22.09

  const basePairTranslateDist = [];

  for (let x = 0; x < numGroups; x++) {
    basePairTranslateDist.push(x * 43.17);
  }

  return (
    <g id="basePairs">
      {basePairTranslateDist.map((distance, index) => (
        <BasePairGroup
          classes={classes}
          key={index}
          xTranslateDistance={distance}
        />
      ))}
      {/* <g id="nucleotides">
        <BasePair
          id="rightBottom"
          pairClass={classes.cls1}
          x="52.32"
          y="17"
          width="2.48"
          height="4.83"
        />
        <rect
          id="rightBottom"
          class={classes.cls1}
          x="52.32"
          y="17"
          width="2.48"
          height="4.83"
        />
        <rect
          id="rightTop"
          class={classes.cls2}
          x="52.32"
          y="10.98"
          width="2.48"
          height="4.83"
        />
        <rect
          id="midRightBottom"
          class={classes.cls3}
          x="47.46"
          y="16.95"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midRightTop"
          class={classes.cls4}
          x="47.46"
          y="7.52"
          width="2.48"
          height="8.24"
        />
        <rect
          id="midBottom"
          class={classes.cls4}
          x="42.08"
          y="16.88"
          width="2.48"
          height="12.08"
        />
        <rect
          id="midTop"
          class={classes.cls3}
          x="42.08"
          y="3.76"
          width="2.48"
          height="11.93"
        />
        <rect
          id="midLeftBottom"
          class={classes.cls2}
          x="36.8"
          y="16.88"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midLeftTop"
          class={classes.cls1}
          x="36.8"
          y="7.45"
          width="2.48"
          height="8.24"
        />
        <rect
          id="leftBottom"
          class={classes.cls3}
          x="31.24"
          y="17"
          width="2.48"
          height="4.83"
        />
        <rect
          id="leftTop"
          class={classes.cls4}
          x="31.24"
          y="10.98"
          width="2.48"
          height="4.83"
        />
      </g>
       */}
      {/* <g id="nucleotides-2" data-name="nucleotides">
        <rect
          id="rightBottom-2"
          data-name="rightBottom"
          class={classes.cls1}
          x="95.5"
          y="16.92"
          width="2.48"
          height="4.83"
        />
        <rect
          id="rightTop-2"
          data-name="rightTop"
          class={classes.cls2}
          x="95.5"
          y="10.9"
          width="2.48"
          height="4.83"
        />
        <rect
          id="midRightBottom-2"
          data-name="midRightBottom"
          class={classes.cls3}
          x="90.64"
          y="16.87"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midRightTop-2"
          data-name="midRightTop"
          class={classes.cls4}
          x="90.64"
          y="7.44"
          width="2.48"
          height="8.24"
        />
        <rect
          id="midBottom-2"
          data-name="midBottom"
          class={classes.cls2}
          x="85.26"
          y="16.8"
          width="2.48"
          height="12.08"
        />
        <rect
          id="midTop-2"
          data-name="midTop"
          class={classes.cls1}
          x="85.26"
          y="3.68"
          width="2.48"
          height="11.93"
        />
        <rect
          id="midLeftBottom-2"
          data-name="midLeftBottom"
          class={classes.cls4}
          x="79.97"
          y="16.8"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midLeftTop-2"
          data-name="midLeftTop"
          class={classes.cls3}
          x="79.97"
          y="7.37"
          width="2.48"
          height="8.24"
        />
        <rect
          id="leftBottom-2"
          data-name="leftBottom"
          class={classes.cls2}
          x="74.41"
          y="16.92"
          width="2.48"
          height="4.83"
        />
        <rect
          id="leftTop-2"
          data-name="leftTop"
          class={classes.cls1}
          x="74.41"
          y="10.9"
          width="2.48"
          height="4.83"
        />
      </g> */}
      {/* <g id="nucleotides-3" data-name="nucleotides">
        <rect
          id="rightBottom-3"
          data-name="rightBottom"
          class={classes.cls2}
          x="137.9"
          y="16.92"
          width="2.48"
          height="4.83"
        />
        <rect
          id="rightTop-3"
          data-name="rightTop"
          class={classes.cls1}
          x="137.9"
          y="10.9"
          width="2.48"
          height="4.83"
        />
        <rect
          id="midRightBottom-3"
          data-name="midRightBottom"
          class={classes.cls4}
          x="133.04"
          y="16.87"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midRightTop-3"
          data-name="midRightTop"
          class={classes.cls3}
          x="133.04"
          y="7.44"
          width="2.48"
          height="8.24"
        />
        <rect
          id="midBottom-3"
          data-name="midBottom"
          class={classes.cls3}
          x="127.66"
          y="16.8"
          width="2.48"
          height="12.08"
        />
        <rect
          id="midTop-3"
          data-name="midTop"
          class={classes.cls4}
          x="127.66"
          y="3.68"
          width="2.48"
          height="11.93"
        />
        <rect
          id="midLeftBottom-3"
          data-name="midLeftBottom"
          class={classes.cls3}
          x="122.37"
          y="16.8"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midLeftTop-3"
          data-name="midLeftTop"
          class={classes.cls4}
          x="122.37"
          y="7.37"
          width="2.48"
          height="8.24"
        />
        <rect
          id="leftBottom-3"
          data-name="leftBottom"
          class={classes.cls1}
          x="116.82"
          y="16.92"
          width="2.48"
          height="4.83"
        />
        <rect
          id="leftTop-3"
          data-name="leftTop"
          class={classes.cls2}
          x="116.82"
          y="10.9"
          width="2.48"
          height="4.83"
        />
      </g>
      <g id="nucleotides-4" data-name="nucleotides">
        <rect
          id="rightBottom-4"
          data-name="rightBottom"
          class={classes.cls4}
          x="181.87"
          y="17.28"
          width="2.48"
          height="4.83"
        />
        <rect
          id="rightTop-4"
          data-name="rightTop"
          class={classes.cls3}
          x="181.87"
          y="11.26"
          width="2.48"
          height="4.83"
        />
        <rect
          id="midRightBottom-4"
          data-name="midRightBottom"
          class={classes.cls2}
          x="177.01"
          y="17.23"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midRightTop-4"
          data-name="midRightTop"
          class={classes.cls1}
          x="177.01"
          y="7.8"
          width="2.48"
          height="8.24"
        />
        <rect
          id="midBottom-4"
          data-name="midBottom"
          class={classes.cls3}
          x="171.63"
          y="17.16"
          width="2.48"
          height="12.08"
        />
        <rect
          id="midTop-4"
          data-name="midTop"
          class={classes.cls4}
          x="171.63"
          y="4.04"
          width="2.48"
          height="11.93"
        />
        <rect
          id="midLeftBottom-4"
          data-name="midLeftBottom"
          class={classes.cls1}
          x="166.34"
          y="17.16"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midLeftTop-4"
          data-name="midLeftTop"
          class={classes.cls2}
          x="166.34"
          y="7.73"
          width="2.48"
          height="8.24"
        />
        <rect
          id="leftBottom-4"
          data-name="leftBottom"
          class={classes.cls2}
          x="160.79"
          y="17.28"
          width="2.48"
          height="4.83"
        />
        <rect
          id="leftTop-4"
          data-name="leftTop"
          class={classes.cls1}
          x="160.79"
          y="11.26"
          width="2.48"
          height="4.83"
        />
      </g>
      <g id="nucleotides-5" data-name="nucleotides">
        <rect
          id="rightBottom-5"
          data-name="rightBottom"
          class={classes.cls1}
          x="225.01"
          y="16.92"
          width="2.48"
          height="4.83"
        />
        <rect
          id="rightTop-5"
          data-name="rightTop"
          class={classes.cls2}
          x="225.01"
          y="10.9"
          width="2.48"
          height="4.83"
        />
        <rect
          id="midRightBottom-5"
          data-name="midRightBottom"
          class={classes.cls4}
          x="220.15"
          y="16.87"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midRightTop-5"
          data-name="midRightTop"
          class={classes.cls3}
          x="220.15"
          y="7.44"
          width="2.48"
          height="8.24"
        />
        <rect
          id="midBottom-5"
          data-name="midBottom"
          class={classes.cls1}
          x="214.77"
          y="16.8"
          width="2.48"
          height="12.08"
        />
        <rect
          id="midTop-5"
          data-name="midTop"
          class={classes.cls2}
          x="214.77"
          y="3.68"
          width="2.48"
          height="11.93"
        />
        <rect
          id="midLeftBottom-5"
          data-name="midLeftBottom"
          class={classes.cls1}
          x="209.48"
          y="16.8"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midLeftTop-5"
          data-name="midLeftTop"
          class={classes.cls2}
          x="209.48"
          y="7.37"
          width="2.48"
          height="8.24"
        />
        <rect
          id="leftBottom-5"
          data-name="leftBottom"
          class={classes.cls3}
          x="203.93"
          y="16.92"
          width="2.48"
          height="4.83"
        />
        <rect
          id="leftTop-5"
          data-name="leftTop"
          class={classes.cls4}
          x="203.93"
          y="10.9"
          width="2.48"
          height="4.83"
        />
      </g>
      <g id="nucleotides-6" data-name="nucleotides">
        <rect
          id="rightBottom-6"
          data-name="rightBottom"
          class={classes.cls4}
          x="268.35"
          y="16.73"
          width="2.48"
          height="4.83"
        />
        <rect
          id="rightTop-6"
          data-name="rightTop"
          class={classes.cls3}
          x="268.35"
          y="10.71"
          width="2.48"
          height="4.83"
        />
        <rect
          id="midRightBottom-6"
          data-name="midRightBottom"
          class={classes.cls4}
          x="263.49"
          y="16.68"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midRightTop-6"
          data-name="midRightTop"
          class={classes.cls3}
          x="263.49"
          y="7.25"
          width="2.48"
          height="8.24"
        />
        <rect
          id="midBottom-6"
          data-name="midBottom"
          class={classes.cls3}
          x="258.11"
          y="16.61"
          width="2.48"
          height="12.08"
        />
        <rect
          id="midTop-6"
          data-name="midTop"
          class={classes.cls4}
          x="258.11"
          y="3.49"
          width="2.48"
          height="11.93"
        />
        <rect
          id="midLeftBottom-6"
          data-name="midLeftBottom"
          class={classes.cls1}
          x="252.82"
          y="16.61"
          width="2.48"
          height="8.62"
        />
        <rect
          id="midLeftTop-6"
          data-name="midLeftTop"
          class={classes.cls2}
          x="252.82"
          y="7.18"
          width="2.48"
          height="8.24"
        />
        <rect
          id="leftBottom-6"
          data-name="leftBottom"
          class={classes.cls2}
          x="247.26"
          y="16.73"
          width="2.48"
          height="4.83"
        />
        <rect
          id="leftTop-6"
          data-name="leftTop"
          class={classes.cls1}
          x="247.26"
          y="10.71"
          width="2.48"
          height="4.83"
        />
      </g>
     */}
    </g>
  );
};

export default BasePairs;
