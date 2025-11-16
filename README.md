
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
- 
1. 가상환경 생성 및 활성화
   ```bash
   python -m venv venv
   source venv/bin/activate   # Mac/Linux
   venv\Scripts\activate      # Windows
   ```
2. 필요한 패키지 설치
```bash
pip install fastapi uvicorn
```
3. 서버 실행
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
***
## docker로 실행
```bash
docker-compose up --build
``` 
