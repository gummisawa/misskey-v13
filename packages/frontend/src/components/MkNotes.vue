<template>
<MkPagination ref="pagingComponent" :pagination="pagination">
	<template #empty>
		<div class="_fullinfo">
			<img src="https://beta-media.kemomi.me/media/3ca30b92-8f82-4fd5-a2f6-140f92f0be55.png" class="_ghost"/>
			<div>{{ i18n.ts.noNotes }}</div>
		</div>
	</template>

	<template #default="{ items: notes }">
		<div :class="[$style.root, { [$style.noGap]: noGap }]">
			<MkDateSeparatedList ref="notes" v-slot="{ item: note }" :items="notes" :direction="pagination.reversed ? 'up' : 'down'" :reversed="pagination.reversed" :no-gap="noGap" :ad="true" :class="$style.notes">
				<XNote :key="note._featuredId_ || note._prId_ || note.id" :class="$style.note" :note="note"/>
			</MkDateSeparatedList>
		</div>
	</template>
</MkPagination>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue';
import XNote from '@/components/MkNote.vue';
import MkDateSeparatedList from '@/components/MkDateSeparatedList.vue';
import MkPagination, { Paging } from '@/components/MkPagination.vue';
import { i18n } from '@/i18n';

const props = defineProps<{
	pagination: Paging;
	noGap?: boolean;
}>();

const pagingComponent = shallowRef<InstanceType<typeof MkPagination>>();

defineExpose({
	pagingComponent,
});
</script>

<style lang="scss" module>
.root {
	&.noGap {
		> .notes {
			background: var(--panel);
		}
	}

	&:not(.noGap) {
		> .notes {
			background: var(--bg);

			.note {
				background: var(--panel);
				border-radius: var(--radius);
			}
		}
	}
}
</style>
