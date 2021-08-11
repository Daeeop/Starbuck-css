const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); 

searchEl.addEventListener('click' , () => {
  // 클릭시 로직 처리
  searchInputEl.focus(); // 포커스 강제 적용

});

searchInputEl.addEventListener('focus' , () => {
  searchEl.classList.add('focused'); // div 요소에 클래스 추가
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur' , () => {
  searchEl.classList.remove('focused'); // div 요소에 클래스 삭제
  searchInputEl.setAttribute('placeholder', '');
});

// 스크롤이 일정 이상 내려가면 배지를 사라지게 함
const badgeEl = document.querySelector('header .badges');

// window.addEventListener('scroll' , () => {
//   // 스크롤 될때마다 함수가 실행 되기 때문에 비효율 적이다.
// });

// Lodash 사용 (함수를 3초마다 실행되도록 제어) 
window.addEventListener('scroll' , _.throttle(() =>{
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기 >> 자연스럽게 하기 위해서 자바스크립트 애니메이션 라이브러리 이용
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
  } else {
    // 배지 보이기 >> 자연스럽게 하기 위해서 자바스크립트 애니메이션 라이브러리 이용
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
  }
}, 300)); 

// _.throttle(함수 , 시간(s))

// gsap.to(요소 , 지속시간 ,옵션 ); 
// 옵션은 객체 데이터
// 요소가 시각적으로만 사라진것이지 영역 자체가 사라지는게 아님 >> display : 'none' 도 명시 해주어야 한다.

// fade-in 순차적으로 요소 나타내기
const fadeIns = document.querySelectorAll('.visual .fade-in');
fadeIns.forEach((fadeEl , index) => {
  gsap.to(fadeEl , 1 , {
    delay: (index+1) * .7, // 0.7 , 1.4 , 2.1 , 2.8 초 후에 순차적으로 요소가 나타난다.
    opacity : 1  
  });
});