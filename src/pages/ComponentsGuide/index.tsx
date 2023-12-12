import * as S from './style'
import ButtonInAlert from '@components/common/button/ButtonInAlert'
import GuideAlertModal from './modal/GuideAlertModal'
import GuideAlertModal2 from './modal/GuideAlertModal2'

export default function ComponentsGuide() {
  return (
    <S.GuideWrapper>
      {/* 컴포넌트 가이드 작성 구조 예시 */}
      <S.FolderWrapper>
        <h1>폴더명</h1>
        😄 이 구조를 복사해서 사용하시면 작성하기 편할겁니다..!
        <br />
        바로 이 페이지에서 컴포넌트를 출력해도 되고,
        <br />
        복잡한 경우 <b>ComponentsGuide 폴더</b> 내에 파일을 분리해서 작성해도 좋을것같습니다.
        <S.ComponentWrapper>
          <h2>컴포넌트명</h2>
          <S.ExampleWrapper>
            <h3>옵션1</h3>
            // 컴포넌트를 출력해주세요.
          </S.ExampleWrapper>
          <S.ExampleWrapper>
            <h3>옵션2</h3>
            // 컴포넌트를 출력해주세요.
          </S.ExampleWrapper>
        </S.ComponentWrapper>
      </S.FolderWrapper>

      <S.FolderWrapper>
        <h1>button</h1>
        <S.ComponentWrapper>
          <h2>ButtonInAlert</h2>
          <S.ExampleWrapper>
            <h3>size="small", (default)</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              {/* 👇코드 사용 */}
              <ButtonInAlert
                type="save"
                onClick={() => {
                  /* 클릭 시 동작 구현 */
                }}
              />
              <ButtonInAlert
                type="cancel"
                onClick={() => {
                  /* 클릭 시 동작 구현 */
                }}
              />
              <ButtonInAlert
                type="delete"
                onClick={() => {
                  /* 클릭 시 동작 구현 */
                }}
              />
            </div>
          </S.ExampleWrapper>
          <S.ExampleWrapper>
            <h3>size="large", 커스텀 텍스트</h3>
            {/* 👇코드 사용 */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <ButtonInAlert
                type="save"
                text="저장하기"
                size="large"
                onClick={() => {
                  /* 클릭 시 동작 구현 */
                }}
              />
              <ButtonInAlert
                type="cancel"
                text="닫기"
                size="large"
                onClick={() => {
                  /* 클릭 시 동작 구현 */
                }}
              />
              <ButtonInAlert
                type="delete"
                size="large"
                text="영구 삭제하기"
                onClick={() => {
                  /* 클릭 시 동작 구현 */
                }}
              />
            </div>
          </S.ExampleWrapper>
        </S.ComponentWrapper>
      </S.FolderWrapper>

      <S.FolderWrapper>
        <h1>modal</h1>
        <b>AlertModal 컴포넌트</b>는 <b>useAlertModal훅</b>과 함께 사용합니다.
        <br />
        alertMessageKey로 기존에 저장해둔 메세지를 출력하거나, message로 직접 메세지를 전달할 수 있습니다
        <S.ComponentWrapper>
          <h2>AlertModal</h2>
          타입, 또는 메세지에 따른 내용을 출력하는 모달입니다
          <br /> 닫기 버튼만 있습니다.
          <S.ExampleWrapper>
            <h3>준비중 모달 띄우기</h3>
            <p>
              <b>ButtonInAlert</b>에 <b>useAlertModal훅</b>의 handleOpen을 전달하고,
              <br /> <b>AlertModal</b>에 <b>useAlertModal훅</b>의 handleClose, isOpenModal, message를 전달합니다
            </p>
            {/* 👇아래 컴포넌트에서 코드 확인 */}
            <GuideAlertModal />
          </S.ExampleWrapper>
          <S.ExampleWrapper>
            <h3>커스텀 메세지 모달 띄우기</h3>
            {/* 👇아래 컴포넌트에서 코드 확인 */}
            <GuideAlertModal2 />
          </S.ExampleWrapper>
        </S.ComponentWrapper>
      </S.FolderWrapper>
    </S.GuideWrapper>
  )
}
