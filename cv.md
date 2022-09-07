# Ekaterina Trifonova

## Frontend developer

![Ekaterina Trifonova](./resume_photo.jpg)

---

## Contact

- Tel: [+7 (926) 342-09-22](tel:+79263420922 "+7 (926) 342-09-22")
- WhatsApp: [+7 (926) 342-09-22](https://wa.me/+79263420922 "WhatsApp")
- Telegram: [@trifonova_ekaterina](https://t.me/trifonova_ekaterina "@trifonova_ekaterina")
- Email: [3420922@gmail.com](mailto:3420922@gmail.com "3420922@gmail.com")

---

## About

Since September 2021, I have been actively immersed in frontend development, learned the basics of working with Git, started writing logic in Javascript, got acquainted with Vue.js, started using Webpack and Gulp to build projects, improved my page layout skills. Presently I'm taking an advanced frontend development course from The Rolling Scopes School and improving my knowledge of technical English.

At the moment, my favorite development tool is Vue.js, I like how the framework organizes the logic of the code and ensures the stability of the deployed application.

---

## Hard skills

- Vue.js
- Javascript
- HTML
- CSS
- SASS
- SCSS
- Git
- BEM
- jQuery
- Bootstrap
- Axios
- Webpack
- Gulp.

---

## Soft skills

- Discipline
- Adaptability
- Collaboration
- Problen solving
- Self-confidence

---

## Сode examples

### Vue.js Single File Component

```
<template>
  <div class="film-card">
    <div class="film-card__poster">
      <img v-bind:src="image" v-bind:alt="titleRus" />
    </div>
    <div class="film-card__info info">
      <div class="info__original-title">{{ titleOriginal }} {{ ageRating }}+</div>
      <div class="info__about-title">О фильме</div>
      <div class="info__about-content about">
        <div class="about__name">Год производства</div>
        <div class="about__value">{{ year }}</div>
        <div class="about__name">Слоган</div>
        <div class="about__value">«{{ slogan }}»</div>
        <div class="about__name">Страна</div>
        <div class="about__value">
          <ul>
            <li v-for="item in country" v-bind:key="item.title">{{ item }}</li>
          </ul>
        </div>
        <div class="about__name">Жанр</div>
        <div class="about__value">
          <ul>
            <li v-for="item in genre" v-bind:key="item.title">{{ item }}</li>
          </ul>
        </div>
        <div class="about__name">Возраст</div>
        <div class="about__value">
          <span class="age">{{ ageRating }}+</span>
        </div>
        <div class="about__name">Звуковые дорожки</div>
        <div class="about__value">
          <ul>
            <li v-for="item in voiceOver" v-bind:key="item.title">{{ item }}</li>
          </ul>
        </div>
        <div class="about__name">Субтитры</div>
        <div class="about__value">
          <ul>
            <li v-for="item in subtitles" v-bind:key="item.title">{{ item }}</li>
          </ul>
        </div>
        <div class="about__name">Время</div>
        <div class="about__value">{{ time }} мин. {{ time | formatTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmCard",

  props: ["id", "titleRus", "titleOriginal", "year", "ageRating", "genre", "country", "time", "voiceOver", "subtitles", "slogan", "image"],
  filters: {
    formatTime: function (timeMins) {
      if (timeMins < 60) {
        return false;
      } else {
        let hours = Math.floor(timeMins / 60);
        let mins = timeMins - hours * 60;
        return `/ ${hours}ч. ${mins}мин.`;
      }
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.film-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}
.film-card__poster {
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 600px;
  height: auto;
}
.film-card__poster img {
  width: 100%;
  height: auto;
}
.film-card__info {
  height: 100%;
}
.info__original-title {
  font-size: 120%;
  font-weight: 400;
}
.info__about-title {
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 120%;
  font-weight: 500;
}
.info__about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  font-size: 90%;
  line-height: 2;
}
.about__name {
  color: rgba(21, 25, 29, 0.7);
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
ul li {
  display: inline;
}
ul li:not(:last-child)::after {
  content: ", ";
}
.age {
  width: auto;
  padding: 3px;
  border: 2px solid rgba(21, 25, 29);
  border-radius: 3px;
  font-weight: 600;
}
</style>
```

### CodeWars kata

```
    <script>
      function takeWhile(arr, func) {
        const outputArray = [];
        for (element of arr) {
          if (func(element)) {
            outputArray.push(element);
            } else {
            console.log(outputArray);
            return outputArray;
          }
        }
        return outputArray;
      }
      var seq = [2, 4, 6, 8, 1, 2, 5, 4, 3, 2];
      function isEven(num) {
        return num % 2 === 0;
      }
      takeWhile(seq, isEven); // -> [2,4,6,8]
    </script>
```

---

## Work experience

### **September 2021 - to present: Frontend developer**, freelance.

Learned the basics of **Javascript**, **Vue.js**, **Typescript**, **Git**.

Honed my practice on simulators:

- https://en.hexlet.io
- https://htmlacademy.ru/
- https://codepip.com/
- https://www.codewars.com/users/ekatrif

Made **6 pet projects**:

1. Vote for the film of the week - https://github.com/ekatrif/films-rating
2. Speaker time control - https://github.com/ekatrif/spiker-time-control
3. CV page - https://github.com/ekatrif/Pet-project
4. Product page - https://github.com/ekatrif/funbox-test-task
5. Online store page with a shopping cart - https://github.com/ekatrif/online-shop-prototype
6. Online store prototype - https://github.com/ekatrif/1146-Edu-project

### **2010 - 2021: Web developer**, freelance.

- Performed tasks for two web-studios and directly for business.

- Developed more than 40 sites on CMS (Wordpress, Modx, Prestashop, etc.) - a full cycle from the preparation of technical specifications to the implementation of the finished product.

- Improved the interface and functionality (based on standard modules) for 100+ sites.

- Optimized page loading speed for 20+ sites.

- Transferred more than 100 sites to a new hosting.

- Made more than a dozen content plans for filling sites, accepted texts from a team of copywriters and published them on resources.

- Set up contextual advertising in Yandex.Direct and Google.Adwords for 10+ clients.

- Created several networks of sites and improved their visibility in search engines.

---

## Education

**2001-2007 Engineer degree**, Bauman Moscow State Technical University, Faculty of Special Mechanical Engineering.

**2021 Frontend developer**, Training center "Professional", Frontend development.

**2022** RollingScopes Schools, in the process.

---

## Languages

**Russian**: native

**English**: B1-B2

**French**: B2
