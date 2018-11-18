<template>
  <div class="container">
    <div class="box-detail">
      <div class="box-detail__title">Vehicle Name: {{vehicle.name}}</div>
      <table class="table">
        <tr>
          <td>Model</td>
          <td>:</td>
          <td>{{vehicle.model}}</td>
        </tr>
        <tr>
          <td>Manufacturer</td>
          <td>:</td>
          <td>{{vehicle.manufacturer}}</td>
        </tr>
        <tr>
          <td>Cost in Credits</td>
          <td>:</td>
          <td>{{vehicle.cost_in_credits}}</td>
        </tr>
        <tr>
          <td>Length</td>
          <td>:</td>
          <td>{{vehicle.length}}</td>
        </tr>
        <tr>
          <td>Max Atmosphering Speed</td>
          <td>:</td>
          <td>{{vehicle.max_atmosphering_speed}}</td>
        </tr>
        <tr>
          <td>Crew</td>
          <td>:</td>
          <td>{{vehicle.crew}}</td>
        </tr>
        <tr>
          <td>Passengers</td>
          <td>:</td>
          <td>{{vehicle.passengers}}</td>
        </tr>
        <tr>
          <td>Cargo Capacity</td>
          <td>:</td>
          <td>{{vehicle.cargo_capacity}}</td>
        </tr>
        <tr>
          <td>Consumables</td>
          <td>:</td>
          <td>{{vehicle.consumambles}}</td>
        </tr>
        <tr>
          <td>Vehicle Class</td>
          <td>:</td>
          <td>{{vehicle.vehicle_class}}</td>
        </tr>
        <tr>
          <td>Related Pilots</td>
          <td>:</td>
          <td>
            <span
              v-for="data in vehicle.people"
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
              v-for="data in vehicle.films"
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
      vehicle: {}
    }
  },
  mounted () {
    let id  = this.$route.params.id
    this.$store.dispatch('getByUrlApi', `${this.urlApi()}/vehicles/${id}/`)
      .then(
        response => {
          let xhrRes = response
          this.vehicle = xhrRes

          // CUSTOM PEOPLE
          let arrayPeople = this.getDataFromListUrlPeople(xhrRes.pilots)
          this.vehicle.pilots = arrayPeople

          // CUSTOM FILMS
          let arrayFilm = this.getDataFromListUrlFilm(xhrRes.films)
          this.vehicle.films = arrayFilm
        }
      )
  }
}
</script>
