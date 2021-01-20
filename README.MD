# 팀원 추가 방법
- 1. 이미지 파일을 HTML파일과 같은 디렉토리에 저장해주세요.
- 2. `wrapper` div 안에 `hr` 이 있습니다. `hr`마다 한개의 이미지가 있어요. `hr` 태그 밑에 이미지를 넣어주세요.
- 3. 클래스를 `profileN` 으로 적어주세요. (예를들어 두번째 사진이면 `profile2` 이런식으로요)
-  4. 그 다음 `div`를 하나 만들어주신 후, 클래스에 `infoN hide`을 넣어주세요. (사진과 똑같이 두번째 프로필이면 `info2 hide` 이런식으로요)
- 5. 그 다음 각각 `h5` `p` 태그로 이름, 설명을 입력해주세요.
- 6. 그리고 마지막은 `hr` 태그를 넣어주세요.
- 7. `profile.js` 로 가서 `const infoN = document.querySelector('.infoN');` 과 `const imgN = document.querySelector('.profileN);` 을 입력해주세요. 이미지 개수만큼 HTML에서 만든 클래스를 넣어주세요.
- 8. 제가 만들어 놓은 `img.addEventListener('click',()=>{` 이 함수에 해당하는 아이들을 싹 다 복사하시고 (변수부분 빼고 다 복사해주세요.) 이미지수 만큼 붙여넣으신 후에, `img` 부분과 `info` 부분을 숫자에 맞게 적어주세요.
- 9. 저장해주세요 