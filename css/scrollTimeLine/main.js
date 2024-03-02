import "./scroll-timeline.js";

const progress = document.querySelector(".progress");
const scrollBox = document.querySelector(".scrollBox");

progress.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
  timeline: new ScrollTimeline({
    //스크롤 타임라인에 기준이되는 요소를 넣어주면 된다.
    scrollOffsets: [
      // { target: document.body, edge: "start", threshold: 1 },
      // { target: document.body, edge: "end", threshold: 1 },
      { target: scrollBox, edge: "start", threshold: 1 },
      { target: scrollBox, edge: "end", threshold: 1 },
    ],
  }),
});
