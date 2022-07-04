<script lang="ts">
export default {
  name: 'AntTable',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { ROW_TYPES } from '../../types/TableHeader.type';

const { navItems, profileHref, userName } = defineProps({
  headers: {
    type: Array,
  },
  data: {
    type: Array,
  },
});
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="
              overflow-hidden
              shadow
              ring-1 ring-black ring-opacity-5
              md:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    v-for="(header, index) in headers"
                    :key="`table-header-${header.identifier}-${index}`"
                    scope="col"
                    class="
                      py-3
                      pl-4
                      pr-3
                      text-left text-sm text-gray-900
                      uppercase
                      font-medium
                      sm:pl-6
                    "
                    :class="header.headerClassList"
                  >
                    {{ header.title }}
                  </th>

                  <slot name="lastHeader"></slot>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200 bg-white">
                <tr
                  v-for="(elem, index) in data"
                  :key="`table-row-${elem.id}-${index}`"
                >
                  <td
                    v-for="(header, index) in headers"
                    :key="`table-cell-${header.identifier}-${index}`"
                    class="
                      whitespace-nowrap
                      py-2
                      pl-4
                      pr-3
                      text-sm
                      font-medium
                      text-gray-900
                      sm:pl-6
                    "
                  >
                    <div
                      v-if="header.type === ROW_TYPES.TEXT"
                      :class="header.rowClassList"
                    >
                      {{ elem[header.identifier] }}
                    </div>

                    <div
                      v-else-if="header.type === ROW_TYPES.IMAGE"
                      :class="header.rowClassList"
                    >
                      <img
                        :src="elem[header.identifier]"
                        :alt="elem[header.identifier]"
                      />
                    </div>

                    <div
                      v-else-if="header.type === ROW_TYPES.HTML"
                      :class="header.rowClassList"
                      v-html="elem[header.identifier]"
                    />
                  </td>

                  <slot name="lastCell" />
                </tr>

                <tr v-if="data.length <= 0">
                  <slot name="emptyState" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
