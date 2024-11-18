<template>
    <ContentNavigation v-slot="{ navigation }" :query="queryContent('/python-basic/')">
      <TutNav :nav="navigation[0].children" />
    </ContentNavigation>
  </template>