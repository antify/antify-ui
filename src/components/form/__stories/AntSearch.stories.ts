import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../../enums/Size.enum';
import AntSearch from "../AntSearch.vue";
import {computed} from 'vue';

const meta: Meta<typeof AntSearch> = {
    title: 'Components/Forms/Search',
    component: AntSearch,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        size: {
            control: {type: 'radio'},
            options: Object.values(Size),
        },
        inputTimeout: {
            description:
                'How long is the timeout between inputs to update the value in milliseconds',
        },
        query: {
            description:
                'Read and write the value into url as urldecoded string. Using the given string as query name.',
        },
        placeholder: {
            table: {defaultValue: {summary: 'Search'}},
        },
    },
};

export default meta;

type Story = StoryObj<typeof AntSearch>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntSearch},
        setup() {
            const value = computed({
                get() {
                    return args.value;
                },
                set(val) {
                    args.value = val;
                }
            })

            return {args, value};
        },
        template: `
          <AntSearch v-bind="args" v-model="value"/>
          <div class="text-xs mt-4">Reactive value: {{ value }}</div>
        `,
    }),
    args: {
        value: "",
        placeholder: 'Search',
    },
};
