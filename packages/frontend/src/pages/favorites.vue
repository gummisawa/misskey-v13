<template>
<MkStickyContainer>
	<template #header><MkPageHeader/></template>
	<MkSpacer :content-max="800">
		<MkPagination :pagination="pagination">
			<template #empty>
				<div class="_fullinfo">
					<img src="https://beta-media.kemomi.me/media/3ca30b92-8f82-4fd5-a2f6-140f92f0be55.png" class="_ghost"/>
					<div>{{ i18n.ts.noNotes }}</div>
				</div>
			</template>

			<template #default="{ items }">
				<MkDateSeparatedList v-slot="{ item }" :items="items" :direction="'down'" :no-gap="false" :ad="false">
					<XNote :key="item.id" :note="item.note" :class="$style.note"/>
				</MkDateSeparatedList>
			</template>
		</MkPagination>
	</MkSpacer>
</MkStickyContainer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import MkPagination from '@/components/MkPagination.vue';
import XNote from '@/components/MkNote.vue';
import MkDateSeparatedList from '@/components/MkDateSeparatedList.vue';
import { i18n } from '@/i18n';
import { definePageMetadata } from '@/scripts/page-metadata';

const pagination = {
	endpoint: 'i/favorites' as const,
	limit: 10,
};

definePageMetadata({
	title: i18n.ts.favorites,
	icon: 'ti ti-star',
});
</script>

<style lang="scss" module>
.note {
	background: var(--panel);
	border-radius: var(--radius);
}
</style>
