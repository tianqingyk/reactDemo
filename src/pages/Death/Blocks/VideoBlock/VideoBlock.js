import VideoPlayer from "../../../../component/VideoPlayer/VideoPlayer"
import "./VideoBlock.css"
import TextDiv from "../../../../component/TextDiv/TextDiv"
const VideoBlock = () => {

  const englishText = `For this collection, I was mainly inspired by Thomas Mann's novel, Death in Venice.
  When I read this book years ago, I was deeply attracted by those delicate feelings and 
  expressions. In February 2020, I finally visited Venice, and this was the beginning of a 
  new epidemic. The memories of reading this book sank into my head. After seeing the 
  film Death in Venice.`
  const chineseText = `这个男装系列中，设计师主要受到Thomas Mann的小说《死于威尼斯》以及同名电影所启
  发：流行病弥漫的威尼斯，青春不再的作家遇到了他的缪斯，作家尾随着少年，注视
  他，窥探他，直到他自身也葬身于疫情弥漫的威尼斯。
  而威尼斯的浓雾与海风，以及复古老电影一样的美学，就是这一系列的灵感主旨。`
  return (
    <>
      <VideoPlayer />
      <div className="dl-text-div">
        <TextDiv className="english-style" content={englishText} align="center" fontSize={12} lineHeight={1.5} />
        <TextDiv className="chinese-style" content={chineseText} align="center" fontSize={12} lineHeight={1.5} />
      </div>
    </>
  )
}

export default VideoBlock