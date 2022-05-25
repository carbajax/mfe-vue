<template>
  <div id="wrapper">
    <div @click="goToApp('/app1')">APP1</div>
    <div @click="goToApp('/app1/foo')">APP1/foo</div>
    <div @click="goToApp('/app1/bar')">APP1/bar</div>
    <div @click="goToApp('/app2')">APP2</div>
    <div @click="goToApp('/app2/foo')">APP2/foo</div>
    <div @click="goToApp('/app2/bar')">APP2/bar</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    goToApp(path) {
      window.singleSpaNavigate(path)
    }
  }
}
</script>
