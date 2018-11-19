<template>
  <div class="box-lists columns is-multiline">
    <div class="column is-9">
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
    <div class="column is-3">
      <div class="pull-right">
        <div class="field has-addons">
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="search"
              placeholder="Searching data...">
          </div>
          <div class="control">
            <a class="button is-info" @click="handleSearch(category)">
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-12" v-if="listData.length === 0">
      <div class="empty--data">
        <p>Sorry, data is not found!</p>
      </div>
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
          <img src="https://vignette.wikia.nocookie.net/swfans/images/e/e2/Star_Wars_Title_Placeholder_001.jpg/revision/latest/scale-to-width-down/250?cb=20150312204827" alt="">
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
  data () {
    return {
      search: ''
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
    },
    handleSearch (category) {
      let body = {
        valueSearch: this.search
      }
      this.$emit('handle-search', body)
    }
  }
}
</script>
