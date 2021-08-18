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

// 올해 날짜 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();