import React from "react"
import "./SalBlock1.css"
import TextDiv from "../../../component/TextDiv/TextDiv"

const SalBlock1 = () => {

  const english1 = `————
  "Ah! ah! wherefore didst thou not look at me? If thou hadst looked at me thou hadst loved me. Well I know 
  that thou wouldst have loved me, and the mystery of Love is greater than the mystery of Death."
                                                                                                                       ——Oscar Wilde，Salome`
  const english2 = `  Salome, the daughter of Herod II and Herodiasher
  dance at the birthday celebration of her stepfather,
  who had John the Baptist beheaded at her request.
  ​Inspired by SALOME, the flamenco dancing directed
  by Carlos Saura. Flamenco might be the perfect
  vehicle with which to interpret this story as it is an
  art form that is as sensuous and intriguing as the
  story itself.`

  const chinese1 = `  莎乐美，希律王的女儿，由于向约翰求爱被拒，愤而
  请希律王将约翰斩首，把约翰的首级拿在手中亲吻，
  以这种血腥的方式拥有了约翰。
  本系列灵感起源于西班牙导演，Carlos Saura的弗莱
  明戈舞蹈版本的莎乐美。
  弗拉明戈的红色舞裙，西班牙的风情，摇曳的月光和
  莎乐美的爱欲和疯狂。这是这个系列有关的一切。`

  const chinese2 = `“啊！为何你不看着我，约翰？如果你看着我，你就会爱上我。爱情的神秘，远超越死亡的神秘。”
  ​                       
                                                            ——奥斯卡·王尔德《莎乐美》`

  return (
    <>
      <div className="sal-block1">
        <div className="text-div">
          <div className="row1-div">
            <TextDiv className="text-style" content="SALOMÉ" fontSize={56} align="left" />
            <TextDiv className="text-style" content=" 2019-2020" fontSize={34} align="left" />
          </div>
          <div className="row2-div">
            <TextDiv className="text-style" content="FLAMENCO" fontSize={25} align="left" />
          </div>
          <div className="row3-div">
            <TextDiv className="text-style-2" content={english1} fontSize={19} align="left" />
          </div>
          <div className="row4-div">
            <TextDiv className="text-style" content="INSIPIRATION" fontSize={22} align="left" />
          </div>
          <div className="row5-div">
            <TextDiv className="text-style-3" content={english2} fontSize={16} align="left" />
          </div>
          <div className="row6-div">
            <TextDiv className="text-style-4" content={chinese1} fontSize={16} align="left" />
          </div>
          <div className="row7-div">
            <TextDiv className="text-style-4" content={chinese2} fontSize={18} align="left" />
          </div>
        </div>

      </div>
    </>
  )

}

export default SalBlock1