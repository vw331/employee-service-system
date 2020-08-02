<!--项目中心-->
<template>
  <div class="px-4">
    <a-row :gutter="[16, 16]">
      <a-col v-for="item in list" :key="item.id" :xs="12" :sm="8" :md="6" :lg="6" :xl="4">
        <a-card hoverable class="w-full">
          <div class="cover" slot="cover">
            <div class="search"><a-button ghost icon="search"></a-button></div>
            <img :alt="item.title" :src="item.img"/>
          </div>
          <a-card-meta class="text-center" :title="item.title" :description="item.description">
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>

const list = new Array(10).fill({ 
  img: require('@/assets/project/f5726faa0c9381e3ccb8f857efad8589.png'),
  title: '权利的游戏',
  description: '4.00元起'
}).map((item, index) => ({
  ...item,
  id: index
}))

export default {
  name: 'Project',
  data() {
    return {
      list
    }
  }
}
</script>

<style lang="less" scoped>
.cover {
  width: 100%;
  position: relative;
  overflow: hidden; 
  background: #f2f2f2;
  .search {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: rgba(0, 0, 0, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    opacity: 0;
    transition: opacity linear .3s;
  }
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    transition: transform linear .3s;
  }
  &:hover {
    .search {
      opacity: 1;
    }
    img {
      transform: scale(1.2);
    }
  }
}
</style>