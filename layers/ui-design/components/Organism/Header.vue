<template>
  <MoleculeHeader>
    <template #start>
      <MoleculeLogo />
    </template>
    <template #center>
      <MoleculeNavigation />
    </template>
    <template #end>
      <EntityUserProfile v-if="user" :user="user" @logout="$emit('logout')" />
    </template>
  </MoleculeHeader>
</template>

<script setup lang="ts">
// Header component that provides layout structure for the top navigation bar
defineOptions({
  name: 'OrganismHeader'
})

interface User {
  name: string
  avatarUrl?: string
}

interface Props {
  user?: User
}

defineProps<Props>()
defineEmits<{
  'logout': []
}>()
</script>