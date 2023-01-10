<template>
<div class="ipledcug">
	<div class="_fullinfo">
		<img src="https://beta-media.kemomi.me/media/3ca30b92-8f82-4fd5-a2f6-140f92f0be55.png" class="_ghost"/>
		<div>{{ i18n.ts.notFoundDescription }}</div>
	</div>
</div>
</template>

<script lang="ts" setup>
import { i18n } from '@/i18n';
import { definePageMetadata } from '@/scripts/page-metadata';

const headerActions = $computed(() => []);

const headerTabs = $computed(() => []);

definePageMetadata({
	title: i18n.ts.notFound,
	icon: 'ti ti-alert-triangle',
});
</script>
