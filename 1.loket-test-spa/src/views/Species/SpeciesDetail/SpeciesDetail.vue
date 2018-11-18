<template>
  <div class="container">
    <div class="box-detail">
      <div class="box-detail__title">Species Name: {{species.name}}</div>
      <table class="table">
        <tr>
          <td>Classification</td>
          <td>:</td>
          <td>{{species.classification}}</td>
        </tr>
        <tr>
          <td>Designation</td>
          <td>:</td>
          <td>{{species.designation}}</td>
        </tr>
        <tr>
          <td>Average Height</td>
          <td>:</td>
          <td>{{species.average_height}}</td>
        </tr>
        <tr>
          <td>Skin Colors</td>
          <td>:</td>
          <td>{{species.skin_colors}}</td>
        </tr>
        <tr>
          <td>Eye Colors</td>
          <td>:</td>
          <td>{{species.eye_colors}}</td>
        </tr>
        <tr>
          <td>Average Lifespan</td>
          <td>:</td>
          <td>{{species.average_lifespan}}</td>
        </tr>
        <tr>
          <td>Home World</td>
          <td>:</td>
          <td>{{species.homeworld}}</td>
        </tr>
        <tr>
          <td>Language</td>
          <td>:</td>
          <td>{{species.language}}</td>
        </tr>
        <tr>
          <td>Related People</td>
          <td>:</td>
          <td>
            <span
              v-for="data in species.people"
              :key="data"
            >
              {{data.name}},&nbsp;
            </span>
          </td>
        </tr>
        <tr>
          <td>Related Films</td>
          <td>:</td>
          <td>
            <span
              v-for="data in species.films"
              :key="data"
            >
              {{data.title}},&nbsp;
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      species: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/species/${id}/`)
      .then(
        response => {
          let xhrRes = response
          this.species = xhrRes

          // CUSTOM PEOPLE
          let arrayPeople = this.getDataFromListUrlPeople(xhrRes.people)
          this.species.people = arrayPeople

          // CUSTOM FILMS
          let arrayFilm = this.getDataFromListUrlFilm(xhrRes.films)
          this.species.films = arrayFilm
        }
      )
  }
}
</script>
