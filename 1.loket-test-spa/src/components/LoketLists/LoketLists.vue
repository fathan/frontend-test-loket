<template>
  <div class="box-lists columns is-multiline">
    <div
      class="column is-one-quarter"
      v-for="(data, index) in listData"
      :key="index"
    >
      <div
        class="box-lists__listing"
        @click="handleDetail(data.url, category)"
      >
        <div class="image">
          <img src="https://www.oclaro.com/wp-content/themes/oclaro/images/placeholder-general.png" alt="">
        </div>
        <div class="title" v-if="category === 'Film'">{{data.title}}</div>
        <div class="title" v-else>{{data.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array
    },
    category: {
      type: String
    }
  },
  methods: {
    handleDetail (dataUrl, dataCategory) {
      let urlString = dataUrl
      let url = new URL(urlString)
      let pathName = url.pathname
      
      let number
      if (dataCategory === 'Film') { number = pathName.replace('/api/films/', '') }
      if (dataCategory === 'People') { number = pathName.replace('/api/people/', '') }
      if (dataCategory === 'Planet') { number = pathName.replace('/api/planets/', '') }
      if (dataCategory === 'Species') { number = pathName.replace('/api/species/', '') }
      if (dataCategory === 'Starship') { number = pathName.replace('/api/starships/', '') }
      if (dataCategory === 'Vehicle') { number = pathName.replace('/api/vehicles/', '') }
      
      let id = number.replace('/', '')
      
      if (dataCategory === 'Film') { this.$router.push({ path: `/film/${id}` }) }
      if (dataCategory === 'People') { this.$router.push({ path: `/people/${id}` }) }
      if (dataCategory === 'Planet') { this.$router.push({ path: `/planet/${id}` }) }
      if (dataCategory === 'Species') { this.$router.push({ path: `/species/${id}` }) }
      if (dataCategory === 'Starship') { this.$router.push({ path: `/starship/${id}` }) }
      if (dataCategory === 'Vehicle') { this.$router.push({ path: `/vehicle/${id}` }) }
    }
  }
}
</script>
