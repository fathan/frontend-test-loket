<template>
  <div class="box-lists columns is-multiline">
    <div class="column is-12">
      <router-link :to="{ path: '/' }">
        Home
      </router-link>
      /
      <span v-if="category === 'Film'">Film</span>
      <span v-if="category === 'People'">People</span>
      <span v-if="category === 'Planet'">Planet</span>
      <span v-if="category === 'Species'">Species</span>
      <span v-if="category === 'Starship'">Starship</span>
      <span v-if="category === 'Vehicle'">Vehicle</span>
    </div>
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
      let id = this.getIdOnUrlString(dataUrl, dataCategory)

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
