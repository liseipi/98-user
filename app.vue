<template>
  <div>
    <KeepAlive :keepalive>
      <NuxtPage/>
    </KeepAlive>
  </div>
</template>
<script lang="ts" setup>
const keepalive = {
  include: ["searchUser"],
};
</script>
