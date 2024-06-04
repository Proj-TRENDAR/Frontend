import { styled } from 'styled-components'

const timePickerWidth = '70px'

export const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
    input {
      font-family: 'NanumBarunGothic', sans-serif;
      font-size: 15px;

      border: solid 1px ${({ theme }) => theme.grayLine};
    }
  }
  .react-datepicker {
    overflow: hidden;

    border: none;
    border-radius: 8px;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 16%);
  }
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle {
    fill: ${({ theme }) => theme.pointBg};
    stroke: none;
  }
  .react-datepicker__header {
    padding: 8px 0;

    background-color: ${({ theme }) => theme.pointBg};

    border-bottom: none;
  }

  // month year 보여주는 영역
  .react-datepicker__current-month {
    padding: 8px 24px;
    display: inline-block;
    margin-bottom: 8px;

    font-size: 15px;
    font-family: 'NanumBarunGothic', sans-serif;
    font-weight: 700;
    line-height: 1em;
    color: ${({ theme }) => theme.point};

    background-color: ${({ theme }) => theme.basicBg};

    border: solid 1px ${({ theme }) => theme.point};
    border-radius: 30px;
  }

  // month 이전/이후 버튼
  .react-datepicker__navigation-icon::before {
    height: 8px;
    width: 8px;

    border-color: #e3e3e3;
    border-width: 2px 2px 0 0;
  }
  .react-datepicker__navigation--previous {
    top: 8px;
    left: 8px;
  }
  .react-datepicker__navigation--next {
    top: 8px;
    right: ${timePickerWidth};
  }

  // 요일 컬럼
  .react-datepicker__day-names {
    padding-top: 6px;

    font-weight: bold;

    background-color: ${({ theme }) => theme.basicBg};
  }
  // 주간, 일요일, 토요일 스타일
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: ${({ theme }) => theme.text98};
    &:first-child {
      color: ${({ theme }) => theme.dayColorOfSun};
    }
    &:last-child {
      color: ${({ theme }) => theme.dayColorOfSat};
    }
  }

  .react-datepicker__month {
    margin: 0 5px 6px;
  }
  // 날짜 공통 스타일
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 30px;
    height: 30px;
    margin: 1px;

    font-size: 15px;
    font-weight: 700;
    line-height: 30px;
  }
  // 날짜에 hover시
  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    background-color: ${({ theme }) => theme.point}20;
  }
  // 선택된 날짜 표시
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    color: ${({ theme }) => theme.basicBg};

    background-color: ${({ theme }) => theme.point};
  }

  // 해당 월 이외의 날짜
  .react-datepicker__day--outside-month {
    opacity: 0.5;
  }

  // time picker
  .react-datepicker__header.react-datepicker__header--time {
    display: none;
  }

  .react-datepicker__time-container {
    border-left-color: ${({ theme }) => theme.grayLine};
  }
  .react-datepicker__time-container {
    width: ${timePickerWidth};
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
    width: ${timePickerWidth};
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    height: 3em;
    padding: 0 6px;

    font-size: 15px;
    line-height: 3em;
    color: ${({ theme }) => theme.text98};

    background-color: ${({ theme }) => theme.pointBg};
  }
  // 선택된 time 스타일
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    color: ${({ theme }) => theme.point};

    background-color: ${({ theme }) => theme.basicBg};
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    background-color: ${({ theme }) => theme.basicBg};
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.basicBg};
      background-clip: padding-box;

      border: 2px solid transparent;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.pointText}30;

      border-radius: 4px;
    }
  }
`
