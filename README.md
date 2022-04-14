
# 🎥**커뮤니티 기반 영화 추천 서비스**🎥

## **Team FDA**

현재 날씨를 기반으로 한 영화를 추천하고 영화별 커뮤니티를 형성하여 좋아요 및 댓글을 통한 소통을 위한 커뮤니티 기반 영화 추천 서비스

## Team Introduce

|                  이재경                   |     정언용      |
| :---------------------------------------: | :-------------: |
|  ![고슴도치](README.assets/고슴도치.png)  |                 |
|          백엔드 API 개발 & Infra          | Frontend, UI/UX |
| [@aletsire ](https://github.com/aletsire) |                 |



## 

------

- 저희 페이지 사진들 실사용

------



## **Development Stack**

- 협업
  - Git
  - Gitlab
  - Mattermost
  - Discord
  - Notion
- Frontend
  - Vue
  - Bootstrap-Vue
  - axios
- Backend
  - Python
  - Django
  - SQLite
  - Visual Studio Code
  - Postman
  - EC2, Ubuntu, Nginx

------



## **설치 및 사용**

### **Github Clone**

```
    git clone
```

### **Frontend**

- 시스템 버전

  - node : @16.13.0
  - npm : @8.1.0

- /frontend 디렉토리로 이동

- Vue 모듈 설치

  ```
    npm install
  ```

- Vue 어플리케이션 실행

  ```
    npm start
  ```

### **Backend**

- 시스템 버전

  - Django: @3.2.7
  - Python: @3.9.7

- 소스코드 pull

  ```
  git pull origin develop
  ```

  ```
  python -m venv venv
  source venv/Scripts/activate
  pip install -r requirements.txt
  python manage.py makemigrations
  python manage.py migrate
  python manage.py loaddata movies/fixtures/genre_data.json
  python manage.py loaddata movies/fixtures/movie_data.json
  ```

------
