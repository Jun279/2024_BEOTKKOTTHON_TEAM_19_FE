import GrowComponent from "@component/mainHome/growComponents";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <p className={classes.userGarden}>User의 정원</p>
      {/* <p>(내 정원) 공유하기</p> */}
      <p className={classes.growRecord}>성장 과정</p>
      <div className={classes.currentBox}>
        <GrowComponent text="연속 성장" />
        <GrowComponent text="성장 중인 나무"/>
        <GrowComponent text="총 인증 글 수"/>
      </div>
    </>
  )
}