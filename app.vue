<template>
  <div>
    <KeepAlive :keepalive>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </KeepAlive>
  </div>
</template>
<script lang="ts" setup>
const keepalive = {
  include: ["searchUser"],
};
</script>
