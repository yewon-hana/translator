
# 리뷰 감정 분석기

이 프로젝트는 영어 리뷰를 입력 받으면 한국어로 번역하고, 그 번역본의 감정을 AI 모델을 활용하여 분석하여 결과를 반환하는 서비스입니다.

## 기능
- 영어 리뷰를 입력하고 translate버튼을 눌러주세요.
- 하단에 원문과 번역본, 문장에 대한 긍정/부정 평가와 퍼센테이지가 출력됩니다.


## 기술스택
- frontend (react + vite)
- backend (fastapi + python)
- AI model (nlp04/korean_sentiment_analysis_kcelectra)

## 실행 방법
- frontend 
```bash
cd frontend
npm install
npm run dev
```

- backend
uv install 필요
```bash
cd backend
uv sync
uvicorn main:app
```
*** 
