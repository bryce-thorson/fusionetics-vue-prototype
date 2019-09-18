<template>
  <div class="bodyPartSelection">
    <div class="tab-container">
      <b-tabs pills fill>
        <b-tab title="Tab 1" active>
            <b-card-img bottom src="https://picsum.photos/600/200/?image=21"></b-card-img>
          </b-tab>
        <b-tab title="Tab 2">
          <b-card-img bottom src="https://picsum.photos/600/200/?image=24"></b-card-img>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>


<script>
export default {
  name: 'bodyPartSelection'
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.bodyPartSelection {
  background-color: white;
  padding: 1rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  & .tab-container {
    display: flex;
    justify-content: center;
  }
}

</style>
