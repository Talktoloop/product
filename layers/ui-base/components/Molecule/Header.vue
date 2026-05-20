<template>
  <header :class="headerClasses">
    <nav :class="navClasses" aria-label="Main navigation">
      <div :class="containerClasses">
        <div :class="sectionClasses">
          <slot name="start" />
        </div>
        <div :class="[sectionClasses, 'justify-center']">
          <slot name="center" />
        </div>
        <div :class="[sectionClasses, 'justify-end']">
          <slot name="end" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MoleculeHeader'
})

const headerClasses = tw`
  sticky top-0 z-40 w-full
  bg-branded-surface text-branded-surface-contrast
  border-b border-branded-foreground
  dark:bg-dark-branded-surface dark:text-dark-branded-surface-contrast
  dark:border-dark-branded-foreground
`

const navClasses = tw`
  container mx-auto px-4
`

const containerClasses = tw`
  flex h-16 items-center justify-between
  gap-4 md:gap-8
`

const sectionClasses = tw`
  flex flex-1 items-center
`
</script>