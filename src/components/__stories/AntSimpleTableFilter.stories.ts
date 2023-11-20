import AntSimpleTableFilter from '../AntSimpleTableFilter.vue';
import {Meta, StoryObj} from "@storybook/vue3";
import {computed} from "vue";

const meta: Meta<typeof AntSimpleTableFilter> = {
    title: 'Components/Simple Table Filter',
    component: AntSimpleTableFilter,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        search: {
            control: 'text',
            table: {type: {summary: 'string|null'}},
        },
    },
};

export default meta;

type Story = StoryObj<typeof AntSimpleTableFilter>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntSimpleTableFilter},
        setup() {
            const search = computed({
                get() {
                    return args.search;
                },
                set(val) {
                    args.search = val;
                }
            });

            return {args, search};
        },
        template: `
          <div class="p-4">
            <AntSimpleTableFilter v-bind="args" v-model:search="search"/>
          </div>
        `,
    }),
    args: {
        search: null
    },
};
