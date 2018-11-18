<template>
  <div class="container">
    <div class="box-detail">
      <div class="box-detail__title">Starship Name: {{starship.name}}</div>
      <table class="table">
        <tr>
          <td>Model</td>
          <td>:</td>
          <td>{{starship.model}}</td>
        </tr>
        <tr>
          <td>Manufacturer</td>
          <td>:</td>
          <td>{{starship.manufacturer}}</td>
        </tr>
        <tr>
          <td>Cost in Credits</td>
          <td>:</td>
          <td>{{starship.cost_in_credits}}</td>
        </tr>
        <tr>
          <td>Length</td>
          <td>:</td>
          <td>{{starship.length}}</td>
        </tr>
        <tr>
          <td>Max Atmosphering Speed</td>
          <td>:</td>
          <td>{{starship.max_atmosphering_speed}}</td>
        </tr>
        <tr>
          <td>Crew</td>
          <td>:</td>
          <td>{{starship.crew}}</td>
        </tr>
        <tr>
          <td>Passengers</td>
          <td>:</td>
          <td>{{starship.passengers}}</td>
        </tr>
        <tr>
          <td>Cargo Capacity</td>
          <td>:</td>
          <td>{{starship.cargo_capacity}}</td>
        </tr>
        <tr>
          <td>Consumables</td>
          <td>:</td>
          <td>{{starship.consumambles}}</td>
        </tr>
        <tr>
          <td>Hyperdrive Rating</td>
          <td>:</td>
          <td>{{starship.hyperdrive_rating}}</td>
        </tr>
        <tr>
          <td>MGLT</td>
          <td>:</td>
          <td>{{starship.MGLT}}</td>
        </tr>
        <tr>
          <td>Starship Class</td>
          <td>:</td>
          <td>{{starship.starship_class}}</td>
        </tr>
        <tr>
          <td>Related Pilots</td>
          <td>:</td>
          <td>
            <span
              v-for="data in starship.people"
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
              v-for="data in starship.films"
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
      starship: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/starships/${id}/`)
      .then(
        response => {
          let xhrRes = response
          this.starship = xhrRes

          // CUSTOM PEOPLE
          let arrayPeople = this.getDataFromListUrlPeople(xhrRes.pilots)
          this.starship.pilots = arrayPeople

          // CUSTOM FILMS
          let arrayFilm = this.getDataFromListUrlFilm(xhrRes.films)
          this.starship.films = arrayFilm
        }
      )
  }
}
</script>
